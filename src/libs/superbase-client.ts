import { createClient } from "@supabase/supabase-js";
import { Database } from "types/supabase";

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPERBASE_API_URL,
  import.meta.env.VITE_SUPERBASE_API_KEY,
);
