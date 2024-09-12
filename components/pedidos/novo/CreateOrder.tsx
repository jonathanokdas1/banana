"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast"; 
import InputMask from "react-input-mask"; // Certificado que a importação está correta
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Radio Group para método de pagamento
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"; // Select para produtos

export function CreateOrder() {
  const { showToast } = useToast();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    cpf: "",
    email: "",
    whatsapp: "",
  });

  const [products, setProducts] = useState([{ name: "", quantity: 1, price: 0 }]);
  const [paymentMethod, setPaymentMethod] = useState("Pix");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index].name = value;
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (index, e) => {
    const { value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index].quantity = parseInt(value, 10);
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: "", quantity: 1, price: 0 }]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleCreateOrder = () => {
    showToast({ title: "Pedido criado com sucesso!" });
    // Adicione a lógica para salvar o pedido no backend aqui
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar Novo Pedido</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Informações do Cliente */}
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <Input
              placeholder="Nome do Cliente"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
            />
            <Input
              placeholder="E-mail"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <InputMask
              mask="999.999.999-99"
              placeholder="CPF"
              name="cpf"
              value={customerInfo.cpf}
              onChange={handleInputChange}
            >
              {(inputProps: any) => <Input {...inputProps} />}
            </InputMask>
            <InputMask
              mask="(99) 99999-9999"
              placeholder="WhatsApp"
              name="whatsapp"
              value={customerInfo.whatsapp}
              onChange={handleInputChange}
            >
              {(inputProps: any) => <Input {...inputProps} />}
            </InputMask>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Produtos */}
        <div className="grid gap-4">
          <h3 className="font-semibold">Produtos</h3>
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              {/* Substituí o input de nome do produto por Select */}
              <Select onValueChange={(value) => handleProductChange(index, value)} value={product.name}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o Produto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Produto 1">Produto 1</SelectItem>
                  <SelectItem value="Produto 2">Produto 2</SelectItem>
                  <SelectItem value="Produto 3">Produto 3</SelectItem>
                </SelectContent>
              </Select>

              {/* Campo de Quantidade com Descrição */}
              <div>
                <Input
                  type="number"
                  placeholder="Quantidade"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(index, e)}
                />
                <p className="text-sm text-muted-foreground">Informe a quantidade desejada</p>
              </div>

              {index > 0 && (
                <Button variant="destructive" onClick={() => handleRemoveProduct(index)}>
                  Remover
                </Button>
              )}
            </div>
          ))}
          <Button variant="outline" onClick={handleAddProduct}>
            Adicionar Produto
          </Button>
        </div>

        <Separator className="my-6" />

        {/* Método de Pagamento */}
        <div className="grid gap-4">
          <h3 className="font-semibold">Método de Pagamento</h3>
          <RadioGroup onValueChange={setPaymentMethod} value={paymentMethod}>
            <div className="flex items-center space-x-4">
              <RadioGroupItem value="Pix" id="pix" />
              <label htmlFor="pix" className="text-sm font-medium">Pix</label>
              <RadioGroupItem value="Boleto" id="boleto" />
              <label htmlFor="boleto" className="text-sm font-medium">Boleto</label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button variant="primary" onClick={handleCreateOrder}>
          Criar Pedido
        </Button>
      </CardFooter>
    </Card>
  );
}
