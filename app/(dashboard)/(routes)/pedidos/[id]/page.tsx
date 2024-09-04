"use client"; // Certifica que o componente é um Client Component

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Usa hook do next/navigation
import { MoonLoader } from "react-spinners"; // Spinner para carregamento

const PedidoDetalhesPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Pega o ID do pedido a partir da URL
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    if (id) {
      setLoading(false); // Se houver um ID, desativa o carregamento
    }
  }, [id]); // Executa o efeito apenas quando o id mudar

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <MoonLoader size={50} color="#4A90E2" />
      </div>
    );
  }

  if (!id) {
    return <div>Pedido não encontrado.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Oi, esse é o pedido #{id}</h1>
    </div>
  );
};

export default PedidoDetalhesPage;
