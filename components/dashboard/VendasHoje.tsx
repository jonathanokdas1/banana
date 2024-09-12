"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const VendasHoje: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vendas Hoje</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">50</p>
      </CardContent>
    </Card>
  );
};

export default VendasHoje;
