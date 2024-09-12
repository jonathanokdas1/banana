"use client";

import { useRouter, useParams } from "next/navigation"; // Importa o router e useParams
import { useEffect } from "react";
import { Produto } from "@/components/produtos/editar/produto"; // Importe o componente Produto
import { Suporte } from "@/components/produtos/editar/suporte"; // Importe o componente Suporte
import { PrecoGarantia } from "@/components/produtos/editar/ofertas"; // Importe o componente PrecoGarantia

const EditarProduto = () => {
  const router = useRouter();
  const { id } = useParams(); // Captura o ID da URL dinâmica

  useEffect(() => {
    // Verifica se o ID está presente
    if (!id) {
      // Se o ID estiver ausente, redireciona para a página de produtos
      router.push("/produtos");
    }
  }, [id, router]);

  // Verifica novamente se o ID é inválido
  if (!id) {
    return <div>Erro: ID do produto não encontrado!</div>;
  }

  return (
    <>
      {/* Passando o ID do produto para os componentes */}
      <Produto productId={id} />
      <PrecoGarantia productId={id} />
      <Suporte productId={id} />
    </>
  );
};

export default EditarProduto;
