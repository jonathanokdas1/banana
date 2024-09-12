"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import reembolso from "@/api/fake-db/reembolso"; // Importando a lista de reembolsos

interface RefundRequest {
  orderId: string;
  customerName: string;
  email: string;
  product: string;
  totalAmount: string;
  refundDate: string;
  justification: string;
}

interface RefundTableProps {
  onOrderSelect: (refund: RefundRequest) => void;
  selectedOrder: RefundRequest | null;
}

export function RefundTable({ onOrderSelect, selectedOrder }: RefundTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const sortedRefunds = [...reembolso].sort((a, b) => new Date(b.refundDate).getTime() - new Date(a.refundDate).getTime());

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentRefunds = sortedRefunds.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(sortedRefunds.length / ordersPerPage);

  const handleRowClick = (refund: RefundRequest) => {
    onOrderSelect(refund); // Seleciona o pedido de reembolso
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todos Reembolsos</CardTitle>
        <CardDescription>Últimos pedidos de reembolso solicitados</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nº do Pedido</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="hidden sm:table-cell">Produto</TableHead>
              <TableHead className="hidden md:table-cell">Data do Reembolso</TableHead>
              <TableHead className="text-right">Valor Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentRefunds.map((refund) => (
              <TableRow
                key={refund.orderId}
                onClick={() => handleRowClick(refund)}
                className={selectedOrder && refund.orderId === selectedOrder.orderId 
                  ? "bg-gray-100 dark:bg-gray-700" 
                  : "hover:bg-gray-50 dark:hover:bg-gray-600"}
                style={{ cursor: 'pointer' }}
              >
                <TableCell>{refund.orderId}</TableCell>
                <TableCell>
                  <div className="font-medium">{refund.customerName}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">{refund.email}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{refund.product}</TableCell>
                <TableCell className="hidden md:table-cell">{refund.refundDate}</TableCell>
                <TableCell className="text-right">{refund.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Componente de paginação customizada */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? "font-bold" : ""}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
