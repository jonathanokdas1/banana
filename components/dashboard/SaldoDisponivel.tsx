"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SaldoDisponivel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saldo Disponível</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">R$ 5.000,00</p>
      </CardContent>
    </Card>
  );
};

export default SaldoDisponivel;
