import { AiOutlineFile, AiOutlineClockCircle, AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai"; // Ícones do React Icons
import { FaWhatsapp } from "react-icons/fa"; // Ícone de WhatsApp
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Usando ShadCN para o Sheet
import { Button } from "@/components/ui/button"; // Usando ShadCN para o botão
import { Separator } from "@/components/ui/separator"; // Usando ShadCN para o separador

export default function BarraLateral() {
  return (
    <div className="flex flex-col w-64 h-full p-4 space-y-4">
      {/* Título e subtítulo */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Configurações</h2>
        <p className="text-sm text-muted-foreground">Gerencie as configurações do checkout</p>
      </div>

      <Separator />

      {/* Botão para Capa */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <AiOutlineFile className="w-5 h-5" /> {/* Ícone de React Icons */}
            <span>Capa</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <h2 className="text-xl font-semibold mb-4">Configurações da Capa</h2>
        </SheetContent>
      </Sheet>

      <Separator />

      {/* Botão para Contador */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <AiOutlineClockCircle className="w-5 h-5" /> {/* Ícone de React Icons */}
            <span>Contador</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <h2 className="text-xl font-semibold mb-4">Configurações do Contador</h2>
        </SheetContent>
      </Sheet>

      <Separator />

      {/* Botão para WhatsApp */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <FaWhatsapp className="w-5 h-5" /> {/* Ícone de WhatsApp */}
            <span>WhatsApp</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <h2 className="text-xl font-semibold mb-4">Configurações do WhatsApp</h2>
        </SheetContent>
      </Sheet>

      <Separator />

      {/* Botão para Back Redirect */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <AiOutlineArrowLeft className="w-5 h-5" /> {/* Ícone de React Icons */}
            <span>Back Redirect</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <h2 className="text-xl font-semibold mb-4">Configurações do Back Redirect</h2>
        </SheetContent>
      </Sheet>

      <Separator />

      {/* Botão para Order Bumps */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <AiOutlineShoppingCart className="w-5 h-5" /> {/* Ícone de React Icons */}
            <span>Order Bumps</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <h2 className="text-xl font-semibold mb-4">Configurações do Order Bumps</h2>
        </SheetContent>
      </Sheet>
    </div>
  );
}
