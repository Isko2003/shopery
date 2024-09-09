const supabaseKey = import.meta.env.VITE_DATABASE_API_KEY;
const supabaseUrl = import.meta.env.VITE_DATABASE_URL;
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
