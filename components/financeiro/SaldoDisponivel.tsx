"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { DollarSign, AlertCircle } from "lucide-react"; // Importando os ícones
import { SolicitarSaque } from "@/components/financeiro/SolicitarSaque";

export const SaldoDisponivel = () => {
  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
      <CardContent>
        {/* Card Saldo Disponível */}
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" /> {/* Ícone Saldo Disponível */}
                <CardTitle>Saldo Disponível</CardTitle>
              </div>
              <p className="text-xl font-bold">R$ 1.500,00</p> {/* Valor à direita */}
            </div>
          </CardHeader>
        </Card>

        {/* Card Saldo Pendente */}
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" /> {/* Ícone Saldo Pendente */}
                <CardTitle>Saldo Pendente</CardTitle>
              </div>
              <p className="text-xl font-bold">R$ 500,00</p> {/* Valor à direita */}
            </div>
          </CardHeader>
        </Card>
      </CardContent>

      {/* Botão Solicitar Saque ocupando toda parte inferior */}
      <CardFooter>
        <SolicitarSaque />
      </CardFooter>
    </Card>
  );
};
