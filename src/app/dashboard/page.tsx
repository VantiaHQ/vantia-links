'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, MousePointerClick } from "lucide-react";
import { AnalyticsChart } from "./components/analytics-chart";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useAnalytics } from "@/hooks/use-analytics";

export default function DashboardPage() {
  const { linksData, loading, error } = useAnalytics();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!linksData) {
    return <div>No data</div>;
  }

  const totalClicks = linksData.reduce((acc, link) => acc + link.clicks, 0);

  return (
    <div className="space-y-4 mt-2">
      <div className="grid gap-4 md:grid-cols-2">
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-3xl text-muted-foreground font-medium">Clics Totales</CardTitle>
            <MousePointerClick className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
          <div className="text-6xl font-bold text-foreground/85">
          {totalClicks.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-3xl text-muted-foreground font-medium">Enlaces Activos</CardTitle>
            <Link2 className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-6xl font-bold text-foreground/85">{linksData.length}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <AnalyticsChart data={linksData.map(link => ({ name: link.id, clicks: link.clicks }))} />
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-muted-foreground font-medium">Vistas por Enlace</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {linksData.sort((a,b) => b.clicks - a.clicks).map((link) => {
                  const Icon = link.Icon;
                  return (
                  <TableRow key={link.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{link.title}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="secondary" className="text-sm">{link.clicks.toLocaleString()}</Badge>
                    </TableCell>
                  </TableRow>
                )})}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}