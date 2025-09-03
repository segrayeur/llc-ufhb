import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { reference } = await req.json()

    if (!reference) {
      throw new Error('Référence de transaction requis')
    }

    // Vérifier le paiement avec Paystack
    const paystackResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('PAYSTACK_SECRET_KEY')}`,
        'Content-Type': 'application/json',
      }
    })

    const paystackResult = await paystackResponse.json()

    if (!paystackResult.status) {
      throw new Error('Échec de la vérification du paiement')
    }

    // Créer le client Supabase avec la clé service
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Mettre à jour le statut du don dans la base de données
    const paymentStatus = paystackResult.data.status === 'success' ? 'completed' : 'failed'
    
    const { data: donation, error: updateError } = await supabase
      .from('donations')
      .update({ 
        payment_status: paymentStatus,
        updated_at: new Date().toISOString()
      })
      .eq('paystack_reference', reference)
      .select()
      .single()

    if (updateError) {
      console.error('Erreur mise à jour:', updateError)
      throw new Error('Erreur lors de la mise à jour du statut')
    }

    return new Response(
      JSON.stringify({
        success: true,
        payment_status: paymentStatus,
        transaction_data: paystackResult.data,
        donation: donation
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Erreur dans verify-donation:', error)
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