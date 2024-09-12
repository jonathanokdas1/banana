"use client"; // Marcar como Client Component

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2, Settings } from "lucide-react"; // Importando ícones
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"; // Componente de diálogo para o token
import { CgFacebook } from "react-icons/cg"; // Ícone do Facebook
import { SiGoogleads } from "react-icons/si"; // Ícone do Google Ads

export function PixelsDeConversao() {
  const [facebookPixels, setFacebookPixels] = useState<string[]>([""]); // IDs dos pixels do Facebook
  const [googleAdsPixels, setGoogleAdsPixels] = useState<{ name: string; id: string; conversionLabel: string; triggerCheckout: boolean; triggerCard: boolean; triggerBoleto: boolean; }[]>([]); // IDs dos pixels do Google Ads
  const [isFacebookActive, setIsFacebookActive] = useState(true); // Controle do Facebook Pixel
  const [isGoogleAdsActive, setIsGoogleAdsActive] = useState(true); // Controle do Google Ads Pixel
  const [openTokenDialog, setOpenTokenDialog] = useState(false); // Controle do diálogo do token
  const [openGoogleAdsDialog, setOpenGoogleAdsDialog] = useState(false); // Controle do diálogo do Google Ads
  const [token, setToken] = useState(""); // Armazena o token da API
  const [newGoogleAdName, setNewGoogleAdName] = useState(""); // Nome do novo Google Ads Pixel
  const [newGoogleAdId, setNewGoogleAdId] = useState(""); // ID do Pixel Google Ads
  const [newConversionLabel, setNewConversionLabel] = useState(""); // Label de Conversão
  const [triggerCheckout, setTriggerCheckout] = useState(false); // Disparar ao visitar checkout
  const [triggerCard, setTriggerCard] = useState(false); // Disparar ao aprovar cartão
  const [triggerBoleto, setTriggerBoleto] = useState(false); // Disparar ao gerar boleto

  const addFacebookPixel = () => {
    setFacebookPixels([...facebookPixels, ""]); // Adiciona uma nova entrada de pixel do Facebook
  };

  const removeFacebookPixel = (index: number) => {
    setFacebookPixels(facebookPixels.filter((_, i) => i !== index)); // Remove a entrada do pixel do Facebook
  };

  const addGoogleAdsPixel = () => {
    if (googleAdsPixels.length < 5) {
      setGoogleAdsPixels([...googleAdsPixels, {
        name: newGoogleAdName,
        id: newGoogleAdId,
        conversionLabel: newConversionLabel,
        triggerCheckout,
        triggerCard,
        triggerBoleto
      }]);
      resetGoogleAdsFields();
    }
  };

  const resetGoogleAdsFields = () => {
    setNewGoogleAdName("");
    setNewGoogleAdId("");
    setNewConversionLabel("");
    setTriggerCheckout(false);
    setTriggerCard(false);
    setTriggerBoleto(false);
  };

  const removeGoogleAdsPixel = (index: number) => {
    setGoogleAdsPixels(googleAdsPixels.filter((_, i) => i !== index)); // Remove a entrada do Google Ads
  };

  const validateToken = (token: string) => {
    return token.length > 0; // Validação simples: deve ter pelo menos 1 caractere
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pixels de Conversão</CardTitle>
        <CardDescription>
          Aprenda mais sobre os pixels de conversão e como eles funcionam.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">

        {/* Facebook Pixel */}
        <div className="border-b pb-4">
          <div className="flex items-center">
            <CgFacebook className="h-5 w-5 mr-2" />
            <Switch
              checked={isFacebookActive}
              onCheckedChange={setIsFacebookActive}
            />
            <Label className="ml-2">Facebook</Label>
          </div>
          {isFacebookActive && facebookPixels.map((pixelId, index) => (
            <div key={index} className="mt-2 flex items-center">
              <Input
                placeholder="Ex: 1234567890"
                value={pixelId}
                onChange={(e) => {
                  const newPixels = [...facebookPixels];
                  newPixels[index] = e.target.value;
                  setFacebookPixels(newPixels);
                }}
              />
              <Button onClick={() => removeFacebookPixel(index)} className="ml-2">
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button onClick={() => setOpenTokenDialog(true)} className="ml-2">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {isFacebookActive && (
            <Button onClick={addFacebookPixel} className="mt-2">
              Adicionar outro
            </Button>
          )}
        </div>

        {/* Google Ads Pixel */}
        <div className="border-b pb-4">
          <div className="flex items-center">
            <SiGoogleads className="h-5 w-5 mr-2" />
            <Switch
              checked={isGoogleAdsActive}
              onCheckedChange={setIsGoogleAdsActive}
            />
            <Label className="ml-2">Google Ads</Label>
          </div>
          {isGoogleAdsActive && googleAdsPixels.map((pixel, index) => (
            <div key={index} className="mt-2 flex items-center justify-between">
              <div>
                <strong>{pixel.name}</strong> / {pixel.id}
              </div>
              <div className="flex items-center">
                <Button onClick={() => removeGoogleAdsPixel(index)} className="ml-2">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button onClick={() => {
                  setNewGoogleAdName(pixel.name);
                  setNewGoogleAdId(pixel.id);
                  setNewConversionLabel(pixel.conversionLabel);
                  setTriggerCheckout(pixel.triggerCheckout);
                  setTriggerCard(pixel.triggerCard);
                  setTriggerBoleto(pixel.triggerBoleto);
                  setOpenGoogleAdsDialog(true);
                }} className="ml-2">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {isGoogleAdsActive && (
            <Button onClick={() => setOpenGoogleAdsDialog(true)} className="mt-2">
              Adicionar Google Ads Pixel
            </Button>
          )}
        </div>

        {/* Diálogo para Adicionar Google Ads Pixel */}
        <Dialog open={openGoogleAdsDialog} onOpenChange={setOpenGoogleAdsDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Google Ads Pixel</DialogTitle>
              <Label className="mt-2">Nome</Label>
              <Input
                placeholder="Nome do Pixel"
                value={newGoogleAdName}
                onChange={(e) => setNewGoogleAdName(e.target.value)}
              />
              <Label className="mt-2">ID do Pixel Google Ads</Label>
              <Input
                placeholder="Ex: UW-XXXXXXXXX"
                value={newGoogleAdId}
                onChange={(e) => setNewGoogleAdId(e.target.value)}
              />
              <Label className="mt-2">Label de Conversão</Label>
              <Input
                placeholder="Label de Conversão"
                value={newConversionLabel}
                onChange={(e) => setNewConversionLabel(e.target.value)}
              />

              <div className="flex items-center mt-2">
                <Switch
                  checked={triggerCheckout}
                  onCheckedChange={setTriggerCheckout}
                />
                <Label className="ml-2">Disparar ao visitar checkout</Label>
              </div>
              <div className="flex items-center mt-2">
                <Switch
                  checked={triggerCard}
                  onCheckedChange={setTriggerCard}
                />
                <Label className="ml-2">Disparar ao aprovar cartão / pix</Label>
              </div>
              <div className="flex items-center mt-2">
                <Switch
                  checked={triggerBoleto}
                  onCheckedChange={setTriggerBoleto}
                />
                <Label className="ml-2">Disparar ao gerar boleto</Label>
              </div>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenGoogleAdsDialog(false)}>Cancelar</Button>
              <Button onClick={addGoogleAdsPixel}>Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Diálogo para o Token da API */}
        <Dialog open={openTokenDialog} onOpenChange={setOpenTokenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Token da API de Conversão</DialogTitle>
              <Label className="mt-2">Insira o token da API de conversão (opcional):</Label>
              <Input
                placeholder="Insira o token aqui"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              {!validateToken(token) && (
                <p className="text-red-600 text-sm">Insira um token válido</p>
              )}
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenTokenDialog(false)}>Cancelar</Button>
              <Button onClick={() => { /* Ação de salvar token se necessário */ }}>Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export default PixelsDeConversao;
