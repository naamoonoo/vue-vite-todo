import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL as string;
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
