"use client";

import React from "react";
import PedidoPopup from "@/components/pedidos/popup";
import { EyeIcon } from '@heroicons/react/24/outline';

const ListaPedidos = ({ pedidos, setSelectedPedido }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pago":
        return "text-green-600";
      case "Cancelado":
        return "text-red-600";
      case "Pendente":
        return "text-yellow-500";
      case "Reembolso":
        return "text-orange-500";
      case "Chargeback":
        return "text-purple-600";
      default:
        return "text-gray-500";
    }
  };

  return (
    <table className="w-full table-auto border-collapse text-left">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Cliente</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((pedido) => (
          <tr key={pedido.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="border px-4 py-2">{pedido.id}</td>
            <td className="border px-4 py-2">{pedido.cliente}</td>
            <td className={`border px-4 py-2 ${getStatusColor(pedido.status)}`}>{pedido.status}</td>
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
  );
};

export default ListaPedidos;
