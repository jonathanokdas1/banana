// components/produtos/checkout/Desktop.tsx
"use client";

export default function Desktop() {
  return (
    <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Checkout - Desktop</h2>
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
          <button className="w-full p-4 bg-blue-600 text-white rounded-xl">
            Finalizar Compra
          </button>
        </form>
      </div>
    </div>
  );
}
