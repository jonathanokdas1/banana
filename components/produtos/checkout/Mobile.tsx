// components\produtos\checkout/CheckoutPreview.tsx
import { Card } from "@/components/ui/card"; // Componente do ShadCN

export default function Mobile() {
  return (
    <div className="flex justify-center">
      <Card className="relative w-[430px] h-[932px] bg-gray-100 rounded-[60px] shadow-2xl border border-gray-300 overflow-hidden">
        {/* Dynamic Island (parte superior do iPhone 15 Pro Max) */}
        <div className="absolute top-0 left-0 right-0 flex justify-center h-10 mt-2">
          <div className="w-36 h-8 bg-black rounded-full relative">
            {/* Simulação da câmera frontal e sensores */}
            <div className="absolute top-2 left-3 w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="absolute top-2 right-3 w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="absolute top-2 right-12 w-6 h-2 bg-gray-400 rounded"></div> {/* Simulando o alto-falante */}
          </div>
        </div>

        {/* Botões laterais mais detalhados */}
        <div className="absolute left-0 top-28 h-16 w-1.5 bg-gray-400 rounded-r-full"></div> {/* Botão de volume */}
        <div className="absolute left-0 top-52 h-10 w-1.5 bg-gray-400 rounded-r-full"></div> {/* Botão de silenciar */}
        <div className="absolute right-0 top-32 h-24 w-1.5 bg-gray-400 rounded-l-full"></div> {/* Botão lateral direito */}

        {/* Conteúdo do checkout */}
        <div className="p-6 mt-14 bg-white rounded-xl shadow-inner">
          <h2 className="text-xl font-semibold mb-6 text-center">Checkout</h2>
          <form className="space-y-5">
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-xl"
              placeholder="Nome Completo"
            />
            <input
              type="email"
              className="w-full p-4 border border-gray-300 rounded-xl"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-xl"
              placeholder="Endereço"
            />
            <button className="w-full p-4 bg-blue-600 text-white rounded-xl shadow-lg">
              Finalizar Compra
            </button>
          </form>
        </div>

        {/* Moldura inferior mais detalhada */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center h-10 bg-black rounded-b-[60px]">
          <div className="w-24 h-1.5 bg-gray-400 rounded mt-3"></div> {/* Barra inferior */}
        </div>
      </Card>
    </div>
  );
}
