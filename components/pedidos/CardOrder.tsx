"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, CreditCard, ExternalLink, Copy, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import InputMask from "react-input-mask";
import { useToast } from "@/components/ui/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cpf } from "cpf-cnpj-validator"; 

// Define the customer info interface
interface Product {
  name: string;
  price: string;
}

interface Fee {
  standardRate: number;
  fixedFee: number;
}

interface Order {
  id: string;
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: string;
  paymentMethod: string;
  products: Product[];
  transactionId: string;
  fees: Fee;
}

interface CustomerInfo {
  name: string;
  cpf: string;
  email: string;
  whatsapp: string;
}

interface CardOrderProps {
  order: Order;
  onPreviousOrder: () => void;
  onNextOrder: () => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
}

export function CardOrder({ order, onPreviousOrder, onNextOrder, isEditing, setIsEditing }: CardOrderProps) {
  const [openDialog, setOpenDialog] = useState(false); // Estado para controle do Dialog
  const { showToast } = useToast();

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: order.customer, 
    cpf: "123.456.789-09", 
    email: order.email,
    whatsapp: "11912345678",
  });

  // Alterna entre editar e salvar
  const handleEditToggle = () => {
    if (isEditing) {
      setOpenDialog(true); // Abre o Dialog se estiver editando
    } else {
      setIsEditing(true); // Entra no modo de edição
    }
  };

  const handleCancelEdit = () => {
    setOpenDialog(true); // Abre o Dialog ao tentar cancelar a edição
  };

  const handleConfirmExit = () => {
    setIsEditing(false); // Fecha o modo de edição
    setOpenDialog(false); // Fecha o Dialog
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Fecha o Dialog
  };

  // Validações e funções para lidar com mudanças nos inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, cpf: value }));
  };

  const handleSave = () => {
    if (!customerInfo.name.trim() || customerInfo.name.split(" ").length < 2) {
      showToast("O nome deve conter pelo menos duas palavras.");
      return;
    }

    if (!customerInfo.cpf.trim() || !cpf.isValid(customerInfo.cpf)) {
      showToast("CPF inválido.");
      return;
    }

    if (!customerInfo.email.trim() || !isEmailValid(customerInfo.email)) {
      showToast("E-mail inválido.");
      return;
    }

    const cleanedPhone = customerInfo.whatsapp.replace(/\D/g, "");
    if (!isPhoneValid(cleanedPhone)) {
      showToast("Telefone inválido. O número deve conter 11 dígitos.");
      return;
    }

    const formattedCpf = cpf.format(customerInfo.cpf);
    setCustomerInfo((prev) => ({ ...prev, cpf: formattedCpf }));

    setIsEditing(false);
    showToast("Informações salvas com sucesso!");
  };

  const copyTransactionId = () => {
    navigator.clipboard.writeText(order.transactionId);
    showToast({ title: "ID de transação copiado!" });
  };

  // Cálculo das taxas e valor líquido
  const calculateFees = (amount) => {
    const amountNumber = parseFloat(amount.replace('$', ''));
    const totalFees = (amountNumber * (order.fees.standardRate / 100)) + order.fees.fixedFee;
    const netAmount = amountNumber - totalFees;
    return { totalFees: totalFees.toFixed(2), netAmount: netAmount.toFixed(2) };
  };

  const { totalFees, netAmount } = calculateFees(order.amount);

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Atenção</DialogTitle>
            <DialogDescription>
              Você deseja descartar as alterações?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleDialogClose}>Não</Button>
            <Button onClick={handleConfirmExit}>Sim</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Pedido #{order.id}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={copyTransactionId}
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copiar ID de transação</span>
              </Button>
            </CardTitle>
            <CardDescription>{order.date}</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">Mais</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleEditToggle} disabled={isEditing}>
                  {isEditing ? "Salvar" : "Editar"}
                </DropdownMenuItem>
                <DropdownMenuItem>Exportar</DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent className="p-6 text-sm">
          {/* Informações do Cliente */}
          <div className="grid gap-3">
            <div className="font-semibold">Detalhes do cliente</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Nome</dt>
                <dd>
                  {isEditing ? (
                    <Input
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    customerInfo.name
                  )}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">CPF</dt>
                <dd>
                  {isEditing ? (
                    <InputMask
                      mask="999.999.999-99"
                      value={customerInfo.cpf}
                      onChange={handleCpfChange}
                    >
                      {(inputProps: any) => <Input {...inputProps} />}
                    </InputMask>
                  ) : (
                    customerInfo.cpf
                  )}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  {isEditing ? (
                    <Input
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <a href={`mailto:${customerInfo.email}`}>
                      {customerInfo.email}
                    </a>
                  )}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">WhatsApp</dt>
                <dd>
                  {isEditing ? (
                    <div className="flex items-center">
                      <span className="mr-2">+55</span>
                      <InputMask
                        mask="(99) 99999-9999"
                        value={customerInfo.whatsapp}
                        onChange={handleInputChange}
                        name="whatsapp"
                      >
                        {(inputProps: any) => <Input {...inputProps} />}
                      </InputMask>
                    </div>
                  ) : (
                    <a
                      href={`https://wa.me/55${customerInfo.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      +55 {customerInfo.whatsapp}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          {isEditing && (
            <div className="mt-4 flex gap-2">
              <Button variant="outline" onClick={handleCancelEdit}>
                Cancelar
              </Button>
              <Button onClick={handleSave}>
                Salvar
              </Button>
            </div>
          )}

          {/* Métodos de Pagamento */}
          <div className="mt-6">
            <div className="font-semibold">Método de Pagamento</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-1 text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  {order.paymentMethod}
                </dt>
                <dd>{order.amount}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>ID de Transação</dt>
                <dd className="flex items-center">
                  {order.transactionId}
                </dd>
              </div>
            </dl>
          </div>

          {/* Produtos Comprados */}
          <div className="mt-6">
            <div className="font-semibold">Produtos Comprados</div>
            <ul>
              {order.products.map((product, index) => (
                <li key={index} className="flex justify-between">
                  <span>{product.name}</span>
                  <span>{product.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-semibold">
              Total: {order.amount}
            </div>
          </div>

          {/* Informações de Taxas */}
          <div className="mt-6">
            <div className="font-semibold">Taxas</div>
            <dl className="grid gap-2">
              <div className="flex justify-between">
                <dt>Taxa Padrão ({order.fees.standardRate}% + R$ {order.fees.fixedFee.toFixed(2)})</dt>
                <dd>R$ {totalFees}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Valor Líquido</dt>
                <dd>R$ {netAmount}</dd>
              </div>
            </dl>
          </div>
        </CardContent>

        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
  <Button size="icon" variant="outline" onClick={onNextOrder} disabled={isEditing}>
    <ChevronLeft className="h-4 w-4" />
  </Button>
  <Button size="icon" variant="outline" onClick={onPreviousOrder} disabled={isEditing}>
    <ChevronRight className="h-4 w-4" />
  </Button>
</CardFooter>

      </Card>
    </>
  );
}
