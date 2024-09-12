"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit } from "lucide-react"; // Ícone de edição
import { useToast } from "@/components/ui/use-toast"; // Certifique-se de que o useToast está corretamente importado

// Função para formatar o valor como moeda
const formatCurrency = (value: string): string => {
  const cleanValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  const formattedValue = (parseFloat(cleanValue) / 100).toFixed(2); // Divide por 100 para obter o valor correto
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(formattedValue));
};

export const ProgramarSaque: React.FC = () => {
  const [isWeeklyEnabled, setIsWeeklyEnabled] = useState(false);
  const [isValueEnabled, setIsValueEnabled] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>(""); // Dia da semana
  const [withdrawalValue, setWithdrawalValue] = useState<string>(""); // Valor de saque por valor
  const [savedWeekly, setSavedWeekly] = useState(false); // Estado para controlar se o saque semanal foi salvo
  const [savedValue, setSavedValue] = useState(false); // Estado para controlar se o saque por valor foi salvo
  const { showToast } = useToast();

  // Validação de valor mínimo de saque
  const validateValue = () => {
    const value = parseFloat(withdrawalValue.replace(/\D/g, "")) / 100;
    if (isNaN(value) || value < 50) {
      showToast("O valor mínimo para saque é R$ 50,00.");
      return false;
    }
    return true;
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setWithdrawalValue(formatCurrency(value)); // Atualiza com valor formatado
  };

  const handleSave = () => {
    if (isWeeklyEnabled && selectedDay) {
      setSavedWeekly(true);
      showToast("Configuração de saque semanal salva!");
    }

    if (isValueEnabled && validateValue()) {
      setSavedValue(true);
      showToast("Configuração de saque por valor salva!");
    }
  };

  const handleEditWeekly = () => {
    setSavedWeekly(false);
  };

  const handleEditValue = () => {
    setSavedValue(false);
  };

  const handleWeeklyToggle = (checked: boolean) => {
    setIsWeeklyEnabled(checked);
    if (!checked) {
      setSelectedDay(""); // Limpa a seleção quando desativado
      setSavedWeekly(false); // Remove o estado salvo
    }
  };

  const handleValueToggle = (checked: boolean) => {
    setIsValueEnabled(checked);
    if (!checked) {
      setWithdrawalValue(""); // Limpa o valor quando desativado
      setSavedValue(false); // Remove o estado salvo
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Programar Saque</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Saque semanal */}
        <div className="flex items-center justify-between">
          <Label>Programar saque semanal</Label>
          <Switch
            checked={isWeeklyEnabled}
            onCheckedChange={handleWeeklyToggle}
          />
        </div>

        {isWeeklyEnabled && !savedWeekly && (
          <div className="space-y-2">
            <Label>Selecione um dia da semana</Label>
            <Select value={selectedDay} onValueChange={setSelectedDay}>
              <SelectTrigger>
                <SelectValue placeholder="Escolha o dia da semana" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="segunda">Segunda-feira</SelectItem>
                <SelectItem value="terca">Terça-feira</SelectItem>
                <SelectItem value="quarta">Quarta-feira</SelectItem>
                <SelectItem value="quinta">Quinta-feira</SelectItem>
                <SelectItem value="sexta">Sexta-feira</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {savedWeekly && (
          <div className="flex justify-between items-center">
            <div className="text-green-500">
              Saque semanal configurado para {selectedDay}
            </div>
            <Button variant="ghost" onClick={handleEditWeekly}>
              <Edit className="h-5 w-5" /> {/* Ícone de editar */}
            </Button>
          </div>
        )}

        {/* Saque por valor */}
        <div className="flex items-center justify-between">
          <Label>Programar saque por valor</Label>
          <Switch
            checked={isValueEnabled}
            onCheckedChange={handleValueToggle}
          />
        </div>

        {isValueEnabled && !savedValue && (
          <div className="space-y-2">
            <Label>Valor mínimo para saque</Label>
            <Input
              placeholder="Ex: R$ 100,00"
              value={withdrawalValue}
              onChange={handleValueChange}
              className="w-full"
            />
          </div>
        )}

        {savedValue && (
          <div className="flex justify-between items-center">
            <div className="text-green-500">
              Saque programado para valores acima de {withdrawalValue}
            </div>
            <Button variant="ghost" onClick={handleEditValue}>
              <Edit className="h-5 w-5" /> {/* Ícone de editar */}
            </Button>
          </div>
        )}

        <Button className="mt-4" onClick={handleSave}>
          Salvar
        </Button>
      </CardContent>
    </Card>
  );
};
