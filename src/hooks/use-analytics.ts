'use client';

import { useState, useEffect } from 'react';
import { useSupabase } from '@/lib/provider';
import { Link, mapSupabaseLinkToLink } from '@/lib/data';
import { SupabaseLink } from '@/lib/types';

export function useAnalytics() {
  const { supabase } = useSupabase();
  const [linksData, setLinksData] = useState<Link[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!supabase) return;

      setLoading(true);

      const { data: links, error: linksError } = await supabase.from('links').select('*');

      if (linksError) {
        setError(linksError.message);
      } else if (links) {
        const mappedLinks = links.map(mapSupabaseLinkToLink);
        setLinksData(mappedLinks);
      }

      setLoading(false);
    };

    fetchData();
  }, [supabase]);

  return { linksData, loading, error };
}
