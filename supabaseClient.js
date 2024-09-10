import { createClient } from "@supabase/supabase-js";
const supabaseKey = import.meta.env.VITE_DATABASE_API_KEY;
const supabaseUrl = import.meta.env.VITE_DATABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
