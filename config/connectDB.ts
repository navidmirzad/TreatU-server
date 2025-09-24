import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL ?? ''
//const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''; 
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? ''
const supabase = createClient(supabaseUrl, supabaseAnonKey, { global: { headers: { 'Authorization': `Bearer ${supabaseAnonKey}` } } })

export default supabase;