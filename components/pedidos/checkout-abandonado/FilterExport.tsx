"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ListFilter, File, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { Separator } from "@/components/ui/separator"; // Importando o separador
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Importando componentes do Select

export function FilterExport() {
  const [date, setDate] = React.useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="flex gap-2 items-center w-full">
      {/* Barra de pesquisa maior */}
      <div className="relative w-full max-w-xl">
        <Input
          type="text"
          placeholder="Pesquisar Carinhos..."
          className="pl-10 w-full"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
      </div>

      {/* Alinhando botões à direita */}
      <div className="ml-auto flex gap-2">
        {/* Botão para abrir o Sheet - mantém tamanho original */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <ListFilter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Filtrar Checkouts</SheetTitle>
              <SheetDescription>Escolha os filtros abaixo para refinar sua lista de checkouts.</SheetDescription>
            </SheetHeader>

            {/* Date Picker sem customização */}
            <div className="mt-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                {/* PopoverContent e Calendar sem estilos adicionais */}
                <PopoverContent side="left" align="start">
                  <Calendar
                    mode="range"
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    defaultMonth={date.from}
                  />
                </PopoverContent>
              </Popover>
            </div>

           

            {/* Separador e título para a seção de Produto */}
            <Separator className="my-6" />
            <h3 className="text-lg font-semibold">Produto</h3>

            {/* Filtro de Produto com Select */}
            <div className="mt-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o produto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="lamp">Glimmer Lamps</SelectItem>
                    <SelectItem value="filter">Aqua Filters</SelectItem>
                    <SelectItem value="other">Outro Produto</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>


           
          </SheetContent>
        </Sheet>

        {/* Botão de Exportar - mantém tamanho original */}
        <Button variant="outline">
          <File className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>
    </div>
  );
}
