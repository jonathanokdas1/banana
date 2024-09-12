"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import abandonedCarts from "@/api/fake-db/abandonedCarts"; // Importando a lista de carrinhos abandonados

interface Product {
  name: string;
  price: string;
}

interface AbandonedCart {
  id: string;
  customer: string;
  email: string;
  whatsapp: string;
  products: Product[];
  totalAmount: string;
  dateAbandoned: string;
  deviceType: string;
  timeSpent: string;
}

interface CartTableProps {
  onOrderSelect: (order: AbandonedCart) => void;
  selectedOrder: AbandonedCart | null;
}

export function CartTable({ onOrderSelect, selectedOrder }: CartTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const sortedCarts = [...abandonedCarts].sort((a, b) => new Date(b.dateAbandoned).getTime() - new Date(a.dateAbandoned).getTime());

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentCarts = sortedCarts.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(sortedCarts.length / ordersPerPage);

  const handleRowClick = (cart: AbandonedCart) => {
    onOrderSelect(cart); // Seleciona o carrinho abandonado
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todos Abandonos</CardTitle>
        <CardDescription>Últimos checkouts abandonados</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nº Carrinho Abandonado</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Data e Hora do Abandono</TableHead>
              <TableHead className="text-right">Valor Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentCarts.map((cart) => (
              <TableRow
                key={cart.id}
                onClick={() => handleRowClick(cart)}
                className={selectedOrder && cart.id === selectedOrder.id 
                  ? "bg-gray-100 dark:bg-gray-700" 
                  : "hover:bg-gray-50 dark:hover:bg-gray-600"}
                style={{ cursor: 'pointer' }}
              >
                <TableCell>{cart.id}</TableCell>
                <TableCell>
                  <div className="font-medium">{cart.customer}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">{cart.email}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge variant="outline">Carrinho Abandonado</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{cart.dateAbandoned}</TableCell>
                <TableCell className="text-right">{cart.totalAmount}</TableCell>
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
