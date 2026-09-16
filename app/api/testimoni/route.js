import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  const { name, role, quote } = await request.json();

  if (!name || !role || !quote) {
    return Response.json({ error: 'Data tidak lengkap' }, { status: 400 });
  }

  const { error } = await supabase.from('testimonials').insert([{ name, role, quote }]);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  // Sinyal ke Next.js: Beranda perlu di-refresh sekarang, karena ada data baru
  revalidatePath('/');

  return Response.json({ success: true });
}