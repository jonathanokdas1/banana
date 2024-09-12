"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { FiSettings } from "react-icons/fi" // Ícone de configurações atualizado
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const chartData = [
  { date: "2024-04-01", vendas: 222, faturamento: 150, initiateCheckout: 100, carrinhosAbandonados: 50, pedidosPagos: 200, ticketMedio: 75 },
  { date: "2024-04-02", vendas: 250, faturamento: 170, initiateCheckout: 150, carrinhosAbandonados: 60, pedidosPagos: 220, ticketMedio: 80 },
  { date: "2024-04-03", vendas: 280, faturamento: 180, initiateCheckout: 120, carrinhosAbandonados: 55, pedidosPagos: 230, ticketMedio: 78 },
  { date: "2024-04-04", vendas: 300, faturamento: 190, initiateCheckout: 140, carrinhosAbandonados: 58, pedidosPagos: 240, ticketMedio: 80 },
  { date: "2024-04-05", vendas: 330, faturamento: 210, initiateCheckout: 160, carrinhosAbandonados: 65, pedidosPagos: 260, ticketMedio: 85 },
]

const chartConfig = {
  vendas: {
    label: "Vendas",
    color: "hsl(var(--chart-1))",
  },
  faturamento: {
    label: "Faturamento",
    color: "hsl(var(--chart-2))",
  },
  initiateCheckout: {
    label: "Initiate Checkout",
    color: "hsl(var(--chart-3))",
  },
  carrinhosAbandonados: {
    label: "Carrinhos Abandonados",
    color: "hsl(var(--chart-4))",
  },
  pedidosPagos: {
    label: "Pedidos Pagos",
    color: "hsl(var(--chart-5))",
  },
  ticketMedio: {
    label: "Ticket Médio",
    color: "hsl(220, 90%, 60%)", // Definindo uma cor azul como exemplo
  },
  
}

export const AreaChartComponent = () => {
  const [selectedChart1, setSelectedChart1] = React.useState("vendas")
  const [selectedChart2, setSelectedChart2] = React.useState("initiateCheckout")

  return (
<Card className="w-full">
  <CardHeader className="flex flex-col items-center gap-2 border-b py-5">
    <div className="grid gap-1 text-center">
      <CardTitle>
        {chartConfig[selectedChart1].label} vs. {chartConfig[selectedChart2].label}
      </CardTitle>
      <CardDescription>
        <div className="leading-none text-muted-foreground">
          Comparando {chartConfig[selectedChart1].label} e {chartConfig[selectedChart2].label} nos últimos 5 dias
        </div>
      </CardDescription>
        </div>

        {/* Ícone de Configurações */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="ml-auto">
              <FiSettings className="h-5 w-5 text-muted-foreground" /> {/* Ícone de configurações */}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <h2 className="text-lg font-bold mb-4">Configurações do Gráfico</h2>

            {/* Configuração Gráfico 1 */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Gráfico 1</label>
              <Select value={selectedChart1} onValueChange={(value) => setSelectedChart1(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um elemento para o Gráfico 1" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(chartConfig)
                    .filter(option => option !== selectedChart2) // Remover o que já está no Gráfico 2
                    .map(option => (
                      <SelectItem key={option} value={option}>
                        {chartConfig[option].label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            {/* Configuração Gráfico 2 */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Gráfico 2</label>
              <Select value={selectedChart2} onValueChange={(value) => setSelectedChart2(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um elemento para o Gráfico 2" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(chartConfig)
                    .filter(option => option !== selectedChart1) // Remover o que já está no Gráfico 1
                    .map(option => (
                      <SelectItem key={option} value={option}>
                        {chartConfig[option].label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </SheetContent>
        </Sheet>
      </CardHeader>
      
      {/* Conteúdo do Gráfico */}
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[350px] w-full">
          <AreaChart data={chartData} width={1000} height={350}>
            <defs>
              {/* Gradiente para o gráfico 1 */}
              <linearGradient id="fillChart1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartConfig[selectedChart1].color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartConfig[selectedChart1].color} stopOpacity={0.1} />
              </linearGradient>

              {/* Gradiente para o gráfico 2 */}
              <linearGradient id="fillChart2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartConfig[selectedChart2].color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartConfig[selectedChart2].color} stopOpacity={0.1} />
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
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area dataKey={selectedChart1} type="natural" fill="url(#fillChart1)" stroke={chartConfig[selectedChart1].color} />
            <Area dataKey={selectedChart2} type="natural" fill="url(#fillChart2)" stroke={chartConfig[selectedChart2].color} />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
