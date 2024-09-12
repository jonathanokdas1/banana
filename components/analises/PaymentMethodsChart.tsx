"use client"

import * as React from "react"
import { Pie, PieChart, Sector, Label } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const paymentData = [
  { method: "Cartão de Crédito", percentage: 50, fill: "#8884d8" },
  { method: "PIX", percentage: 35, fill: "#82ca9d" },
  { method: "Boleto", percentage: 15, fill: "#ffc658" },
]

const chartConfig = {
  cartaoCredito: {
    label: "Cartão de Crédito",
    color: "hsl(var(--chart-1))",
  },
  pix: {
    label: "PIX",
    color: "hsl(var(--chart-2))",
  },
  boleto: {
    label: "Boleto",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function PaymentMethodsChart() {
  const id = "pie-payment-methods"
  const [activeMethod, setActiveMethod] = React.useState(paymentData[0].method)

  const activeIndex = React.useMemo(
    () => paymentData.findIndex((item) => item.method === activeMethod),
    [activeMethod]
  )

  const methods = paymentData.map((item) => item.method)

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Métodos de Pagamento</CardTitle>
          <CardDescription>Distribuição dos métodos de pagamento</CardDescription>
        </div>
        <Select value={activeMethod} onValueChange={setActiveMethod}>
          <SelectTrigger
            className="ml-auto h-7 w-[160px] rounded-lg pl-2.5"
            aria-label="Select a method"
          >
            <SelectValue placeholder="Selecione o método" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {methods.map((key) => (
              <SelectItem
                key={key}
                value={key}
                className="rounded-lg [&_span]:flex"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-sm"
                    style={{
                      backgroundColor: paymentData.find(item => item.method === key)?.fill,
                    }}
                  />
                  {key}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={paymentData}
              dataKey="percentage"
              nameKey="method"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {paymentData[activeIndex].percentage}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {paymentData[activeIndex].method}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
