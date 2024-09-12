"use client"; // Marcar como Client Component

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { getProductById } from "@/api/fake-db/produtos"; // Importa a função para buscar o produto

export function Suporte({ productId }: { productId: string }) {
  const [formData, setFormData] = useState({
    paginaVendas: "",
    emailSuporte: "",
    nomeProdutor: "João da Silva",
  });

  const [errors, setErrors] = useState({
    paginaVendas: "",
    emailSuporte: "",
    nomeProdutor: "",
  });

  const [touched, setTouched] = useState({
    paginaVendas: false,
    emailSuporte: false,
    nomeProdutor: false,
  });

  useEffect(() => {
    const product = getProductById(productId); // Busca o produto pelo ID
    if (product) {
      setFormData({
        ...formData,
        paginaVendas: product.salesPage, // Define a página de vendas do produto
        emailSuporte: "example@example.com", // Você pode modificar isso conforme necessário
      });
    }
  }, [productId]);

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateFields();
  };

  const validateFields = () => {
    let newErrors = { ...errors };

    // Validação de URL válida
    const urlRegex = /^(https?:\/\/[a-zA-Z0-9-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/.*)?$/;
    if (!urlRegex.test(formData.paginaVendas)) {
      newErrors.paginaVendas = "A URL deve ser válida (deve conter http/https e um domínio válido)";
    } else {
      newErrors.paginaVendas = "";
    }

    // Validação de e-mail válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailSuporte)) {
      newErrors.emailSuporte = "O e-mail deve ser válido";
    } else {
      newErrors.emailSuporte = "";
    }

    // Validação de nome com nome e sobrenome
    if (!formData.nomeProdutor.includes(" ")) {
      newErrors.nomeProdutor = "O nome deve conter nome e sobrenome";
    } else {
      newErrors.nomeProdutor = "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    validateFields();

    // Verifica se há erros antes de enviar o formulário
    if (errors.paginaVendas || errors.emailSuporte || errors.nomeProdutor) {
      alert("Por favor, corrija os erros antes de continuar.");
      return;
    }

    // Lógica de envio dos dados do formulário (simulado aqui)
    console.log("Dados de Suporte enviados:", formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Suporte ao Cliente</CardTitle>
        <CardDescription>Aprenda como preencher os dados de suporte ao cliente</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Página de Vendas */}
          <div>
            <label htmlFor="paginaVendas" className="block text-sm font-medium text-gray-700">
              Página de Vendas
            </label>
            <Input
              type="text"
              name="paginaVendas"
              id="paginaVendas"
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                errors.paginaVendas && touched.paginaVendas && "border-red-500"
              }`}
              onChange={handleInputChange}
              onBlur={() => handleBlur("paginaVendas")}
              value={formData.paginaVendas}
              placeholder="https://example.com"
            />
            {errors.paginaVendas && touched.paginaVendas && (
              <p className="text-sm text-red-600">{errors.paginaVendas}</p>
            )}
          </div>

          {/* E-mail de Suporte */}
          <div>
            <label htmlFor="emailSuporte" className="block text-sm font-medium text-gray-700">
              E-mail de Suporte
            </label>
            <Input
              type="email"
              name="emailSuporte"
              id="emailSuporte"
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                errors.emailSuporte && touched.emailSuporte && "border-red-500"
              }`}
              onChange={handleInputChange}
              onBlur={() => handleBlur("emailSuporte")}
              value={formData.emailSuporte}
              placeholder="example@example.com"
            />
            {errors.emailSuporte && touched.emailSuporte && (
              <p className="text-sm text-red-600">{errors.emailSuporte}</p>
            )}
          </div>

          {/* Nome de Exibição do Produtor */}
          <div>
            <label htmlFor="nomeProdutor" className="block text-sm font-medium text-gray-700">
              Nome de Exibição do Produtor
            </label>
            <Input
              type="text"
              name="nomeProdutor"
              id="nomeProdutor"
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                errors.nomeProdutor && touched.nomeProdutor && "border-red-500"
              }`}
              onChange={handleInputChange}
              onBlur={() => handleBlur("nomeProdutor")}
              value={formData.nomeProdutor}
              placeholder="João da Silva"
            />
            {errors.nomeProdutor && touched.nomeProdutor && (
              <p className="text-sm text-red-600">{errors.nomeProdutor}</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default Suporte;
