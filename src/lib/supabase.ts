import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const incrementClickCount = async (linkId: string) => {
  const { data, error } = await supabase
    .from('links')
    .select('clicks')
    .eq('id', linkId)
    .single();

  if (error) throw error;

  const newClicks = (Number(data?.clicks) || 0) + 1;

  const { error: updateError } = await supabase
    .from('links')
    .update({ clicks: newClicks })
    .eq('id', linkId);

  if (updateError) throw updateError;

  return newClicks;
};