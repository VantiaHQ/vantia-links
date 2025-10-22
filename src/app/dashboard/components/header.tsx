'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-end gap-4 border-b bg-background px-4 md:px-6 font-sans">
      <Link href="/">
        <Button variant="outline">
          <ExternalLink className="mr-2 h-4 w-4" />
          Ir a Links
        </Button>
      </Link>
    </header>
  );
}
