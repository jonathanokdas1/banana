import { Listbox } from "@headlessui/react";
import { useState } from "react";

const options = ["Pago", "Aguardando pagamento", "Cancelado"];

export const Select = ({ selected, setSelected }) => {
  return (
    <div className="relative mt-1">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="w-full p-2 border border-gray-300 rounded-md">
          {selected || "Filtrar por Status"}
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto">
          {options.map((option, index) => (
            <Listbox.Option
              key={index}
              className={({ active }) =>
                `cursor-default select-none relative py-2 pl-10 pr-4 ${
                  active ? "text-blue-900 bg-blue-100" : "text-gray-900"
                }`
              }
              value={option}
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
