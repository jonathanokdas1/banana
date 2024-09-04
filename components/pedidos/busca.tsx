"use client";

import React from "react";

const BarraDeBusca = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por número de pedido, cliente, e-mail ou telefone"
      className="p-2 w-full border rounded-lg"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default BarraDeBusca;
