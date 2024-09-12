"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToastProvider } from "@/components/ui/use-toast"; // Certifique-se de que o ToastProvider envolve a aplicação
import { IntegrationDialog } from "@/components/integracoes/IntegrationDialog"; // Importa o Dialog
import { IntegrationTabs } from "@/components/integracoes/IntegrationTabs"; // Importa os Tabs
import { Input } from "@/components/ui/input"; // Campo de busca
import IntegrationsGrid from "@/components/integracoes/IntegrationsGrid"; // Importa o grid de cards

const IntegrationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all"); // Estado para a aba ativa
  const [search, setSearch] = useState(""); // Estado para o campo de busca

  return (
    <ToastProvider> {/* Certifique-se de que o ToastProvider está aqui */}
      <div>
        {/* Header */}
        <Card>
          <CardHeader>
            <CardTitle>Integrações</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Filtros por Tabs */}
            <IntegrationTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Campo de Busca e Botão de Sugerir Integração */}
            <div className="flex items-center gap-2 mt-4">
              <Input
                placeholder="Buscar integração..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <IntegrationDialog />
            </div>
          </CardContent>
        </Card>

        {/* Grid de Integrações */}
        <div className="mt-6">
          <IntegrationsGrid />
        </div>
      </div>
    </ToastProvider>
  );
};

export default IntegrationsPage;
