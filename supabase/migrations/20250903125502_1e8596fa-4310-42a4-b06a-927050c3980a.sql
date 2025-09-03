-- Create table for UFR knowledge base
CREATE TABLE public.ufr_knowledge (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  content TEXT NOT NULL,
  keywords TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ufr_knowledge ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (read-only for chatbot)
CREATE POLICY "Knowledge is publicly readable" 
ON public.ufr_knowledge 
FOR SELECT 
USING (true);

-- Create policy for authenticated users to manage knowledge
CREATE POLICY "Authenticated users can manage knowledge" 
ON public.ufr_knowledge 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ufr_knowledge_updated_at
BEFORE UPDATE ON public.ufr_knowledge
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert UFR knowledge data
INSERT INTO public.ufr_knowledge (title, category, content, keywords) VALUES
('Mission et Vision de l''UFR-LLC', 'Présentation', 'La mission de l''UFR-LLC est de former des étudiants compétents dans plusieurs langues et cultures, tout en contribuant à la recherche académique et à la promotion des humanités au service de la société.', ARRAY['UFR-LLC', 'mission', 'vision', 'formation', 'langues']),

('Doyen de l''UFR-LLC', 'Contact', 'Le Doyen actuel de l''UFR-LLC est le Professeur Coulibaly Adama.', ARRAY['doyen', 'direction', 'Coulibaly Adama']),

('Contacts UFR-LLC', 'Contact', 'Téléphones: +225 014 103 7291 / +225 014 103 5350. Emails: ufrllc@hotmail.com / llc.ufr@gmail.com. WhatsApp: +225 050 685 4764. Adresse: Université de Cocody (Abidjan), Côte d''Ivoire, en face de l''ENS.', ARRAY['contact', 'téléphone', 'email', 'WhatsApp', 'adresse']),

('Départements de l''UFR-LLC', 'Enseignement', 'L''UFR-LLC comprend les départements suivants: Anglais, Allemand, Espagnol, Portugais, Lettres Modernes et Sciences du Langage.', ARRAY['départements', 'Anglais', 'Allemand', 'Espagnol', 'Portugais', 'Lettres Modernes', 'Sciences du Langage']),

('Historique UFR-LLC', 'Historique', 'L''UFR-LLC fait partie de l''Université Félix Houphouët-Boigny, une institution d''enseignement supérieur de renom en Côte d''Ivoire.', ARRAY['historique', 'UFHB', 'université']),

('Services aux étudiants', 'Services', 'L''UFR-LLC offre des formations de qualité, un accompagnement académique, des activités culturelles et des partenariats institutionnels pour le développement des étudiants.', ARRAY['services', 'étudiants', 'formation', 'culture']);

-- Create table for chat conversations
CREATE TABLE public.chat_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;

-- Create policy for public access
CREATE POLICY "Chat conversations are publicly accessible" 
ON public.chat_conversations 
FOR ALL 
USING (true);