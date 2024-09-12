"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Product {
  id: string;
  image: string;
  productName: string;
  price: string;
  sales: number;
  percentage: number; // Porcentagem vendida
  totalValue: string; // Valor vendido
}

interface ProductsTableProps {
  products: Product[];
}

export function ProductsTable({ products = [] }: ProductsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">Imagem</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Valor Vendido</TableHead>
          <TableHead>Quantidade Vendida</TableHead>
          <TableHead>Porcentagem Vendida</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length > 0 ? (
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src={product.image}
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">{product.productName}</TableCell>
              <TableCell>{product.totalValue}</TableCell>
              <TableCell>{product.sales}</TableCell>
              <TableCell>
                <Badge variant="outline">{product.percentage}%</Badge>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7} className="text-center">
              Nenhum produto disponível
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default ProductsTable;
