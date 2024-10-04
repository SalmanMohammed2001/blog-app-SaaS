// import { createBrowserClient } from '@supabase/ssr'
// import { Database } from '../types/database.types'

// export function createClient() {
//   return createBrowserClient<Database>(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   )
// }

import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export const createClient = (req?: Request) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createSupabaseClient(supabaseUrl, supabaseKey);

  if (req) {
    // Use cookies from the request if available
    const cookies = req.cookies!; // Access cookies from the request if needed
    // Set any authentication or context based on cookies here
  }

  return supabase;
};
