"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

export function ExtratoSaque() {
  const saques = [
    { data: "2024-09-01", valor: "R$ 2.000,00", status: "Processado" },
    { data: "2024-08-15", valor: "R$ 3.500,00", status: "Pendente" },
    { data: "2024-08-10", valor: "R$ 1.500,00", status: "Processado" },
    { data: "2024-08-05", valor: "R$ 2.800,00", status: "Pendente" },
    { data: "2024-07-25", valor: "R$ 3.000,00", status: "Processado" },
    { data: "2024-07-15", valor: "R$ 2.400,00", status: "Pendente" },
    { data: "2024-07-01", valor: "R$ 3.200,00", status: "Processado" },
    { data: "2024-06-20", valor: "R$ 4.000,00", status: "Processado" },
    { data: "2024-06-10", valor: "R$ 1.800,00", status: "Pendente" },
    { data: "2024-06-01", valor: "R$ 2.500,00", status: "Processado" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(saques.length / itemsPerPage);

  const paginatedSaques = saques.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Extrato de Saques</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedSaques.map((saque, index) => (
              <TableRow key={index}>
                <TableCell>{saque.data}</TableCell>
                <TableCell>{saque.valor}</TableCell>
                <TableCell>{saque.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Paginação */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1} 
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <PaginationItem key={pageIndex}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(pageIndex + 1)}
                  active={currentPage === pageIndex + 1}
                >
                  {pageIndex + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages} 
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}
