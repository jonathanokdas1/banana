"use client"; // Marcar como Client Component

import { useState } from "react"; // Importa useState
import { useRouter } from "next/navigation"; // Atualizar a importação para usar 'next/navigation'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"; // Importando o Dialog

interface Product {
  id: string;
  image: string;
  productName: string;
  status: string;
  price: string;
  sales: number; // Garantir que o nome da propriedade esteja correto
  createdAt: string;
}

interface ProductsTableProps {
  products: Product[];
  onDelete: (id: string) => void; // Função para deletar
  onArchive: (id: string) => void; // Função para arquivar
  onActivate: (id: string) => void; // Função para ativar
}

export function ProductsTable({ products = [], onDelete, onArchive, onActivate }: ProductsTableProps) {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false); // Estado para controlar o diálogo
  const [productIdToDelete, setProductIdToDelete] = useState<string | null>(null); // Estado para armazenar o ID do produto a ser deletado

  const handleEdit = (id: string) => {
    router.push(`/produtos/editar/${id}`);
  };

  const confirmDelete = () => {
    if (productIdToDelete) {
      onDelete(productIdToDelete);
      setOpenDialog(false);
      setProductIdToDelete(null); // Limpar o ID do produto após a deleção
    }
  };

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Deletar</DialogTitle>
            <DialogDescription>
              Você tem certeza que deseja deletar este produto? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>Cancelar</Button>
            <Button onClick={confirmDelete}>Deletar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">Imagem</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Preço</TableHead>
            <TableHead className="hidden md:table-cell">Vendas Totais</TableHead> {/* Alterado para Vendas Totais */}
            <TableHead className="hidden md:table-cell">Data de Criação</TableHead>
            <TableHead>
              <span className="sr-only">Ações</span>
            </TableHead>
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
                <TableCell>
                  <Badge variant="outline">{product.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{product.price}</TableCell>
                <TableCell className="hidden md:table-cell">{product.sales}</TableCell> {/* Exibindo vendas totais */}
                <TableCell className="hidden md:table-cell">{product.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(product.id)}>Editar</DropdownMenuItem>
                      {product.status === "Arquivado" ? (
                        <DropdownMenuItem onClick={() => onActivate(product.id)}>Ativar</DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem onClick={() => onArchive(product.id)}>Arquivar</DropdownMenuItem>
                      )}
                      <DropdownMenuItem onClick={() => { setProductIdToDelete(product.id); setOpenDialog(true); }}>Deletar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
    </>
  );
}

export default ProductsTable;
