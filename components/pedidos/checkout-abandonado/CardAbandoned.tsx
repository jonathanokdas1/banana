"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Product {
  name: string;
  price: string;
}

interface Order {
  id: string;
  customer: string;
  email: string;
  whatsapp: string;
  dateAbandoned: string;
  totalAmount: string;
  deviceType: string;
  timeSpent: string;
  products: Product[];
}

interface CardAbandonedProps {
  order: Order;
  onPreviousOrder: () => void;
  onNextOrder: () => void;
}

export function CardAbandoned({ order, onPreviousOrder, onNextOrder }: CardAbandonedProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Carrinho Abandonado #{order.id}
          </CardTitle>
          <CardDescription>{order.dateAbandoned}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-6 text-sm">
        {/* Informações do Cliente */}
        <div className="grid gap-3">
          <div className="font-semibold">Detalhes do cliente</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Nome</dt>
              <dd>{order.customer}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${order.email}`}>
                  {order.email}
                </a>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">WhatsApp</dt>
              <dd>
                <a
                  href={`https://wa.me/${order.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  {order.whatsapp}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-6">
          <div className="font-semibold">Informações do Carrinho</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Tempo no Carrinho</dt>
              <dd>{order.timeSpent}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Tipo de Dispositivo</dt>
              <dd>{order.deviceType}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Data do Abandono</dt>
              <dd>{order.dateAbandoned}</dd>
            </div>
          </dl>
        </div>

        {/* Produtos no Carrinho */}
        <div className="mt-6">
          <div className="font-semibold">Produtos no Carrinho</div>
          <ul>
            {order.products.map((product, index) => (
              <li key={index} className="flex justify-between">
                <span>{product.name}</span>
                <span>{product.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-semibold">
            Total: {order.totalAmount}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <Button size="icon" variant="outline" onClick={onPreviousOrder}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline" onClick={onNextOrder}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
