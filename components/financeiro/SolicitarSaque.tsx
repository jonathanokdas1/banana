"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Função para formatar o valor como moeda
const formatCurrency = (value: string): string => {
  const cleanValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  const formattedValue = (parseFloat(cleanValue) / 100).toFixed(2); // Divide por 100 para obter o valor correto
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(formattedValue));
};

export function SolicitarSaque({ adicionarSaque }: { adicionarSaque: (novoSaque: any) => void }) {
  const [selectedBank, setSelectedBank] = useState("");
  const [valorSaque, setValorSaque] = useState("");

  // Validação do valor de saque
  const validateValue = () => {
    const value = parseFloat(valorSaque.replace(/\D/g, "")) / 100;
    if (isNaN(value) || value <= 0) {
      alert("Por favor, insira um valor válido para saque.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateValue()) {
      return;
    }

    // Adiciona o saque ao extrato
    adicionarSaque({
      data: new Date().toLocaleDateString(),
      valor: formatCurrency(valorSaque),
      status: "Pendente",
    });

    // Limpa os campos
    setSelectedBank("");
    setValorSaque("");
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setValorSaque(formatCurrency(value)); // Atualiza com valor formatado
  };

  return (
    <div className="flex items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="ml-4">Solicitar Saque</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitar Saque</DialogTitle>
            <DialogDescription>
              Insira as informações abaixo para solicitar seu saque.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {/* Select para escolher o banco */}
            <div>
              <Label htmlFor="bank">Selecione o Banco</Label>
              <Select value={selectedBank} onValueChange={setSelectedBank}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha um banco" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banco1">Banco 1</SelectItem>
                  <SelectItem value="banco2">Banco 2</SelectItem>
                  <SelectItem value="banco3">Banco 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Input para valor de saque */}
            <div>
              <Label htmlFor="valorSaque">Valor de Saque</Label>
              <Input
                id="valorSaque"
                placeholder="Digite o valor do saque"
                value={valorSaque}
                onChange={handleValueChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleSubmit}>
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
