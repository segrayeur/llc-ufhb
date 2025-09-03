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
    const { text, voice = "Sarah" } = await req.json();
    const ELEVENLABS_API_KEY = Deno.env.get('ELEVENLABS_API_KEY');
    
    if (!ELEVENLABS_API_KEY) {
      throw new Error('ElevenLabs API key not configured');
    }

    if (!text) {
      throw new Error('Text is required');
    }

    console.log('Generating audio for text:', text.substring(0, 100));

    // ElevenLabs voice IDs
    const voiceIds = {
      "Sarah": "EXAVITQu4vr4xnSDxMaL",
      "Laura": "FGY2WhTYpPnrIDTdsKH5", 
      "Charlie": "IKne3meq5aSn9XLyUdCD",
      "George": "JBFqnCBsd6RMkjVDRZzb",
      "River": "SAz9YHcvj6GT2YYXdXww",
      "Alice": "Xb7hH8MSUJpSbSDYk0k2"
    };

    const voiceId = voiceIds[voice] || voiceIds["Sarah"];

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('ElevenLabs API error:', response.status, errorText);
      
      // Fallback to OpenAI TTS if available
      const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
      if (OPENAI_API_KEY) {
        console.log('Falling back to OpenAI TTS...');
        const openaiResp = await fetch('https://api.openai.com/v1/audio/speech', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'tts-1',
            input: text,
            voice: 'alloy',
            response_format: 'mp3',
          }),
        });

        if (!openaiResp.ok) {
          const openaiErr = await openaiResp.text();
          console.error('OpenAI TTS error:', openaiResp.status, openaiErr);
          throw new Error(`ElevenLabs API error: ${response.status}`);
        }

        // Return OpenAI audio
        const openAiBuffer = await openaiResp.arrayBuffer();
        // Chunked base64 encoding to avoid call stack issues
        const openAiBytes = new Uint8Array(openAiBuffer);
        let openAiBinary = '';
        const chunkSize = 8192;
        for (let i = 0; i < openAiBytes.length; i += chunkSize) {
          const chunk = openAiBytes.subarray(i, Math.min(i + chunkSize, openAiBytes.length));
          openAiBinary += String.fromCharCode.apply(null, Array.from(chunk));
        }
        const openAiBase64 = btoa(openAiBinary);

        return new Response(JSON.stringify({ 
          audioContent: openAiBase64,
          success: true,
          provider: 'openai'
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      throw new Error(`ElevenLabs API error: ${response.status}`);
    }

    // Get the audio buffer
    const audioBuffer = await response.arrayBuffer();
    
    // Convert to base64 using chunked encoding to avoid call stack overflow
    const bytes = new Uint8Array(audioBuffer);
    let binary = '';
    const chunkSizeMain = 8192;
    for (let i = 0; i < bytes.length; i += chunkSizeMain) {
      const chunk = bytes.subarray(i, Math.min(i + chunkSizeMain, bytes.length));
      binary += String.fromCharCode.apply(null, Array.from(chunk));
    }
    const base64Audio = btoa(binary);

    console.log('Audio generated successfully, size:', audioBuffer.byteLength);

    return new Response(JSON.stringify({ 
      audioContent: base64Audio,
      success: true 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in text-to-speech function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      success: false
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});