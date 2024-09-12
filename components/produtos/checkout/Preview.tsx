"use client";
import { useState } from "react"; // Importa useState
import Mobile from "@/components/produtos/checkout/Mobile";
import Desktop from "@/components/produtos/checkout/Desktop"; // Importa os componentes de visualização
import { Card } from "@/components/ui/card"; // Importando o Card do ShadCN
import { Separator } from "@/components/ui/separator"; // Importando o Separator do ShadCN
import { Monitor, Smartphone } from "lucide-react"; // Ícones Lucide

export default function Preview() {
  const [isMobile, setIsMobile] = useState(true); // Estado para alternar entre Mobile e Desktop

  return (
    <Card className="flex flex-col p-6 h-full w-full"> {/* Card principal */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Pré-visualização do Checkout</h1>
        <div>
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="flex items-center"
          >
            {isMobile ? (
              <>
                <Monitor className="w-5 h-5 mr-2" /> <span>Desktop</span>
              </>
            ) : (
              <>
                <Smartphone className="w-5 h-5 mr-2" /> <span>Mobile</span>
              </>
            )}
          </button>
        </div>
      </div>

      <Separator className="my-4" /> {/* Linha separadora entre o Header e o conteúdo */}

      <div className="flex flex-1"> {/* Flex container para o conteúdo */}
        {/* Alternando entre Mobile e Desktop */}
        <div className="flex-1">
          {isMobile ? <Mobile /> : <Desktop />}
        </div>
      </div>
    </Card>
  );
}
