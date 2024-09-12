import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductsTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void; // Adiciona o callback para mudar a aba
}

export function ProductsTabs({ activeTab, onTabChange }: ProductsTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange}>
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">Ativo</TabsTrigger>
          <TabsTrigger value="draft">Lixo</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Arquivado
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
}
