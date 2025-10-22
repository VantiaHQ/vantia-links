'use client';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { LinksTable } from "./components/links-table";
import type { Link as LinkType } from "@/lib/data";
import { useSupabase } from '@/lib/provider';

export default function LinksPage() {
  const { supabase } = useSupabase();
  const [links, setLinks] = useState<LinkType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      if (!supabase) return;

      setLoading(true);

      const { data, error } = await supabase.from('analytics').select('*');

      if (error) {
        setError(error.message);
      } else {
        setLinks(data);
      }

      setLoading(false);
    };

    fetchLinks();
  }, [supabase]);

  if (loading) {
    return <div>Loading links...</div>;
  }

  if (error) {
    return <div>Error loading links: {error}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Links</CardTitle>
            <CardDescription>
              Manage your links and view their performance.
            </CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Link
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {links && <LinksTable links={links} />}
      </CardContent>
    </Card>
  );
}