"use client";
// components/produtos/criar/CriarEbook.tsx
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function CriarEbook({ formData, handleInputChange }) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Informações externas</h3>
      <p className="text-sm text-gray-600">Serão disponibilizadas para os compradores</p>

      {/* Nome do Produto */}
      <div>
        <label className="block text-sm font-medium">Nome do Produto</label>
        <Input
          name="nomeProduto"
          value={formData.nomeProduto}
          onChange={handleInputChange}
          placeholder="Digite um nome"
        />
      </div>

      {/* Descrição breve */}
      <div>
        <label className="block text-sm font-medium">Descrição breve</label>
        <Input
          as="textarea"
          name="descricao"
          value={formData.descricao}
          onChange={handleInputChange}
          placeholder="Descreva seu produto em poucas palavras"
        />
      </div>

      {/* Categoria */}
      <div>
        <label className="block text-sm font-medium">Categoria</label>
        <Select onValueChange={(value) => handleInputChange({ target: { name: 'categoria', value } })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tecnologia">Tecnologia</SelectItem>
            <SelectItem value="educacao">Educação</SelectItem>
            <SelectItem value="literatura">Literatura</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Idioma principal */}
      <div>
        <label className="block text-sm font-medium">Idioma principal</label>
        <Select onValueChange={(value) => handleInputChange({ target: { name: 'idioma', value } })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o idioma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="portugues">Português</SelectItem>
            <SelectItem value="ingles">Inglês</SelectItem>
            <SelectItem value="espanhol">Espanhol</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Moeda base */}
      <div>
        <label className="block text-sm font-medium">Moeda base</label>
        <Select onValueChange={(value) => handleInputChange({ target: { name: 'moeda', value } })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a moeda" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="real">Real (R$)</SelectItem>
            <SelectItem value="dolar">Dólar (US$)</SelectItem>
            <SelectItem value="euro">Euro (€)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
