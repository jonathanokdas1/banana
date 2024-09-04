"use client";

import React from "react";
import CardProduto from "@/components/produtos/CardProduto"; // Certifique-se que o caminho está correto

const produtos = [
  {
    nome: "Protocolo Vaginose Zero",
    preco: "R$ 299,00",
    categoria: "Saúde Feminina",
    imagem: "https://pepper-images-dev.s3.us-east-1.amazonaws.com/3a6fc67c-c863-4264-bec5-6a0c2111d7df"
  },
  {
    nome: "Candida Zero",
    preco: "R$ 199,00",
    categoria: "Tratamento Natural",
    imagem: "https://pepper-images-dev.s3.us-east-1.amazonaws.com/example-image.jpg"
  },
  // Adicione mais produtos aqui
];

const ProdutosPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto, index) => (
          <CardProduto
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            categoria={produto.categoria}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>
  );
};

export default ProdutosPage;
