"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { MdOutlineWebhook } from "react-icons/md"; // Ícone Webhook
import { FiMail, FiZap } from "react-icons/fi"; // Outros ícones
import { FiSettings } from "react-icons/fi"; // Ícone de Configuração
import Link from "next/link"; // Para navegação

const integrations = [
  {
    title: "Webhook",
    description: "Integre com sistemas externos através de webhooks",
    icon: <MdOutlineWebhook className="h-8 w-8 text-primary" />,
    link: "/integracoes/webhooks",
  },
  {
    title: "Mailchimp",
    description: "Gerencie suas campanhas de e-mail marketing.",
    icon: <FiMail className="h-8 w-8 text-primary" />,
    link: "/integracoes/mailchimp",
  },
  {
    title: "Speedy",
    description: "Integração para envios rápidos e rastreamento.",
    icon: <FiZap className="h-8 w-8 text-primary" />,
    link: "/integracoes/speedy",
  },
];

const IntegrationsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {integrations.map((integration, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow p-4 flex items-center justify-between">
          {/* Ícone e Título alinhados */}
          <div className="flex items-center space-x-4">
            {/* Ícone da Integração */}
            <div>{integration.icon}</div>
            {/* Título e Descrição */}
            <div>
              <CardTitle className="text-lg font-semibold">
                {integration.title}
              </CardTitle>
              <p className="text-sm text-gray-600">{integration.description}</p>
            </div>
          </div>

          {/* Ícone de Configuração */}
          <Link href={integration.link}>
            <FiSettings className="h-6 w-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default IntegrationsGrid;
