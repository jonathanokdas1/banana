"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

const chartData = [
  { day: "Seg", current: 50, previous: 30 },
  { day: "Ter", current: 70, previous: 50 },
  { day: "Qua", current: 90, previous: 60 },
  { day: "Qui", current: 120, previous: 80 },
  { day: "Sex", current: 160, previous: 110 },
  { day: "Sab", current: 200, previous: 130 },
  { day: "Dom", current: 250, previous: 150 },
];

const chartConfig = {
  current: {
    label: "Semana Atual",
    color: "hsl(var(--chart-1))",
  },
  previous: {
    label: "Semana Passada",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const IndicadoresCrescimento: React.FC = () => {
  const currentWeekValue = chartData.reduce((total, data) => total + data.current, 0);
  const previousWeekValue = chartData.reduce((total, data) => total + data.previous, 0);
  const growthPercentage = ((currentWeekValue - previousWeekValue) / previousWeekValue) * 100; 

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Indicadores de Crescimento</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">Crescimento: {growthPercentage.toFixed(2).replace('.', ',')}%</p>
      </CardContent>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[300px]">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12, top: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="current"
              fill="url(#fillCurrent)"
              stroke="var(--color-current)"
            />
            <Area
              type="monotone"
              dataKey="previous"
              fill="url(#fillPrevious)"
              stroke="var(--color-previous)"
            />
            <defs>
              <linearGradient id="fillCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-current)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-current)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPrevious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-previous)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-previous)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default IndicadoresCrescimento;
