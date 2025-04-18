import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dqeagbdtgcobyhrajfef.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZWFnYmR0Z2NvYnlocmFqZmVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODM2MjgsImV4cCI6MjA2MDQ1OTYyOH0.D0QPH4EyCSirMAv5N_LXNJzcXrAlQftf_G3apmCPhoY'; // เต๋าใช้ key เต็มของตัวเองได้เลย

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: false // ไม่ใช้ LockManager เก็บ session
  }
});
