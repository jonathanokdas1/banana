"use client";

import React from "react";

interface ProdutoProps {
  nome: string;
  preco: string;
  categoria: string;
  imagem: string;
}

const CardProduto: React.FC<ProdutoProps> = ({ nome, preco, categoria, imagem }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="content-image">
        <img src={imagem} alt={`Imagem do ${nome}`} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{nome}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{categoria}</p>
        <p className="text-xl font-semibold text-green-500 mt-2">{preco}</p>
      </div>
      <div className="p-4 flex justify-between">
        <button className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600">
          Links de divulgação
        </button>
        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500">
          Gerenciar
        </button>
      </div>
    </div>
  );
};

export default CardProduto;
