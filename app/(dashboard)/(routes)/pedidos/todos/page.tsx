"use client";

import { useState } from "react";
import { OrdersTable } from "@/components/pedidos/OrdersTable";
import { CardOrder } from "@/components/pedidos/CardOrder";
import { ToastProvider } from "@/components/ui/use-toast"; // Certifique-se de que o ToastProvider está importado corretamente
import { CardThisWeek } from "@/components/pedidos/CardThisWeek";
import { CardThisMonth } from "@/components/pedidos/CardThisMonth";
import { DatePickerWithRange } from "@/components/pedidos/DatePickerWithRange";
import { FilterExport } from "@/components/pedidos/FilterExport";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import pedidos from "@/api/fake-db/pedidos";

export default function PedidosPage() {
  const [selectedOrder, setSelectedOrder] = useState(pedidos.length > 0 ? pedidos[0] : null);
  const [isEditing, setIsEditing] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handlePreviousOrder = () => {
    const currentIndex = pedidos.findIndex((order) => order.id === selectedOrder?.id);
    if (currentIndex > 0) {
      setSelectedOrder(pedidos[currentIndex - 1]);
    }
  };

  const handleNextOrder = () => {
    const currentIndex = pedidos.findIndex((order) => order.id === selectedOrder?.id);
    if (currentIndex < pedidos.length - 1) {
      setSelectedOrder(pedidos[currentIndex + 1]);
    }
  };

  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
  };

  const handleShowEditDialog = () => {
    setOpenDialog(true); // Exibe o diálogo
  };

  const handleCloseEditDialog = () => {
    setOpenDialog(false); // Fecha o diálogo
  };

  const handleConfirmExitEditMode = () => {
    setIsEditing(false); // Sai do modo de edição
    setOpenDialog(false); // Fecha o diálogo
  };

  return (
    <ToastProvider> {/* Certifique-se de que esse componente está importado e está fechando corretamente */}
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
            <OrdersTable
              orders={pedidos}
              selectedOrder={selectedOrder}
              onOrderSelect={handleOrderSelect}
              isEditing={isEditing}
              onShowEditDialog={handleShowEditDialog}
            />
          </div>
          
          {/* Segunda coluna (Detalhes do Pedido) */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <CardOrder
                order={selectedOrder}
                onPreviousOrder={handlePreviousOrder}
                onNextOrder={handleNextOrder}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            </div>
          </div>
          
        </div>
      </div>

      {/* Diálogo de confirmação */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Atenção</DialogTitle>
            <DialogDescription>
              Você deseja descartar as alterações?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseEditDialog}>Não</Button>
            <Button onClick={handleConfirmExitEditMode}>Sim</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ToastProvider>
  );
}
