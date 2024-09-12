"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"; // Certifique-se de que o ToastProvider está importado corretamente
import { FiPlus } from "react-icons/fi"; // Ícone de adicionar

export const IntegrationDialog: React.FC = () => {
  const [appNameOrLink, setAppNameOrLink] = useState(""); // Estado para o nome ou link do app
  const { toast } = useToast(); // Para o feedback de envio
  const [open, setOpen] = useState(false); // Estado para controlar a abertura do diálogo

  const handleSubmitSuggestion = () => {
    // Exibe o toast de notificação
    if (typeof toast === "function") {
      toast({
        title: "Sugestão enviada!",
        description: "Sua sugestão foi enviada com sucesso.",
      });
    }

    setAppNameOrLink(""); // Limpa o input após envio
    setOpen(false); // Fecha o diálogo após enviar
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* Botão de Sugerir Integração com Ícone */}
        <Button
          variant="outline"
          className="flex items-center gap-2 text-primary border-primary hover:bg-primary hover:text-white transition-all"
        >
          <FiPlus className="h-4 w-4" /> Sugerir Integração
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quer sugerir um aplicativo?</DialogTitle>
          <DialogDescription>
            Caso você não tenha encontrado um específico, sugira-nos.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <Label htmlFor="appSuggestion">Nome ou link do aplicativo</Label>
          <Input
            id="appSuggestion"
            placeholder="Digite o nome ou link do aplicativo"
            value={appNameOrLink}
            onChange={(e) => setAppNameOrLink(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmitSuggestion}
            className="bg-primary text-white hover:bg-primary-dark transition-all"
          >
            Enviar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
