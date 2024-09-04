"use client"; // Isso deve ser a primeira linha do arquivo

import React, { useState } from "react";
import { MyChart } from "@/components/dashboard/MyChart";
import { DatePickerWithRange } from "@/components/dashboard/DatePickerWithRange";

const DashboardPage = () => {
  const [liveVisitors, setLiveVisitors] = useState(0); // Comente que esse valor será atualizado via API
  const withdrawAmount = 0.0; // Valor fixo ou atualizado via API

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Seletor de data, visitantes ao vivo e saldo */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Seletor de data com contorno */}
          <div className="border border-gray-300 rounded-md p-2 flex items-center">
            <DatePickerWithRange />
          </div>

          {/* Visitantes ao vivo com contorno */}
          <div className="border border-gray-300 rounded-md p-2 flex items-center">
            <div className="animation-live"></div>
            <p className="ml-2">
              {liveVisitors} visitantes ao vivo
            </p>
          </div>
        </div>

        {/* Saldo disponível para saque alinhado à direita */}
        <div className="flex items-center">
          <div className="border border-gray-300 rounded-md p-2">
            Disponível para saque: R$ {withdrawAmount.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Gráfico */}
      <div className="mt-4">
        <MyChart />
      </div>
    </div>
  );
};

export default DashboardPage;
