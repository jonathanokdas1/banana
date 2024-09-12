"use client"; // Marcar como Client Component

import { MetodoDePagamento } from "@/components/produtos/configuracoes/metodopagamento"; // Importar o MetodoDePagamento
import { PaginaDeObrigadoUpsell } from "@/components/produtos/configuracoes/PaginaDeObrigadoUpsell"; // Importar o PaginaDeObrigadoUpsell
import { PixelsDeConversao } from "@/components/produtos/configuracoes/pixel"; // Importar o PixelsDeConversao
import { useParams } from "next/navigation"; // Importar useParams para capturar o ID

const ConfiguracoesProduto = () => {
  const { id } = useParams(); // Captura o ID da URL dinâmica

  return (
    <>
      {/* Componente de Métodos de Pagamento */}
      <MetodoDePagamento productId={id} /> {/* Passando o productId para o componente */}

      {/* Componente de Página de Obrigado e Upsell */}
      <PaginaDeObrigadoUpsell productId={id} /> {/* Passando o productId para o componente */}

      {/* Componente de Pixels de Conversão */}
      <PixelsDeConversao productId={id} /> {/* Passando o productId para o componente */}
    </>
  );
};

export default ConfiguracoesProduto;
