"use client";

import { CreateOrder } from "@/components/pedidos/novo/CreateOrder"; // Importe o componente CreateOrder
import { ToastProvider } from "@/components/ui/use-toast"; // Importe o ToastProvider

export default function CreateOrderPage() {
  return (
    <ToastProvider>
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl">
          <CreateOrder />
        </div>
      </div>
    </ToastProvider>
  );
}
