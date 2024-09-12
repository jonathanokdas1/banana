"use client";

import * as React from "react";
import { useState } from "react";
import { Moon, Sun, Menu, Bell } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import MobileSidebar from "./mobile-sidebar";
import { useSession } from "next-auth/react";
import Link from "next/link"; // Adicione essa linha para corrigir o erro
import Avatar from "./Avatar"; // Importe o componente Avatar
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession(); // Agora funciona corretamente com SessionProvider

  const userName = session?.user?.name || "Visitante";

  const currentHour = new Date().getHours();

  let greetingMessage;
  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = `Bom dia, ${userName}!`;
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = `Boa tarde, ${userName}!`;
  } else if (currentHour >= 18 && currentHour < 22) {
    greetingMessage = `Boa noite, ${userName}!`;
  } else {
    greetingMessage = `Boa noite, ${userName}!`;
  }

  const initialNotifications = [
    { id: 1, message: "Nova atualização disponível", time: "Agora", read: false },
    { id: 2, message: "Servidor será reiniciado às 22:00", time: "1h atrás", read: false },
    { id: 3, message: "Backup completo", time: "3h atrás", read: true },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

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
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Bell className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Notificações</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={notification.read ? "opacity-50" : ""}
                onClick={() => markAsRead(notification.id)}
              >
                <span>{notification.message}</span>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={markAllAsRead}>
              Marcar todas como lidas
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <span>{greetingMessage}</span>

        {/* Substituindo o botão de "Sair" pelo Avatar */}
        {session ? (
          <Avatar /> // Mostra o avatar quando o usuário está logado
        ) : (
          <Link href="/sign-in">
            <Button>Entrar</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
