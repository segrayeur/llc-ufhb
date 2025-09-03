import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface DonationRequest {
  donor_name: string;
  donor_email: string;
  donor_phone?: string;
  amount: number; // En FCFA
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { donor_name, donor_email, donor_phone, amount, message }: DonationRequest = await req.json()

    if (!donor_name || !donor_email || !amount) {
      throw new Error('Nom, email et montant sont requis')
    }

    if (amount < 100) {
      throw new Error('Le montant minimum est de 100 FCFA')
    }

    // Créer le client Supabase avec la clé service pour bypasser RLS
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Générer une référence unique pour Paystack
    const reference = `UFR_LLC_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Enregistrer le don dans la base de données
    const { data: donation, error: dbError } = await supabase
      .from('donations')
      .insert({
        donor_name,
        donor_email,
        donor_phone,
        amount: amount * 100, // Convertir en kobo (centimes)
        paystack_reference: reference,
        message,
        payment_status: 'pending'
      })
      .select()
      .single()

    if (dbError) {
      console.error('Erreur base de données:', dbError)
      throw new Error('Erreur lors de l\'enregistrement du don')
    }

    // Préparer les données pour Paystack
    const paystackData = {
      email: donor_email,
      amount: amount * 100, // Paystack utilise les kobo (centimes)
      reference: reference,
      currency: 'NGN',
      callback_url: `${req.headers.get('origin')}/don-succes`,
      metadata: {
        donor_name,
        donor_phone,
        message,
        donation_id: donation.id
      }
    }

    // Initialiser le paiement avec Paystack
    const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('PAYSTACK_SECRET_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paystackData)
    })

    const paystackResult = await paystackResponse.json()

    if (!paystackResult.status) {
      console.error('Erreur Paystack:', paystackResult)
      throw new Error(paystackResult.message || 'Erreur lors de l\'initialisation du paiement')
    }

    return new Response(
      JSON.stringify({
        success: true,
        payment_url: paystackResult.data.authorization_url,
        reference: reference
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Erreur dans create-donation:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Une erreur est survenue' 
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})