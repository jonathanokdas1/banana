"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById } from "@/api/fake-db/produtos";

export function ProductHeader({ productId, tipoProduto }: { productId: string; tipoProduto: string }) {
  const [productName, setProductName] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();

  useEffect(() => {
    const product = getProductById(productId);
    if (product) {
      setProductName(product.productName);
    } else {
      setProductName("Produto não encontrado");
    }
  }, [productId]);

  const handleBack = () => {
    router.push("/produtos");
  };

  const handleTabChange = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col space-y-6"> {/* Espaçamento vertical entre elementos */}
      {/* Header principal */}
      <div className="flex items-center gap-4"> {/* Espaçamento entre o botão voltar, título e ações */}
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleBack}> {/* Aumentado o tamanho do botão */}
          <ChevronLeft className="h-5 w-5" /> {/* Aumentado o ícone */}
          <span className="sr-only">Voltar</span>
        </Button>
        <h1 className="flex-1 text-2xl font-semibold tracking-tight">{productName || "Produto"}</h1> {/* Maior destaque para o título */}
        <Badge variant="outline" className="ml-auto sm:ml-0">Rascunho</Badge>
        <div className="hidden items-center gap-3 md:flex"> {/* Aumentado o espaço entre os botões */}
          <Button variant="outline" size="sm">Descartar</Button>
          <Button size="sm">Salvar produto</Button>
        </div>
      </div>

      {/* Separador visual */}
      <hr className="border-gray-300 my-4" /> {/* Maior espaçamento vertical entre header e tabs */}

      {/* Tabs centralizadas */}
      <div className="flex justify-center">
        <Tabs defaultValue={pathname} onValueChange={handleTabChange}>
          <TabsList className="justify-center space-x-4"> {/* Espaçamento horizontal entre as tabs */}
            <TabsTrigger value={`/produtos/editar/${id}`} className={pathname === `/produtos/editar/${id}` ? "text-primary" : ""}>
              Geral
            </TabsTrigger>
            <TabsTrigger value={`/produtos/editar/${id}/configuracoes`} className={pathname === `/produtos/editar/${id}/configuracoes` ? "text-primary" : ""}>
              Configurações
            </TabsTrigger>

            {tipoProduto === "curso" && (
              <TabsTrigger value={`/produtos/editar/${id}/area-de-membros`} className={pathname === `/produtos/editar/${id}/area-de-membros` ? "text-primary" : ""}>
                Área de Membros
              </TabsTrigger>
            )}

            {tipoProduto === "ebook" && (
              <TabsTrigger value={`/produtos/editar/${id}/ebook-config`} className={pathname === `/produtos/editar/${id}/ebook-config` ? "text-primary" : ""}>
                E-book e Arquivos
              </TabsTrigger>
            )}

            {tipoProduto === "servico" && (
              <TabsTrigger value={`/produtos/editar/${id}/servico-config`} className={pathname === `/produtos/editar/${id}/servico-config` ? "text-primary" : ""}>
                Configuração do Serviço
              </TabsTrigger>
            )}

            <TabsTrigger value={`/produtos/editar/${id}/checkout`} className={pathname === `/produtos/editar/${id}/checkout` ? "text-primary" : ""}>
              Checkout
            </TabsTrigger>
            <TabsTrigger value={`/produtos/editar/${id}/links`} className={pathname === `/produtos/editar/${id}/links` ? "text-primary" : ""}>
              Links
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}

export default ProductHeader;
