import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const statuses = ['Pago', 'Aguardando pagamento', 'Cancelado'];

export const FilterDropdown = ({ selectedStatus, setSelectedStatus }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700">
        Filtro <ChevronDownIcon className="ml-2 h-5 w-5" />
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        {statuses.map((status, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <div
                className={`${
                  active ? 'bg-gray-100' : ''
                } px-4 py-2 cursor-pointer`}
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
