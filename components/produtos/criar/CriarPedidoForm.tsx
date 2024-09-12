// components/produtos/criar/CriarPedidoForm.tsx
import { useState } from "react";
import PedidoDetalhes from "./PedidoDetalhes";
import PedidoEndereco from "./PedidoEndereco";
import PedidoPagamento from "./PedidoPagamento";

export function CriarPedidoForm() {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    endereco: "",
    metodoPagamento: "",
    valorTotal: 0,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o pedido
    console.log("Pedido criado!", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Componente para Detalhes do Pedido */}
      <PedidoDetalhes formData={formData} onChange={handleInputChange} />

      {/* Componente para Endereço */}
      <PedidoEndereco formData={formData} onChange={handleInputChange} />

      {/* Componente para Pagamento */}
      <PedidoPagamento formData={formData} onChange={handleInputChange} />

      {/* Botão de Submissão */}
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Confirmar Pedido
      </button>
    </form>
  );
}
