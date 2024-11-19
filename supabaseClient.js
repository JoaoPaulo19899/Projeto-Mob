import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://SEU_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'SUA_CHAVE_ANONIMA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
