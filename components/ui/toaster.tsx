"use client";

import { useToast } from "@/hooks/use-toast"; // Certifique-se de que o caminho está correto
import {
  Toast,
  ToastClose,
  ToastTitle,
} from "@/components/ui/toast"; // Importar Toast e outros componentes

export function Toaster() {
  const { toasts } = useToast(); // Obtenha os toasts do contexto

  return (
    <>
      {toasts.map(({ id, message, variant }) => (
        <Toast key={id} variant={variant}>
          <ToastTitle>{message}</ToastTitle>
          <ToastClose />
        </Toast>
      ))}
    </>
  );
}
