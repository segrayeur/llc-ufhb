-- Créer la table pour les inscriptions
CREATE TABLE public.inscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  date_naissance DATE,
  niveau_etude TEXT,
  filiere_souhaitee TEXT,
  message TEXT,
  status TEXT DEFAULT 'en_attente' CHECK (status IN ('en_attente', 'accepte', 'refuse')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer Row Level Security
ALTER TABLE public.inscriptions ENABLE ROW LEVEL SECURITY;

-- Créer les politiques pour les inscriptions
CREATE POLICY "Les inscriptions sont accessibles à tous pour création" 
ON public.inscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Les administrateurs peuvent voir toutes les inscriptions" 
ON public.inscriptions 
FOR SELECT 
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Les administrateurs peuvent modifier les inscriptions" 
ON public.inscriptions 
FOR UPDATE 
USING (auth.role() = 'authenticated'::text);

-- Créer un trigger pour mettre à jour updated_at automatiquement
CREATE TRIGGER update_inscriptions_updated_at
BEFORE UPDATE ON public.inscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();