"use client";

import { useState } from "react";
import { RefundTable } from "@/components/pedidos/reembolsos/RefundTable";
import { CardRefund } from "@/components/pedidos/reembolsos/CardRefund";
import { ToastProvider } from "@/components/ui/toast";
import reembolso from "@/api/fake-db/reembolso"; // Certifique-se de que está importando corretamente

export default function CartAbandonedPage() {
  const [selectedOrder, setSelectedOrder] = useState(reembolso.length > 0 ? reembolso[0] : null);

  const currentIndex = reembolso.findIndex((order) => order.orderId === selectedOrder?.orderId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < reembolso.length - 1;

  const handlePreviousOrder = () => {
    if (hasPrevious) {
      setSelectedOrder(reembolso[currentIndex - 1]);
    }
  };

  const handleNextOrder = () => {
    if (hasNext) {
      setSelectedOrder(reembolso[currentIndex + 1]);
    }
  };

  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
  };

  return (
    <ToastProvider>
      <div className="flex justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 sm:py-4">
          {/* Primeira coluna (Tabela de Reembolsos) */}
          <div className="lg:col-span-2 space-y-6">
            <RefundTable
              orders={reembolso}
              selectedOrder={selectedOrder}
              onOrderSelect={handleOrderSelect}
            />
          </div>
          
          {/* Segunda coluna (Detalhes do Reembolso) */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              {selectedOrder && (
                <CardRefund
                  refund={selectedOrder}
                  onPreviousRefund={handlePreviousOrder}
                  onNextRefund={handleNextOrder}
                  hasPrevious={hasPrevious}
                  hasNext={hasNext}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </ToastProvider>
  );
}
