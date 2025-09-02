import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pqeenibzyoipdphzbekl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZWVuaWJ6eW9pcGRwaHpiZWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTc4NDYsImV4cCI6MjA3MTg3Mzg0Nn0.4l4BD0oRlNYcmoU7GltyelazjO8leJaED4DUHrv_9SE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
