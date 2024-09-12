// components/produtos/area-de-membros/Header.tsx
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-var(--primary-background) p-4">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/conteudo" className="text-var(--primary-color) hover:text-var(--secondary-color)">
                Conteúdo
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/alunos" className="text-var(--primary-color) hover:text-var(--secondary-color)">
                Alunos
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/turmas" className="text-var(--primary-color) hover:text-var(--secondary-color)">
                Turmas
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/configuracoes" className="text-var(--primary-color) hover:text-var(--secondary-color)">
                Configurações
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
