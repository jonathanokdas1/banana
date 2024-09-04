"use client"; // Certifica que o componente é um Client Component

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  ShoppingBagIcon,
  UserIcon,
  BanknotesIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Ícone de seta para baixo
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const Sidebar = () => {
  const pathname = usePathname();
  const [isPedidosOpen, setIsPedidosOpen] = useState(false);
  const [isProdutosOpen, setIsProdutosOpen] = useState(false);
  const [isBananaCheckoutOpen, setIsBananaCheckoutOpen] = useState(false);
  const [isFinanceiroOpen, setIsFinanceiroOpen] = useState(false);

  const togglePedidos = () => setIsPedidosOpen(!isPedidosOpen);
  const toggleProdutos = () => setIsProdutosOpen(!isProdutosOpen);
  const toggleBananaCheckout = () => setIsBananaCheckoutOpen(!isBananaCheckoutOpen);
  const toggleFinanceiro = () => setIsFinanceiroOpen(!isFinanceiroOpen);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="px-3 py-2 flex-grow">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>Genius</h1>
        </Link>
        <div className="space-y-1">
          {/* Dashboard */}
          <Link
            href="/dashboard"
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            )}
          >
            <HomeIcon className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-300" />
            Dashboard
          </Link>

          {/* Pedidos */}
          <div className="relative">
            <button
              onClick={togglePedidos}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
              )}
            >
              <ChartBarIcon className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-300" />
              Pedidos
              <ChevronDownIcon className="h-5 w-5 ml-auto text-gray-600 dark:text-gray-300" />
            </button>
            {isPedidosOpen && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/pedidos/todos"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Todos pedidos
                </Link>
                <Link
                  href="/pedidos/novo"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Criar Pedido
                </Link>
                <Link
                  href="/pedidos/checkout-abandonado"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Checkout Abandonado
                </Link>
                <Link
                  href="/pedidos/recusa-cartao"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Recusa Cartão
                </Link>
                <Link
                  href="/pedidos/chargeback"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Chargeback
                </Link>
              </div>
            )}
          </div>

          {/* Produtos */}
          <div className="relative">
            <button
              onClick={toggleProdutos}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
              )}
            >
              <ShoppingBagIcon className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-300" />
              Produtos
              <ChevronDownIcon className="h-5 w-5 ml-auto text-gray-600 dark:text-gray-300" />
            </button>
            {isProdutosOpen && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/produtos/todos"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Todos os Produtos
                </Link>
                <Link
                  href="/produtos/novo"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Criar Produto
                </Link>
              </div>
            )}
          </div>

          {/* Clientes */}
          <Link
            href="/clientes"
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            )}
          >
            <UserIcon className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-300" />
            Clientes
          </Link>

          {/* Banana Checkout */}
          <div className="relative">
            <button
              onClick={toggleBananaCheckout}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
              )}
            >
              <CreditCardIcon className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-300" />
              Banana Checkout
              <ChevronDownIcon className="h-5 w-5 ml-auto text-gray-600 dark:text-gray-300" />
            </button>
            {isBananaCheckoutOpen && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/banana-checkout/criar"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Criar Checkout
                </Link>
                <Link
                  href="/banana-checkout/editar"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Editar Checkout
                </Link>
              </div>
            )}
          </div>

          {/* Financeiro */}
          <div className="relative">
            <button
              onClick={toggleFinanceiro}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
              )}
            >
              <BanknotesIcon className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-300" />
              Financeiro
              <ChevronDownIcon className="h-5 w-5 ml-auto text-gray-600 dark:text-gray-300" />
            </button>
            {isFinanceiroOpen && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/financeiro/visao-geral"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Visão Geral
                </Link>
                <Link
                  href="/financeiro/extrato"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  Extrato
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Engrenagem - Admin (fixado no final da barra lateral) */}
        <div className="mt-auto mb-4 flex justify-center">
          <Link
            href="/admin"
            className={cn(
              "text-sm group flex p-3 justify-center font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            )}
          >
            <Cog6ToothIcon className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-300" />
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
