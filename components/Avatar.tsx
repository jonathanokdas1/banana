import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export function Avatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="overflow-hidden rounded-full focus:outline-none"
        >
          <Image
            src="/placeholder-user.jpg" // Substitua pela URL dinâmica do avatar do usuário
            width={36}
            height={36}
            alt="Avatar"
            className="rounded-full"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuItem>Suporte</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Avatar;
