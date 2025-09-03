-- Fix security vulnerability: Replace all insecure UPDATE policies with secure ones
-- First, drop ALL existing UPDATE policies on donations table
DROP POLICY IF EXISTS "Update payment status" ON public.donations;
DROP POLICY IF EXISTS "Secure donation updates" ON public.donations;
DROP POLICY IF EXISTS "Payment processor updates" ON public.donations;

-- Create a single, secure policy for donation updates
-- Only service role (edge functions) and admin emails can update donations
CREATE POLICY "Admin and service role donation updates" 
ON public.donations 
FOR UPDATE 
USING (
  -- Only service role (edge functions) or admin users can update
  (auth.role() = 'service_role'::text) OR 
  ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['admin@ufr-llc.ci'::text, 'doyen@ufr-llc.ci'::text]))
)
WITH CHECK (
  -- Same restriction for WITH CHECK
  (auth.role() = 'service_role'::text) OR 
  ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['admin@ufr-llc.ci'::text, 'doyen@ufr-llc.ci'::text]))
);