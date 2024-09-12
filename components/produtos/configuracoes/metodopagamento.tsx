"use client"; // Marcar como Client Component

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function MetodoDePagamento() {
  const [paymentMethods, setPaymentMethods] = useState({
    pix: false,
    cartao: false,
    boleto: false,
  });
  const [descricaoFatura, setDescricaoFatura] = useState("");
  const [parcelamento, setParcelamento] = useState("");
  const [validadeBoleto, setValidadeBoleto] = useState("");

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethods((prev) => ({ ...prev, [method]: !prev[method] }));
  };

  const handleDescricaoFaturaChange = (e: any) => {
    // Limitar a edição para no máximo 10 caracteres além de "BANANA*"
    setDescricaoFatura(e.target.value.slice(0, 10));
  };

  const handleValidadeBoletoChange = (e: any) => {
    setValidadeBoleto(e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Métodos de Pagamento</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Multi-select para Métodos de Pagamento */}
        <div>
          <Label>Métodos de Pagamento</Label>
          <div className="flex items-center space-x-4">
            <Checkbox
              checked={paymentMethods.pix}
              onCheckedChange={() => handlePaymentMethodChange("pix")}
            />
            <span>Pix</span>

            <Checkbox
              checked={paymentMethods.cartao}
              onCheckedChange={() => handlePaymentMethodChange("cartao")}
            />
            <span>Cartão</span>

            <Checkbox
              checked={paymentMethods.boleto}
              onCheckedChange={() => handlePaymentMethodChange("boleto")}
            />
            <span>Boleto</span>
          </div>
        </div>

        {/* Descrição na Fatura */}
        <div>
          <Label htmlFor="descricao-fatura">Descrição na Fatura do Cartão (máx 10 caracteres após BANANA*)</Label>
          <div className="flex items-center">
            <span className="pr-2">BANANA*</span> {/* Prefixo fixo */}
            <Input
              id="descricao-fatura"
              maxLength={10}
              value={descricaoFatura}
              onChange={handleDescricaoFaturaChange}
              placeholder="Digite aqui"
            />
          </div>
        </div>

        {/* Opções de Parcelamento */}
        <div>
          <Label htmlFor="parcelamento">Opções de Parcelamento</Label>
          <Select
            onValueChange={setParcelamento}
            value={parcelamento}
          >
            <SelectTrigger id="parcelamento">
              <SelectValue placeholder="Selecione o parcelamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="avista">À vista</SelectItem>
              <SelectItem value="2x">2x</SelectItem>
              <SelectItem value="3x">3x</SelectItem>
              <SelectItem value="4x">4x</SelectItem>
              <SelectItem value="5x">5x</SelectItem>
              <SelectItem value="6x">6x</SelectItem>
              <SelectItem value="7x">7x</SelectItem>
              <SelectItem value="8x">8x</SelectItem>
              <SelectItem value="9x">9x</SelectItem>
              <SelectItem value="10x">10x</SelectItem>
              <SelectItem value="11x">11x</SelectItem>
              <SelectItem value="12x">12x</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Validade do Boleto */}
        <div>
          <Label htmlFor="validade-boleto">Validade do Boleto (Dias corridos)</Label>
          <Input
            id="validade-boleto"
            type="number"
            min={1}
            value={validadeBoleto}
            onChange={handleValidadeBoletoChange}
            placeholder="2"
          />
        </div>
      </CardContent>
    </Card>
  );
}
