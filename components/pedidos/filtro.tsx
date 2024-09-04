"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range"; // Importar o DatePickerWithRange
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FunnelIcon } from '@heroicons/react/24/outline';

const FiltroPedidos = ({ setSelectedStatus, setSelectedDateRange, selectedDateRange }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
          <FunnelIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" /> {/* Ícone de filtro */}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="p-6">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
        </SheetHeader>

        {/* Filtro por Data */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Filtrar por Data</h3>
          <DatePickerWithRange
            selectedDateRange={selectedDateRange}
            setSelectedDateRange={setSelectedDateRange}
          />
        </div>

        {/* Filtro por Status */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Filtrar por Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Pagamento Aprovado</span>
              <Switch
                onCheckedChange={(checked) =>
                  setSelectedStatus(checked ? "Pago" : "")
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Pendente</span>
              <Switch
                onCheckedChange={(checked) =>
                  setSelectedStatus(checked ? "Pendente" : "")
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Cancelado</span>
              <Switch
                onCheckedChange={(checked) =>
                  setSelectedStatus(checked ? "Cancelado" : "")
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Reembolso</span>
              <Switch
                onCheckedChange={(checked) =>
                  setSelectedStatus(checked ? "Reembolso" : "")
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Chargeback</span>
              <Switch
                onCheckedChange={(checked) =>
                  setSelectedStatus(checked ? "Chargeback" : "")
                }
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FiltroPedidos;
