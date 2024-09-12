import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface IntegrationTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void; // Callback para mudar a aba
}

export const IntegrationTabs: React.FC<IntegrationTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange}>
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="connected">Conectados</TabsTrigger>
          <TabsTrigger value="disconnected">Desconectados</TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
};
