"use client"; // Marcar como Client Component

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { getProductById } from "@/api/fake-db/produtos"; // Importa a função para buscar o produto

export function Produto({ productId }: { productId: string }) {
  const [formData, setFormData] = useState({
    nomeProduto: "",
    descricao: "",
    categoria: "",
    imagem: null,
    previewImagem: null,
  });

  useEffect(() => {
    const product = getProductById(productId); // Busca o produto pelo ID
    if (product) {
      setFormData({
        nomeProduto: product.productName,
        descricao: product.description,
        categoria: product.deliveryMethod, // Usando "deliveryMethod" como exemplo de categoria
        imagem: null,
        previewImagem: null,
      });
    }
  }, [productId]);

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        imagem: file,
        previewImagem: URL.createObjectURL(file), // Gera uma URL para pré-visualização
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Lógica de envio dos dados para o backend, incluindo upload da imagem.
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Editar Produto</CardTitle>
        <CardDescription>Preencha os campos abaixo para editar o produto.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome do produto */}
          <div>
            <label htmlFor="nomeProduto" className="block text-sm font-medium text-gray-700">
              Nome do produto
            </label>
            <Input
              type="text"
              name="nomeProduto"
              id="nomeProduto"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              onChange={handleInputChange}
              value={formData.nomeProduto}
              placeholder="Insira o nome do produto"
            />
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <Textarea
              name="descricao"
              id="descricao"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              onChange={handleInputChange}
              value={formData.descricao}
              placeholder="Insira a descrição do produto"
              rows={4}
            />
          </div>

          {/* Categoria */}
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
              Categoria
            </label>
            <Select
              onValueChange={(value) => setFormData((prev) => ({ ...prev, categoria: value }))}
              value={formData.categoria}
            >
              <SelectTrigger className="mt-1 border-gray-300 shadow-sm">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eletronicos">Eletrônicos</SelectItem>
                <SelectItem value="roupas">Roupas</SelectItem>
                <SelectItem value="moveis">Móveis</SelectItem>
                <SelectItem value="alimentos">Alimentos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Imagem do produto */}
          <div>
            <label htmlFor="imagem" className="block text-sm font-medium text-gray-700">
              Imagem do produto
            </label>
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex justify-center items-center cursor-pointer">
              <label
                htmlFor="imagem"
                className="text-center text-gray-600 hover:text-gray-800"
              >
                {formData.previewImagem ? (
                  <img
                    src={formData.previewImagem}
                    alt="Preview"
                    className="object-cover h-40 w-60"
                  />
                ) : (
                  <span>Arraste aqui ou selecione do computador</span>
                )}
                <p className="mt-1 text-sm text-gray-500">Tamanho recomendado: 300x250 pixels</p>
                <Input
                  type="file"
                  name="imagem"
                  id="imagem"
                  className="hidden"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default Produto;
