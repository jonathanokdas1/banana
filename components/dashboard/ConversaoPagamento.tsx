"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A multiple bar chart";

// Dados ajustados para "Initiate Checkout" e "Compras"
const chartData = [
  { day: "2024-09-01", initiateCheckout: 200, purchases: 150 },
  { day: "2024-09-02", initiateCheckout: 300, purchases: 200 },
  { day: "2024-09-03", initiateCheckout: 250, purchases: 180 },
  { day: "2024-09-04", initiateCheckout: 400, purchases: 300 },
  { day: "2024-09-05", initiateCheckout: 350, purchases: 250 },
  { day: "2024-09-06", initiateCheckout: 500, purchases: 400 },
];

const chartConfig = {
  initiateCheckout: {
    label: "Initiate Checkout",
    color: "hsl(var(--chart-1))", // Cor para Initiate Checkout
  },
  purchases: {
    label: "Compras",
    color: "hsl(var(--chart-2))", // Cor para Compras
  },
} satisfies ChartConfig;

export function ConversaoPagamento() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversão de Pagamento</CardTitle>
        <CardDescription>Últimos 6 dias de Initiate Checkouts e Compras</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(5)} // Exibe apenas a parte do dia
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="initiateCheckout" fill="hsl(var(--chart-1))" radius={4} />
            <Bar dataKey="purchases" fill="hsl(var(--chart-2))" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  );
}

export default ConversaoPagamento;
