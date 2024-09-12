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
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RefundRequest {
  orderId: string;
  date: string;
  product: string;
  customerName: string;
  cpf: string;
  email: string;
  refundDate: string;
  justification: string;
}

interface CardRefundProps {
  refund: RefundRequest;
  onPreviousRefund: () => void;
  onNextRefund: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function CardRefund({ refund, onPreviousRefund, onNextRefund, hasPrevious, hasNext }: CardRefundProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Reembolso Pedido #{refund.orderId}
          </CardTitle>
          <CardDescription>Data do pedido: {refund.date}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-6 text-sm">
        {/* Informações do Cliente */}
        <div className="grid gap-3">
          <div className="font-semibold">Detalhes do cliente</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Nome</dt>
              <dd>{refund.customerName}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">CPF</dt>
              <dd>{refund.cpf}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${refund.email}`}>
                  {refund.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Informações do Reembolso */}
        <div className="mt-6">
          <div className="font-semibold">Informações do Reembolso</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Produto</dt>
              <dd>{refund.product}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Data do Pedido de Reembolso</dt>
              <dd>{refund.refundDate}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Justificativa</dt>
              <dd>{refund.justification}</dd>
            </div>
          </dl>
        </div>
      </CardContent>

      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <Button size="icon" variant="outline" onClick={onNextRefund} disabled={!hasPrevious}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline" onClick={onPreviousRefund} disabled={!hasNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
