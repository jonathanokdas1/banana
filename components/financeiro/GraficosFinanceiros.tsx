"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

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

// Dados para o gráfico de barras
const chartData = [
  { month: "January", saldo: 12000 },
  { month: "February", saldo: 15000 },
  { month: "March", saldo: 17000 },
  { month: "April", saldo: 19000 },
  { month: "May", saldo: 20000 },
  { month: "June", saldo: 22000 },
];

const chartConfig = {
  saldo: {
    label: "Saldo",
    color: "hsl(var(--primary))", // Usando variável diretamente
  },
} satisfies ChartConfig;

export function GraficosFinanceiros() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Gráfico de Saldos</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <ChartContainer config={chartConfig} className="w-full h-64">
          <BarChart
            width={500}
            height={250}
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="var(--border-color)" vertical={false} />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: 'var(--foreground)' }} // Cor global para o texto do eixo Y
              tickFormatter={(value) => `R$ ${value.toLocaleString()}`} 
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: 'var(--foreground)' }} // Cor global para o texto do eixo X
              tickFormatter={(value) => value.slice(0, 3)} 
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="saldo" fill="hsl(var(--primary))" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Aumento de 5.2% neste mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando o saldo total nos últimos 6 meses.
        </div>
      </CardFooter>
    </Card>
  );
}
