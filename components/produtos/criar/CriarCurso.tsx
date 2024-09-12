"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function CriarCurso({ formData, handleInputChange }) {
  const [entregaConteudo, setEntregaConteudo] = useState("");

  const handleSelectChange = (value) => {
    setEntregaConteudo(value);
    handleInputChange({
      target: { name: "entregaConteudo", value },
    });
  };

  return (
    <div className="space-y-6">
      {/* Entrega de conteúdo */}
      <div>
        <Label htmlFor="entregaConteudo" className="block text-sm font-medium text-primary">
          Entrega de conteúdo
        </Label>
        <Select onValueChange={handleSelectChange} value={entregaConteudo}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a entrega de conteúdo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="externa">Área de membros externa</SelectItem>
              <SelectItem value="interna">Área de membros interna</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Nome do produto */}
      <div>
        <Label htmlFor="nomeProduto" className="block text-sm font-medium text-primary">
          Nome do produto
        </Label>
        <Input
          name="nomeProduto"
          id="nomeProduto"
          placeholder="Digite o nome do produto"
          value={formData.nomeProduto}
          onChange={handleInputChange}
        />
      </div>

      {/* Descrição breve */}
      <div>
        <Label htmlFor="descricao" className="block text-sm font-medium text-primary">
          Descrição breve
        </Label>
        <Input
          name="descricao"
          id="descricao"
          placeholder="Descreva seu produto em poucas palavras"
          value={formData.descricao}
          onChange={handleInputChange}
        />
      </div>

      {/* Categoria */}
      <div>
        <Label htmlFor="categoria" className="block text-sm font-medium text-primary">
          Categoria
        </Label>
        <Input
          name="categoria"
          id="categoria"
          placeholder="Selecione a categoria"
          value={formData.categoria}
          onChange={handleInputChange}
        />
      </div>

      {/* Idioma principal */}
      <div>
        <Label htmlFor="idioma" className="block text-sm font-medium text-primary">
          Idioma principal
        </Label>
        <Input
          name="idioma"
          id="idioma"
          placeholder="Português"
          value={formData.idioma}
          onChange={handleInputChange}
        />
      </div>

      {/* Moeda base */}
      <div>
        <Label htmlFor="moeda" className="block text-sm font-medium text-primary">
          Moeda base
        </Label>
        <Input
          name="moeda"
          id="moeda"
          placeholder="Real (R$)"
          value={formData.moeda}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
