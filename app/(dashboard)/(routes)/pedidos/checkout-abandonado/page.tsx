"use client";

import { useState } from "react";
import { CartTable } from "@/components/pedidos/checkout-abandonado/CartTable";
import { CardAbandoned } from "@/components/pedidos/checkout-abandonado/CardAbandoned";
import { ToastProvider } from "@/components/ui/use-toast";
import { CardThisWeek } from "@/components/pedidos/CardThisWeek";
import { CardThisMonth } from "@/components/pedidos/CardThisMonth";
import { DatePickerWithRange } from "@/components/pedidos/checkout-abandonado/DatePickerWithRange";
import { FilterExport } from "@/components/pedidos/checkout-abandonado/FilterExport";

import abandonedCarts from "@/api/fake-db/abandonedCarts"; // Importar a lista de carrinhos abandonados

export default function CartAbandonedPage() {
  const [selectedOrder, setSelectedOrder] = useState(abandonedCarts.length > 0 ? abandonedCarts[0] : null);

  const handlePreviousOrder = () => {
    const currentIndex = abandonedCarts.findIndex((order) => order.id === selectedOrder?.id);
    if (currentIndex > 0) {
      setSelectedOrder(abandonedCarts[currentIndex - 1]);
    }
  };

  const handleNextOrder = () => {
    const currentIndex = abandonedCarts.findIndex((order) => order.id === selectedOrder?.id);
    if (currentIndex < abandonedCarts.length - 1) {
      setSelectedOrder(abandonedCarts[currentIndex + 1]);
    }
  };

  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
  };

  return (
    <ToastProvider>
      <div className="flex justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 sm:py-4">
          {/* Primeira coluna (Cards, Filtros e Tabela de Pedidos) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cards Semanais e Mensais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <CardThisWeek />
              <CardThisMonth />
            </div>

            {/* Seletor de Datas */}
            <DatePickerWithRange />

            {/* Filtros e Exportação */}
            <div className="flex justify-between items-center">
              <FilterExport />
            </div>

            {/* Tabela de Pedidos */}
            <CartTable
              orders={abandonedCarts} // Use abandonedCarts aqui
              selectedOrder={selectedOrder}
              onOrderSelect={handleOrderSelect}
            />
          </div>
          
          {/* Segunda coluna (Detalhes do Pedido) */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <CardAbandoned
                order={selectedOrder}
                onPreviousOrder={handlePreviousOrder}
                onNextOrder={handleNextOrder}
              />
            </div>
          </div>
        </div>
      </div>
    </ToastProvider>
  );
}
