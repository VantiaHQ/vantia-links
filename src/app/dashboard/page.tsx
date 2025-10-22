'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, MousePointerClick } from "lucide-react";
import { AnalyticsChart } from "./components/analytics-chart";

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
    <div className="space-y-4 mx-auto mt-2 max-w-screen xl:max-w-7xl">
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
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {linksData.sort((a,b) => b.clicks - a.clicks).map((link) => {
                const Icon = link.Icon;
                return (
                  <div key={link.id} className="flex items-center justify-between py-4 px-6">
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="font-medium truncate">{link.title}</span>
                    </div>
                    <Badge variant="secondary" className="text-sm flex-shrink-0">{link.clicks.toLocaleString()}</Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}