
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { SupabaseClient, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export const SupabaseContext = createContext<{ supabase: SupabaseClient, session: Session | null }>({ supabase, session: null });

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <SupabaseContext.Provider value={{ supabase, session }}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => useContext(SupabaseContext);

export const useUser = () => {
  const { session } = useSupabase();
  return session?.user ?? null;
};

export const useIdToken = () => {
  const { session } = useSupabase();
  return session?.access_token ?? null;
};
