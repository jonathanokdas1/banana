"use client";

import * as React from 'react';
import RadialChartCard from '@/components/analises/RadialChartCard';
import { Header } from '@/components/analises/Header';
import { AreaChartComponent } from '@/components/analises/AreaChartComponent';
import { ProductsTable } from '@/components/analises/ProductsTable';
import { PaymentMethodsChart } from '@/components/analises/PaymentMethodsChart';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

// Exemplo de dados de produtos mais vendidos
const products = [
  {
    id: "1",
    image: "/path/to/image1.jpg",
    productName: "Produto 1",
    status: "Ativo",
    price: "R$ 100,00",
    sales: 300,
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    image: "/path/to/image2.jpg",
    productName: "Produto 2",
    status: "Ativo",
    price: "R$ 200,00",
    sales: 500,
    createdAt: "2024-02-15",
  },
  // Mais produtos...
];

const ReportOverview: React.FC = () => {
  const vendasTotaisData = [{ name: "Vendas", value: 3000, fill: "#8884d8" }];
  const lucroLiquidoData = [{ name: "Lucro", value: 12000, fill: "#82ca9d" }];
  const quantidadePedidosData = [{ name: "Pedidos", value: 1500, fill: "#ffc658" }];

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-6xl">
        {/* Cabeçalho */}
        <Header />

        {/* Seção de Vendas, Lucro Líquido e Quantidade de Pedidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <RadialChartCard
            title="Vendas Totais"
            data={vendasTotaisData}
            label="Vendas"
            footerText="Total de vendas nos últimos 6 meses"
          />
          <RadialChartCard
            title="Initiate Checkout"
            data={lucroLiquidoData}
            label="IC"
            footerText="Initiate Checkout nos últimos 6 meses"
          />
          <RadialChartCard
            title="Quantidade de Pedidos"
            data={quantidadePedidosData}
            label="Pedidos"
            footerText="Total de pedidos nos últimos 6 meses"
          />
        </div>

        {/* Gráfico abaixo da seção de Vendas */}
        <div className="mt-6 w-full">
          <AreaChartComponent />
        </div>

        {/* Produtos Mais Vendidos e Métodos de Pagamento lado a lado */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Produtos Mais Vendidos */}
          <Card>
            <CardHeader>
              <CardTitle>Produtos Mais Vendidos</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductsTable products={products} />
            </CardContent>
          </Card>

          {/* Métodos de Pagamento */}
          <Card>
            <CardContent>
              <PaymentMethodsChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportOverview;
