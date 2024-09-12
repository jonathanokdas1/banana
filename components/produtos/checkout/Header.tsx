"use client";
import { Monitor, Smartphone } from "lucide-react"; // Ícones Lucide

export default function Header({ isMobile, setIsMobile }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Pré-visualização do Checkout</h1>
      <div>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="flex items-center "
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
  );
}
