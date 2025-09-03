-- Créer une table pour suivre les dons
CREATE TABLE public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  donor_phone TEXT,
  amount INTEGER NOT NULL, -- Montant en centimes (kobo)
  currency TEXT DEFAULT 'NGN',
  paystack_reference TEXT UNIQUE,
  payment_status TEXT DEFAULT 'pending',
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre la création de dons (public)
CREATE POLICY "Anyone can create donations" 
ON public.donations 
FOR INSERT 
WITH CHECK (true);

-- Politique pour que les administrateurs voient tous les dons
CREATE POLICY "Admins can view all donations" 
ON public.donations 
FOR SELECT 
USING (
  auth.role() = 'service_role' OR
  auth.jwt() ->> 'email' IN ('admin@ufr-llc.ci', 'doyen@ufr-llc.ci')
);

-- Politique pour mettre à jour le statut des paiements
CREATE POLICY "Update payment status" 
ON public.donations 
FOR UPDATE 
USING (true);

-- Fonction pour mettre à jour updated_at
CREATE TRIGGER update_donations_updated_at
BEFORE UPDATE ON public.donations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();