'use client';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Link as LinkType } from "@/lib/data";

export function LinksTable({ links }: { links: LinkType[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Link</TableHead>
          <TableHead className="hidden md:table-cell">URL</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {links.map((link) => (
          <TableRow key={link.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <link.Icon className="h-5 w-5 text-muted-foreground" />
                <div className="font-medium text-lg">{link.title}</div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell max-w-xs truncate">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">{link.url}</a>
            </TableCell>
            <TableCell>
              <Badge variant="secondary" className="text-lg">{link.clicks.toLocaleString()}</Badge>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-lg"><Pencil className="mr-2 h-4 w-4" /> Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive focus:text-destructive text-lg"><Trash2 className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
