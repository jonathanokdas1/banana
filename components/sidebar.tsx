"use client";

import {
  RiDashboardLine,
  RiShoppingBagLine,
  RiFileListLine,
  RiMoneyDollarCircleLine,
  RiUserLine,
  RiBarChart2Line,
  RiPlug2Line,
  RiGiftLine,
  RiTeamLine,
  RiSettings4Line,
  RiLockLine, // Ícone de bloqueio
} from "react-icons/ri";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Ícone de seta para baixo
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"; // Componente Tooltip do ShadCN
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const Sidebar = () => {
  const pathname = usePathname();
  const [isPedidosOpen, setIsPedidosOpen] = useState(false);

  const togglePedidos = () => setIsPedidosOpen(!isPedidosOpen);

  const isActive = (route: string) => pathname === route;

  return (
    <TooltipProvider>
      <div className="flex flex-col h-full bg-white dark:bg-black text-gray-900 dark:text-white">
        {/* Conteúdo principal da sidebar */}
        <div className="px-3 py-2 flex-grow">
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <div className="relative w-8 h-8 mr-4">
              <Image fill alt="logo" src="/logo.png" />
            </div>
            <h1 className={cn("text-2xl font-bold", montserrat.className)}>BANANA</h1>
          </Link>

          <div className="space-y-1">
            {/* Dashboard */}
            <Link
              href="/dashboard"
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
                isActive("/dashboard") ? "bg-gray-200 dark:bg-gray-700" : ""
              )}
            >
              <RiDashboardLine className="h-5 w-5 mr-3" />
              Dashboard
            </Link>

            {/* Pedidos */}
            <div className="relative">
              <button
                onClick={togglePedidos}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
                  isActive("/pedidos/todos") || isActive("/pedidos/novo") || isActive("/pedidos/checkout-abandonado") || isActive("/pedidos/reembolso")
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                )}
              >
                <RiFileListLine className="h-5 w-5 mr-3" />
                Pedidos
                <ChevronDownIcon className="h-5 w-5 ml-auto text-gray-600 dark:text-gray-300" />
              </button>
              {isPedidosOpen && (
                <div className="ml-6 space-y-1">
                  <Link
                    href="/pedidos/todos"
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg",
                      isActive("/pedidos/todos") ? "bg-gray-200 dark:bg-gray-700" : ""
                    )}
                  >
                    Todos pedidos
                  </Link>
                  <Link
                    href="/pedidos/novo"
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg",
                      isActive("/pedidos/novo") ? "bg-gray-200 dark:bg-gray-700" : ""
                    )}
                  >
                    Criar Pedido
                  </Link>
                  <Link
                    href="/pedidos/checkout-abandonado"
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg",
                      isActive("/pedidos/checkout-abandonado") ? "bg-gray-200 dark:bg-gray-700" : ""
                    )}
                  >
                    Checkout Abandonado
                  </Link>
                  <Link
                    href="/pedidos/reembolso"
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg",
                      isActive("/pedidos/reembolso") ? "bg-gray-200 dark:bg-gray-700" : ""
                    )}
                  >
                    Reembolsos
                  </Link>
                </div>
              )}
            </div>

            {/* Produtos */}
            <Link
              href="/produtos"
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
                isActive("/produtos") ? "bg-gray-200 dark:bg-gray-700" : ""
              )}
            >
              <RiShoppingBagLine className="h-5 w-5 mr-3" />
              Produtos
            </Link>

            {/* Análises */}
            <Link
              href="/analises"
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
                isActive("/analises") ? "bg-gray-200 dark:bg-gray-700" : ""
              )}
            >
              <RiBarChart2Line className="h-5 w-5 mr-3" />
              Análises
            </Link>

            {/* Usuários e Permissões (Bloqueado) */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-not-allowed items-center rounded-lg transition",
                    "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <RiTeamLine className="h-5 w-5 mr-3" />
                  Usuários e Permissões
                  {/* Ícone de bloqueio ao lado do texto */}
                  <RiLockLine className="h-5 w-5 ml-auto text-gray-600 dark:text-gray-300" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Funcionalidade será disponibilizada em breve</p>
              </TooltipContent>
            </Tooltip>

            {/* Integrações */}
            <Link
              href="/integracoes"
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
                isActive("/integracoes") ? "bg-gray-200 dark:bg-gray-700" : ""
              )}
            >
              <RiPlug2Line className="h-5 w-5 mr-3" />
              Integrações
            </Link>

            {/* Financeiro */}
            <Link
              href="/financeiro"
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
                isActive("/financeiro") ? "bg-gray-200 dark:bg-gray-700" : ""
              )}
            >
              <RiMoneyDollarCircleLine className="h-5 w-5 mr-3" />
              Financeiro
            </Link>

            <div className="border-t border-gray-300 dark:border-gray-700 mt-6"></div> {/* Separador */}

            {/* Indique e Ganhe */}
            <Link
              href="/indique-e-ganhe"
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
                isActive("/indique-e-ganhe") ? "bg-gray-200 dark:bg-gray-700" : ""
              )}
            >
              <RiGiftLine className="h-5 w-5 mr-3" />
              Indique e Ganhe
            </Link>
          </div>
        </div>

        {/* Configurações (fixado no final da barra lateral) */}
        <div className="mt-auto mb-4 px-3">
          <Link
            href="/configuracoes"
            className={cn(
              "text-sm group flex p-3 font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
              isActive("/configuracoes") ? "bg-gray-200 dark:bg-gray-700" : ""
            )}
          >
            <RiSettings4Line className="h-5 w-5 mr-2" />
            Configurações
          </Link>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Sidebar;
