"use client"; // Marcar como Client Component

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"; 
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button"; 

export function PrecoGarantia() {
  const [formData, setFormData] = useState({
    preco: "49,22",
    garantia: "7 dias",
    ofertasAtivas: true,
    ofertas: [{ nome: "", preco: "0,00" }], 
  });

  const [touched, setTouched] = useState({
    preco: false,
    ofertas: formData.ofertas.map(() => ({ nome: false, preco: false })),
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOfertasChange = (index: number, field: string, value: string) => {
    const updatedOfertas = [...formData.ofertas];
    updatedOfertas[index] = {
      ...updatedOfertas[index],
      [field]: value,
    };
    setFormData({ ...formData, ofertas: updatedOfertas });

    // Marcar como tocado
    const updatedTouched = [...touched.ofertas];
    updatedTouched[index] = { ...updatedTouched[index], [field]: true };
    setTouched({ ...touched, ofertas: updatedTouched });
  };

  const handleAdicionarOferta = () => {
    setFormData({
      ...formData,
      ofertas: [...formData.ofertas, { nome: "", preco: "0,00" }],
    });
    setTouched({
      ...touched,
      ofertas: [...touched.ofertas, { nome: false, preco: false }],
    });
  };

  const handleRemoverOferta = (index: number) => {
    const updatedOfertas = formData.ofertas.filter((_, i) => i !== index);
    const updatedTouched = touched.ofertas.filter((_, i) => i !== index);
    setFormData({ ...formData, ofertas: updatedOfertas });
    setTouched({ ...touched, ofertas: updatedTouched });
  };

  const formatCurrency = (value: string) => {
    const number = value.replace(/[^\d]/g, ""); // Remove tudo que não for dígito
    const formatted = (Number(number) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatted.replace("R$", "").trim(); // Remove o símbolo de R$ da string formatada
  };
  
  const validatePreco = (preco: string) => {
    const precoNum = parseFloat(preco.replace(",", "."));
    return precoNum >= 5;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preços e Garantia</CardTitle>
        <CardDescription>Preencha os campos abaixo para definir o preço e a garantia do produto.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {/* Preço */}
          <div className="relative">
  <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
    Preço
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <span className="text-gray-500 sm:text-sm sm:leading-5">R$</span>
    </div>
    <Input
      type="text"
      name="preco"
      id="preco"
      className="block w-full pl-8 pr-20 border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      onChange={(e) => {
        const formattedPrice = formatCurrency(e.target.value);
        setFormData({ ...formData, preco: formattedPrice });
        setTouched({ ...touched, preco: true });
      }}
      value={formData.preco}
      placeholder="0,00"
    />
    {touched.preco && !validatePreco(formData.preco) && (
      <p className="text-sm text-red-600">O preço mínimo é R$ 5,00</p>
    )}
  </div>
</div>

          {/* Garantia */}
          <div>
            <label htmlFor="garantia" className="block text-sm font-medium text-gray-700">
              Garantia
            </label>
            <Select
              onValueChange={(value) => setFormData({ ...formData, garantia: value })}
              value={formData.garantia}
            >
              <SelectTrigger className="w-full rounded-md border-gray-300 shadow-sm">
                <SelectValue placeholder="Selecione a garantia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7 dias">7 dias</SelectItem>
                <SelectItem value="14 dias">14 dias</SelectItem>
                <SelectItem value="21 dias">21 dias</SelectItem>
                <SelectItem value="30 dias">30 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Ofertas */}
          <div className="flex items-center space-x-2">
            <label htmlFor="ofertasAtivas" className="block text-sm font-medium text-gray-700">
              Esse produto tem diferentes ofertas?
            </label>
            <Switch
              checked={formData.ofertasAtivas}
              onCheckedChange={(checked) => setFormData({ ...formData, ofertasAtivas: checked })}
            />
          </div>

          {/* Se ofertas estiverem ativas */}
          {formData.ofertasAtivas && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Ofertas</h4>
              {formData.ofertas.map((oferta, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-full">
                      <label htmlFor={`nome-oferta-${index}`} className="block text-sm font-medium text-gray-700">
                        Nome da Oferta
                      </label>
                      <Input
                        type="text"
                        name={`nome-oferta-${index}`}
                        id={`nome-oferta-${index}`}
                        className="block w-full rounded-md border-gray-300 shadow-sm"
                        onChange={(e) => handleOfertasChange(index, "nome", e.target.value)}
                        value={oferta.nome}
                        placeholder="Nome da oferta"
                      />
                      {touched.ofertas[index].nome && oferta.nome === "" && (
                        <p className="text-sm text-red-600">Esse campo é obrigatório</p>
                      )}
                    </div>
                    <Trash2
                      className="cursor-pointer text-gray-400 hover:text-red-600"
                      size={20}
                      onClick={() => handleRemoverOferta(index)}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor={`preco-oferta-${index}`} className="block text-sm font-medium text-gray-700">
                      Preço
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm sm:leading-5">R$</span>
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 pl-3 border-l rounded-r-md flex items-center pointer-events-auto">
                        <select className="bg-transparent border-none text-gray-500 sm:text-sm sm:leading-5">
                          <option value="BRL">BRL</option>
                        </select>
                      </div>
                      <Input
                        type="text"
                        name={`preco-oferta-${index}`}
                        id={`preco-oferta-${index}`}
                        className="block w-full pl-8 pr-20 border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        onChange={(e) => handleOfertasChange(index, "preco", formatCurrency(e.target.value))}
                        value={oferta.preco}
                        placeholder="0,00"
                      />
                      {touched.ofertas[index].preco && !validatePreco(oferta.preco) && (
                        <p className="text-sm text-red-600">O preço mínimo é R$ 5,00</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Botão para adicionar mais ofertas */}
              <Button type="button" onClick={handleAdicionarOferta} disabled={formData.ofertas.length >= 100}>
                Adicionar outra oferta
              </Button>
              <p className="text-sm text-gray-500">{formData.ofertas.length}/100 ofertas</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

export default PrecoGarantia;
