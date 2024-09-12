"use client";

import BarraLateral from "@/components/produtos/checkout/BarraLateral";
import Preview from "@/components/produtos/checkout/Preview";
import { Card } from "@/components/ui/card"; // Importando o componente Card

export default function CheckoutPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-lg">
        {/* Componente de Preview */}
        <div className="flex-1">
          <Preview />
        </div>

        {/* Barra Lateral ao lado direito */}
        <div className="w-full lg:w-64">
          <Card className="h-auto">
            <BarraLateral />
          </Card>
        </div>
      </div>
    </div>
  );
}
