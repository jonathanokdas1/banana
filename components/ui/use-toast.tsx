"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/lib/utils"; // Função de utilidade 'cn'

const ToastContext = React.createContext<{
  showToast: (message: string, variant?: string) => void;
} | null>(null);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState([]);

  const showToast = (message: string, variant: string = "default") => {
    const id = Math.random().toString(36).substr(2, 9); // Gerar um ID único
    setToasts((prev) => [...prev, { id, message, variant }]);
  };

  const closeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastPrimitive.Provider>
        {toasts.map(({ id, message, variant }) => (
          <ToastPrimitive.Root
            key={id}
            open={true}
            onOpenChange={() => closeToast(id)}
            className={cn(
              "fixed bottom-4 right-4 bg-white p-4 rounded-md shadow-lg",
              variant === "destructive" ? "bg-red-500" : "bg-green-500"
            )}
          >
            <ToastPrimitive.Title>{message}</ToastPrimitive.Title>
            <ToastPrimitive.Close className="absolute top-0 right-0 p-2">
              X
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}
