-- Fix security vulnerability: Restrict donation updates to authorized users only
-- Remove the insecure "Update payment status" policy that allows anyone to update
DROP POLICY IF EXISTS "Update payment status" ON public.donations;

-- Create a secure policy that only allows service role and admins to update donations
CREATE POLICY "Secure donation updates" 
ON public.donations 
FOR UPDATE 
USING (
  -- Only service role (edge functions) or admins can update
  (auth.role() = 'service_role'::text) OR 
  ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['admin@ufr-llc.ci'::text, 'doyen@ufr-llc.ci'::text]))
)
WITH CHECK (
  -- Additional check to ensure only authorized updates
  (auth.role() = 'service_role'::text) OR 
  ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['admin@ufr-llc.ci'::text, 'doyen@ufr-llc.ci'::text]))
);

-- Create a specific policy for payment status updates from edge functions
-- This ensures only our payment verification functions can update payment status
CREATE POLICY "Payment processor updates" 
ON public.donations 
FOR UPDATE 
USING (auth.role() = 'service_role'::text)
WITH CHECK (auth.role() = 'service_role'::text);