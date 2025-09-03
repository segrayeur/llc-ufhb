import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface AudioTestimonialProps {
  text: string;
  voice?: string;
  className?: string;
}

export function AudioTestimonial({ text, voice = "Sarah", className = "" }: AudioTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const generateAudio = async () => {
    if (audioUrl) return; // Already generated

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { text, voice }
      });

      if (error) throw error;

      if (data.audioContent) {
        const audioBlob = new Blob(
          [Uint8Array.from(atob(data.audioContent), c => c.charCodeAt(0))],
          { type: 'audio/mpeg' }
        );
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      }
    } catch (error) {
      console.error('Error generating audio:', error);
      toast({
        title: "Erreur",
        description: "Impossible de générer l'audio pour ce témoignage.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlay = async () => {
    if (!audioUrl) {
      await generateAudio();
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 0);
      });
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const downloadAudio = () => {
    if (audioUrl) {
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = `temoignage-audio-${Date.now()}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Cleanup audio URL on unmount
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  return (
    <div className={`bg-muted/30 border border-primary/20 rounded-lg p-4 space-y-3 ${className}`}>
      {/* Audio Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            onClick={togglePlay}
            disabled={isLoading}
            size="sm"
            variant="outline"
            className="flex items-center space-x-2 hover:bg-primary/10"
          >
            {isLoading ? (
              <Volume2 className="h-4 w-4 animate-pulse" />
            ) : isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span className="text-xs">
              {isLoading ? 'Génération...' : isPlaying ? 'Pause' : 'Écouter'}
            </span>
          </Button>
          
          {/* Duration Display */}
          {duration > 0 && (
            <span className="text-xs text-muted-foreground">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          )}
        </div>

        {/* Download Button */}
        {audioUrl && (
          <Button
            onClick={downloadAudio}
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0"
            title="Télécharger l'audio"
          >
            <Download className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Progress Bar */}
      {duration > 0 && (
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-100"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}