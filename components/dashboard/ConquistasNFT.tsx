"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Award, AlertTriangle } from "lucide-react"; // Ícones para adquirido e não adquirido

interface NFTAchievement {
  title: string;
  description: string;
  imageUrl: string; // O SVG será usado para todas as conquistas
  joinedDate: string; // Data para mostrar no hover
  acquired: boolean; // Flag para indicar se a conquista foi adquirida
}

const achievements: NFTAchievement[] = [
  {
    title: "Primeira Venda",
    description: "Receba este NFT ao realizar sua primeira venda.",
    imageUrl: "https://www.pepper.com.br/producerBadges/tenThousandInSales.svg", // SVG fornecido
    joinedDate: "Já adquirido", // Modificado
    acquired: true,
  },
  {
    title: "Primeiras 5 mil vendas",
    description: "Conquiste este NFT ao atingir 5 mil vendas.",
    imageUrl: "https://www.pepper.com.br/producerBadges/tenThousandInSales.svg", // SVG fornecido
    joinedDate: "Não adquirido", // Modificado
    acquired: false,
  },
  {
    title: "30 Dias Sem Reembolso",
    description: "Este NFT é seu ao completar 30 dias sem reembolsos.",
    imageUrl: "https://www.pepper.com.br/producerBadges/tenThousandInSales.svg", // SVG fornecido
    joinedDate: "Não adquirido", // Modificado
    acquired: false,
  },
  {
    title: "Mestre do Pix",
    description: "Receba este NFT ao ter mais de 80% de conversão no Pix.",
    imageUrl: "https://www.pepper.com.br/producerBadges/tenThousandInSales.svg", // SVG fornecido
    joinedDate: "Não adquirido", // Modificado
    acquired: false,
  },
  {
    title: "Príncipe do Faturamento",
    description: "Este NFT é concedido por alcançar R$50 mil em faturamento.",
    imageUrl: "https://www.pepper.com.br/producerBadges/tenThousandInSales.svg", // SVG fornecido
    joinedDate: "Não adquirido", // Modificado
    acquired: false,
  },
  {
    title: "Rei do Faturamento",
    description: "Conquiste este NFT ao faturar R$100 mil.",
    imageUrl: "https://www.pepper.com.br/producerBadges/tenThousandInSales.svg", // SVG fornecido
    joinedDate: "Não adquirido", // Modificado
    acquired: false,
  },
];

const ConquistasNFT: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conquistas NFT</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">Aqui estão suas conquistas em formato NFT:</p>
        <div className="grid grid-cols-3 gap-2">
          {achievements.map((achievement, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <img 
                  src={achievement.imageUrl} 
                  alt={achievement.title} 
                  className={`w-16 h-16 mb-2 ${achievement.acquired ? '' : 'filter grayscale'}`} // Aplica filtro de escala de cinza se não adquirido
                />
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex flex-col space-y-2">
                  <h4 className="text-sm font-semibold">{achievement.title}</h4>
                  <p className="text-sm">{achievement.description}</p>
                  <div className="flex items-center pt-2">
                    {achievement.acquired ? (
                      <Award className="mr-2 h-4 w-4 text-green-500" /> // Ícone de medalha para adquirido
                    ) : (
                      <AlertTriangle className="mr-2 h-4 w-4 text-red-500" /> // Ícone de alerta para não adquirido
                    )}
                    <span className="text-xs text-muted-foreground">{achievement.joinedDate}</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConquistasNFT;
