import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, sessionId } = await req.json();
    
    // Generate session ID if not provided
    const chatSessionId = sessionId || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Search for relevant knowledge in the database
    const { data: knowledge, error } = await supabase
      .from('ufr_knowledge')
      .select('*')
      .or(`content.ilike.%${message}%,keywords.cs.{${message}}`)
      .limit(3);

    if (error) {
      throw new Error('Erreur lors de la recherche dans la base de connaissances');
    }

    let response = '';
    
    if (knowledge && knowledge.length > 0) {
      // Use the first relevant knowledge item
      const relevantInfo = knowledge[0];
      response = `Basé sur mes connaissances de l'UFR-LLC: ${relevantInfo.content}`;
      
      // Add additional context if available
      if (knowledge.length > 1) {
        response += `\n\nInformations complémentaires: ${knowledge.slice(1).map(k => k.content).join('. ')}`;
      }
    } else {
      // Default response if no specific knowledge found
      response = `Je suis l'assistant virtuel de l'UFR-LLC. Je n'ai pas trouvé d'informations spécifiques sur votre question "${message}". 

Voici les informations générales que je peux vous fournir:

• **Contact**: Téléphones: +225 014 103 7291 / +225 014 103 5350
• **Emails**: ufrllc@hotmail.com / llc.ufr@gmail.com  
• **WhatsApp**: +225 050 685 4764
• **Adresse**: Université de Cocody (Abidjan), en face de l'ENS

**Départements disponibles**: Anglais, Allemand, Espagnol, Portugais, Lettres Modernes et Sciences du Langage.

Pour des questions spécifiques, n'hésitez pas à nous contacter directement.`;
    }

    // Save conversation to database with session ID
    await supabase
      .from('chat_conversations')
      .insert({
        user_message: message,
        bot_response: response,
        session_id: chatSessionId
      });

    return new Response(JSON.stringify({ response, sessionId: chatSessionId }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ufr-chat function:', error);
    return new Response(JSON.stringify({ 
      error: 'Une erreur est survenue. Veuillez réessayer.',
      response: 'Désolé, je rencontre des difficultés techniques. Vous pouvez nous contacter directement au +225 050 685 4764 (WhatsApp) pour une assistance immédiate.'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});