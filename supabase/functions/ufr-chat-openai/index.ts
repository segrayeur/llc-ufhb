import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    
    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }

    const chatSessionId = sessionId || `session_${Date.now()}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Tu es l'assistant virtuel de l'UFR-LLC (Unité de Formation et de Recherche des Langues, Littératures et Civilisations) de l'Université Félix Houphouët-Boigny d'Abidjan, Côte d'Ivoire.

Mission : Former des spécialistes en langues, littératures et civilisations capables de répondre aux défis culturels, sociaux et économiques.

Départements :
- Anglais
- Allemand  
- Espagnol
- Portugais
- Lettres Modernes
- Sciences du Langage

Contacts :
- Téléphones : +225 014 103 7291 / +225 014 103 5350
- Emails : ufrllc@hotmail.com / llc.ufr@gmail.com
- WhatsApp : +225 050 685 4764
- Adresse : Université de Cocody, Abidjan, en face de l'ENS

Doyen : Professeur Coulibaly Adama

Réponds uniquement en français, sois professionnel et aide les utilisateurs avec des informations précises sur l'UFR-LLC.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${data.error?.message || 'Unknown error'}`);
    }

    const botResponse = data.choices[0]?.message?.content || 
      "Désolé, je n'ai pas pu traiter votre demande. Contactez-nous directement au +225 050 685 4764.";

    return new Response(JSON.stringify({ 
      response: botResponse,
      sessionId: chatSessionId 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ufr-chat-openai function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      response: "Une erreur est survenue. Contactez-nous au +225 050 685 4764."
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});