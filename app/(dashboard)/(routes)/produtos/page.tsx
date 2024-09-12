"use client"; // Marcar como Client Component

import { useState } from "react"; // Importa useState
import { ProductsTabs } from "@/components/produtos/ProductsTabs";
import CriarPedido from "@/components/produtos/criar/CriarPedido";
import { ProductsTable } from "@/components/produtos/ProductsTable";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Importando os produtos simulados
import produtos from "@/api/fake-db/produtos"; // Certifique-se que o caminho esteja correto

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all"); // Estado para gerenciar a aba ativa
  const [productList, setProductList] = useState(produtos); // Estado para armazenar a lista de produtos

  // Função para mover um produto para a categoria "Lixo"
  const handleMoveToTrash = (id: string) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status: "Lixo" } : product
      )
    );
  };

  // Função para arquivar um produto
  const handleArchive = (id: string) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status: "Arquivado" } : product
      )
    );
  };

  // Função para deletar um produto
  const handleDelete = (id: string) => {
    setProductList((prevProducts) => prevProducts.filter(product => product.id !== id));
  };

  // Filtra os produtos com base na aba ativa
  const filteredProducts = productList.filter((product) => {
    if (activeTab === "all") return true;
    if (activeTab === "active") return product.status === "Ativo";
    if (activeTab === "draft") return product.status === "Lixo";
    if (activeTab === "archived") return product.status === "Arquivado";
    return false;
  });

  return (
    <>
      {/* Título e Tabs */}
      <div className="flex justify-between items-center">
        <ProductsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex justify-end">
          <CriarPedido />
        </div>
      </div>

      {/* Tabela de Produtos */}
      <Card>
        <CardHeader>
          <CardTitle>Produtos</CardTitle>
          <CardDescription>Gerencie seus produtos.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Passando os produtos filtrados para a tabela */}
          <ProductsTable
            products={filteredProducts}
            onArchive={handleArchive}
            onDelete={handleDelete}
            onMoveToTrash={handleMoveToTrash}
          />
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Mostrando <strong>{filteredProducts.length}</strong> de <strong>{productList.length}</strong> produtos
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
