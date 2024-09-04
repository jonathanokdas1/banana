"use client";

import * as React from "react";
import { useState } from "react";
import { Moon, Sun, Menu, Bell } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  // Defina o nome do usuário aqui (você deve obtê-lo dinamicamente no contexto real)
  const userName = "Jonathan"; // <-- Substitua esta variável pelo nome do usuário real
  
  // Obtenha a hora atual
  const currentHour = new Date().getHours();

  // Defina a mensagem com base no período do dia
  let greetingMessage;
  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = `Bom dia, ${userName}!`;
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = `Boa tarde, ${userName}!`;
  } else if (currentHour >= 18 && currentHour < 22) {
    greetingMessage = `Boa noite, ${userName}!`;
  } else {
    greetingMessage = `Boa noite, ${userName}!`; // Mensagem motivacional de madrugada
  }

  // Notificações de teste
  const initialNotifications = [
    { id: 1, message: "Nova atualização disponível", time: "Agora", read: false },
    { id: 2, message: "Servidor será reiniciado às 22:00", time: "1h atrás", read: false },
    { id: 3, message: "Backup completo", time: "3h atrás", read: true },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  // Alterna o tema entre claro e escuro
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Função para marcar uma notificação como lida
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Função para marcar todas as notificações como lidas
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <MobileSidebar />
        <Menu />
      </Button>
      <div className="flex w-full justify-end items-center space-x-4">
        {/* Botão para alternar entre os temas */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme} // Ao clicar, alterna o tema
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>

        {/* Ícone de notificações com dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Bell className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Notificações</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            {/* Notificações */}
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={cn(
                  "flex justify-between items-center w-full",
                  notification.read ? "opacity-50" : ""
                )}
                onClick={() => markAsRead(notification.id)} // Marcar como lida ao clicar
              >
                <span>{notification.message}</span>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </DropdownMenuItem>
            ))}

            {/* Separador e botão de "Marcar todas como lidas" */}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={markAllAsRead}>
              Marcar todas como lidas
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <span>{greetingMessage}</span> {/* Mensagem de saudação baseada no horário */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
