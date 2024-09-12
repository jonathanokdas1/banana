"use client";

import { SaldoDisponivel } from "@/components/financeiro/SaldoDisponivel";
import { ProgramarSaque } from "@/components/financeiro/ProgramarSaque";
import { ExtratoSaque } from "@/components/financeiro/ExtratoSaque";
import { GraficosFinanceiros } from "@/components/financeiro/GraficosFinanceiros";
import { ToastProvider } from "@/components/ui/use-toast";

const FinanceiroPage = () => {
  return (
    <ToastProvider>
      <div className="flex justify-center p-6">
        <div className="w-full max-w-6xl space-y-8">
          {/* Seção de Saldo Disponível e Programar Saque */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SaldoDisponivel />
            <ProgramarSaque />
          </div>

          {/* Gráficos Financeiros e Extrato de Saques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GraficosFinanceiros />
            <ExtratoSaque />
          </div>
        </div>
      </div>
    </ToastProvider>
  );
};

export default FinanceiroPage;
