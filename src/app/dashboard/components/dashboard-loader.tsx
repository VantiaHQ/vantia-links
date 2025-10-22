'use client';

import { useEffect, useState } from 'react';

export function DashboardLoader({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading dashboard...</div>;
  }

  return <>{children}</>;
}