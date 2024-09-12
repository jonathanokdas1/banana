"use client";

import { useState, useEffect } from "react"; // Importa useState e useEffect
import { ProductHeader } from "@/components/produtos/editar/ProductHeader"; // Importe o componente ProductHeader
import { useParams } from "next/navigation"; // Importa useParams para capturar o ID da URL
import { getProductById } from "@/api/fake-db/produtos"; // Função para buscar o produto específico

const ConfiguracoesProdutoLayout = ({ children }: { children: React.ReactNode }) => {
  const { id } = useParams(); // Captura o ID da URL dinâmica
  const [isMobile, setIsMobile] = useState(false); // Estado para alternar entre Mobile e Desktop

  // Função para alternar layout com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Considera mobile se a largura da janela for menor ou igual a 768px
    };

    // Defina o estado isMobile ao carregar a página
    handleResize();

    // Adiciona o listener de redimensionamento
    window.addEventListener("resize", handleResize);

    // Limpa o listener quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Busca o produto específico
  const produto = getProductById(id);

  // Verifica se o produto foi encontrado
  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Envolver o ProductHeader com um div para aplicar o espaçamento corretamente */}
      <div className="mb-6">
        <ProductHeader 
          productId={id} 
          isMobile={isMobile} 
          setIsMobile={setIsMobile} 
        />
      </div>

      <main className={`flex flex-1 ${isMobile ? 'flex-col' : 'flex-row'} space-y-8`}>
        <div className="flex flex-1 flex-col w-full">
          <div className="w-full h-full space-y-6"> {/* Espaçamento vertical entre os elementos filhos */}
            {children} {/* Todos os cards filhos ocuparão a largura total */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConfiguracoesProdutoLayout;
