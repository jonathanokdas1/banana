"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range"; // Importando o DatePickerWithRange

const chartData = [
  { date: "2024-04-01", vendas: 222 },
  { date: "2024-04-02", vendas: 180 },
  { date: "2024-04-03", vendas: 120 },
  { date: "2024-04-04", vendas: 260 },
  { date: "2024-04-05", vendas: 290 },
  { date: "2024-04-06", vendas: 340 },
  { date: "2024-04-07", vendas: 180 },
  { date: "2024-04-08", vendas: 320 },
  { date: "2024-04-09", vendas: 110 },
  { date: "2024-04-10", vendas: 190 },
  // ... outros dados omitidos para brevidade
];

const chartConfig = {
  vendas: {
    label: "Vendas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const VendasSemanais: React.FC = () => {
  const [dateRange, setDateRange] = React.useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(2024, 3, 1), // Inicializando com uma data
    to: new Date(2024, 3, 10), // Inicializando com uma data
  });

  // Filtrando os dados com base no intervalo de datas
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    if (!dateRange.from || !dateRange.to) return true; // Se não há intervalo definido, não filtra
    return date >= dateRange.from && date <= dateRange.to;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Vendas Semanais</CardTitle>
          <CardDescription>Gráfico de vendas em um intervalo de datas selecionado</CardDescription>
        </div>
        <DatePickerWithRange className="sm:ml-auto" onChange={setDateRange} /> {/* Utilizando o DatePickerWithRange */}
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillVendas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-vendas)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-vendas)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="vendas"
              type="natural"
              fill="url(#fillVendas)"
              stroke="var(--color-vendas)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default VendasSemanais;
