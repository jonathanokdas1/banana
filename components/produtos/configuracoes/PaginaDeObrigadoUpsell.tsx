"use client"; // Marcar como Client Component

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch"; // Usando Switch em vez de Checkbox
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function PaginaDeObrigadoUpsell() {
  const [temPaginaObrigado, setTemPaginaObrigado] = useState(false);
  const [pixAprovadoUrl, setPixAprovadoUrl] = useState("");
  const [urlError, setUrlError] = useState(false); // Estado para armazenar erro de URL

  const handleTemPaginaObrigadoChange = (checked: boolean) => {
    setTemPaginaObrigado(checked);
  };

  // Função para validar se a URL é válida
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleUrlChange = (e: any) => {
    const url = e.target.value;
    setPixAprovadoUrl(url);

    // Verifica se a URL é válida e atualiza o estado de erro
    if (isValidUrl(url)) {
      setUrlError(false);
    } else {
      setUrlError(true);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Página de Obrigado e Upsell</CardTitle>
        <CardDescription>
          Defina se este produto tem uma página de obrigado personalizada ou uma página de upsell.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Switch para Página de Obrigado Personalizada ou Upsell */}
        <div className="flex items-center space-x-4">
          <Switch
            checked={temPaginaObrigado}
            onCheckedChange={handleTemPaginaObrigadoChange}
          />
          <Label>Esse produto tem uma página de obrigado personalizada ou upsell?</Label>
        </div>

        {/* URL de Página de Obrigado Personalizada */}
        {temPaginaObrigado && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="pix-aprovado-url">Cartão ou Pix aprovado</Label>
              <Input
                id="pix-aprovado-url"
                placeholder="https://example.com/checkout"
                value={pixAprovadoUrl}
                onChange={handleUrlChange}
                className={urlError ? "border-red-600" : ""}
              />
              {urlError && (
                <p className="text-sm text-red-600">
                  A URL deve ser válida e começar com http:// ou https://
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
