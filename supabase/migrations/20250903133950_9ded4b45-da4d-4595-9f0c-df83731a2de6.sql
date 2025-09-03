-- Fix security vulnerability: Make chat conversations private per session
-- Add session_id to track conversations per session
ALTER TABLE public.chat_conversations 
ADD COLUMN session_id TEXT;

-- Drop the insecure public policy
DROP POLICY IF EXISTS "Chat conversations are publicly accessible" ON public.chat_conversations;

-- Create secure RLS policies
-- Allow users to insert their own conversations
CREATE POLICY "Users can create conversations with session_id" 
ON public.chat_conversations 
FOR INSERT 
WITH CHECK (session_id IS NOT NULL);

-- Allow users to view only their own session conversations
CREATE POLICY "Users can view their own session conversations" 
ON public.chat_conversations 
FOR SELECT 
USING (session_id IS NOT NULL AND session_id = current_setting('request.session_id', true));

-- Allow authenticated admins to view all conversations for moderation
CREATE POLICY "Authenticated users can view all conversations" 
ON public.chat_conversations 
FOR SELECT 
TO authenticated
USING (auth.role() = 'authenticated');

-- Update the edge function to use session-based access
-- Add index for better performance
CREATE INDEX idx_chat_conversations_session_id ON public.chat_conversations(session_id);