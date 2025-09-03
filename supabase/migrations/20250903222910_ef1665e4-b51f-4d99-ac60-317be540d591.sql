-- Fix RLS policies for inscriptions table to protect student privacy

-- Drop the problematic policy that allows all authenticated users to see all data
DROP POLICY IF EXISTS "Les administrateurs peuvent voir toutes les inscriptions" ON public.inscriptions;

-- Create proper RLS policies for student privacy protection

-- 1. Allow users to view only their own registration (match by email)
CREATE POLICY "Users can view their own registration data" 
ON public.inscriptions 
FOR SELECT 
USING (
  -- Allow if the user's email matches the inscription email
  auth.jwt() ->> 'email' = email
);

-- 2. Allow administrators to view all registrations
-- Note: This assumes you have a user roles system. For now, using a simple approach
-- You may want to implement proper admin roles later
CREATE POLICY "Admins can view all registration data" 
ON public.inscriptions 
FOR SELECT 
USING (
  -- This is a placeholder - you should implement proper admin role checking
  -- For now, only allow access via service role or specific admin emails
  auth.role() = 'service_role' OR
  auth.jwt() ->> 'email' IN ('admin@ufr-llc.ci', 'doyen@ufr-llc.ci')
);

-- 3. Update the admin update policy to be more restrictive
DROP POLICY IF EXISTS "Les administrateurs peuvent modifier les inscriptions" ON public.inscriptions;

CREATE POLICY "Admins can update registration data" 
ON public.inscriptions 
FOR UPDATE 
USING (
  -- Only admins can update registration data
  auth.role() = 'service_role' OR
  auth.jwt() ->> 'email' IN ('admin@ufr-llc.ci', 'doyen@ufr-llc.ci')
);

-- 4. Allow users to update their own registration data
CREATE POLICY "Users can update their own registration data" 
ON public.inscriptions 
FOR UPDATE 
USING (
  -- Allow if the user's email matches the inscription email
  auth.jwt() ->> 'email' = email
);

-- 5. Keep the public creation policy as is (this is correct for a registration form)
-- "Les inscriptions sont accessibles à tous pour création" - this remains unchanged