"use client";

import React from 'react';
import SaldoDisponivel from '@/components/dashboard/SaldoDisponivel';
import VendasHoje from '@/components/dashboard/VendasHoje';
import VendasSemanais from '@/components/dashboard/VendasSemanais';
import ConversaoPagamento from '@/components/dashboard/ConversaoPagamento';
import IndicadoresCrescimento from '@/components/dashboard/IndicadoresCrescimento';
import Recompensa from '@/components/dashboard/Recompensa'; 
import ConquistasNFT from '@/components/dashboard/ConquistasNFT'; 

const Dashboard: React.FC = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-6 w-full max-w-6xl">
        {/* Topo */}
        <div className="col-span-12 sm:col-span-6">
          <SaldoDisponivel />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <VendasHoje />
        </div>

        {/* Abaixo do topo */}
        <div className="col-span-12">
          <VendasSemanais />
        </div>

        {/* Componentes adicionais */}
        <div className="col-span-12 sm:col-span-6">
          <ConversaoPagamento />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <IndicadoresCrescimento />
        </div>

        {/* Espaço compartilhado entre Recompensa e ConquistasNFT */}
        <div className="col-span-12 sm:col-span-6">
          <Recompensa valorRestante={21872.74} meta="PLACA DE 100K" progresso={78.13} />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <ConquistasNFT />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
