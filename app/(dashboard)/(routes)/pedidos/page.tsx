"use client";

import React, { useState } from "react";
import PedidoPopup from "@/components/pedidos/popup"; // Certifique-se de que o caminho está correto
import Filtro from "@/components/pedidos/filtro"; // Se houver filtros
import Busca from "@/components/pedidos/busca";
import { EyeIcon } from '@heroicons/react/24/outline'; // Importando o ícone de olho

const pedidos = [
  {
    id: 6226,
    cliente: "Manoela Alves",
    email: "manu_1542@hotmail.com",
    telefone: "(73) 99119-9971",
    cpf: "123.456.789-00",
    pagamento: "Cartão / Pix",
    status: "Pago",
    produtos: [{ nome: "Produto A", quantidade: 1, total: "R$ 299,00" }],
  },
  {
    id: 6227,
    cliente: "Carlos Silva",
    email: "carlos_silva@gmail.com",
    telefone: "(11) 99876-5432",
    cpf: "987.654.321-00",
    pagamento: "Cartão",
    status: "Cancelado",
    produtos: [{ nome: "Produto C", quantidade: 1, total: "R$ 99,00" }],
  },
];

const PedidosPage = () => {
  const [selectedPedido, setSelectedPedido] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPedidos = pedidos.filter((pedido) => {
    return (
      pedido.id.toString().includes(searchTerm) ||
      pedido.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pedido.cpf.includes(searchTerm)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Pedidos</h1>

      {/* Alinhar Busca e Filtro lado a lado */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <Busca searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filtro />
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Cliente</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredPedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td className="border px-4 py-2">{pedido.id}</td>
              <td className="border px-4 py-2">{pedido.cliente}</td>
              <td className="border px-4 py-2">{pedido.status}</td>
              <td className="border px-4 py-2 text-center">
                <EyeIcon
                  className="h-6 w-6 text-blue-500 cursor-pointer"
                  onClick={() => setSelectedPedido(pedido)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pop-up de Detalhes do Pedido */}
      {selectedPedido && (
        <PedidoPopup
          pedido={selectedPedido}
          onClose={() => setSelectedPedido(null)}
        />
      )}
    </div>
  );
};

export default PedidosPage;
