"use client";

import React from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'; // Certifique-se de importar o ícone corretamente
import { cn } from "@/lib/utils";
import Link from "next/link"; // Importando o Link do Next.js

const PedidoPopup = ({ pedido, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg w-2/3 max-w-lg p-6">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-bold">
            Pedido #{pedido.id} -{" "}
            <span className={cn("px-2 py-1 rounded-md text-sm", pedido.status === "Pago" ? "bg-green-100 text-green-800" : pedido.status === "Cancelado" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800")}>
              {pedido.status}
            </span>
          </h2>
          <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
        </div>

        {/* Dados do cliente */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Dados do Cliente</h3>
          <p><strong>Nome:</strong> {pedido.cliente}</p>
          <p><strong>CPF:</strong> {pedido.cliente}</p>
          <p><strong>Email:</strong> {pedido.email}</p>
          <p><strong>WhatsApp:</strong> {pedido.telefone}</p>
          <p><strong>Método de pagamento:</strong> {pedido.pagamento}</p>
        </div>

        {/* Produtos */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Produtos</h3>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Produto</th>
                <th className="text-left">Quantidade</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {pedido.produtos.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.nome}</td>
                  <td>{produto.quantidade}</td>
                  <td className="text-right">{produto.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botão Editar */}
        <div className="flex justify-end">
          <Link href={`/pedidos/${pedido.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PedidoPopup;
