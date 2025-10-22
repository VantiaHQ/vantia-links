'use client'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'


const chartConfig = {
  clicks: {
    label: "Clicks",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function AnalyticsChart({ data }: { data: { name: string; clicks: number }[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-medium text-muted-foreground">Clics por Enlace </CardTitle>
      </CardHeader>
      <CardContent className="p-2 sm:p-6">
        <ChartContainer config={chartConfig} className="h-[350px] w-full min-w-0">
          <BarChart accessibilityLayer data={data}>
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={8}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 10) + (value.length > 10 ? '...' : '')}
              padding={{ left: 0 }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={14}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
              width={30}
            />
            <ChartTooltip
              cursor={{ fill: 'hsl(var(--muted))' }}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="clicks" fill="var(--color-clicks)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
