"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image'; // Importando o componente de imagem do Next.js
import { Progress } from "@/components/ui/progress"; // Importando o componente Progress

interface RecompensaProps {
  valorRestante: number;
  meta: string;
  progresso: number; // Percentual do progresso (0 a 100)
}

const Recompensa: React.FC<RecompensaProps> = ({ valorRestante = 0, meta, progresso }) => {
  return (
    <Card className="flex flex-row">
      <CardContent className="flex flex-col justify-between w-1/2 p-4">
        <div>
          <CardTitle>Está faltando</CardTitle>
          <CardDescription>
            R$ <span className="font-bold">{valorRestante.toFixed(2).replace('.', ',')}</span> para conquistar a sua <strong>{meta}</strong>
          </CardDescription>
        </div>
        <div className="w-full mt-4">
          <Progress value={progresso} className="w-full" />
        </div>
      </CardContent>
      <div className="flex items-center justify-center w-1/2">
        <Image 
          src="/placa100k.052287a2.png" // Caminho correto da imagem
          alt={`Conquista: ${meta}`} 
          width={120}  // Ajuste a largura conforme necessário
          height={120} // Ajuste a altura conforme necessário
          className="h-auto" 
        />
      </div>
    </Card>
  );
};

export default Recompensa;
