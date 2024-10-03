"use server"
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database.types';

export async function supabaseAdmin(){

    

const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.ADMIN_KEY!, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

    return supabase;


}