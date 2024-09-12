"use client";

import { InformacoesPerfil } from "@/components/configuracoes/InformacoesPerfil";
import { ToastProvider } from "@/components/ui/use-toast";

const ConfiguracoesPage = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Configurações</h1>
        <ToastProvider>
          <InformacoesPerfil />
        </ToastProvider>
      </div>
    </div>
  );
};

export default ConfiguracoesPage;
