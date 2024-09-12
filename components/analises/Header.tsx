"use client"

import * as React from "react"
import { FiFilter } from "react-icons/fi" // Importando ícone de filtro
import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/analises/DatePickerWithRange"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"

export const Header = () => {
  const [selectedProduct, setSelectedProduct] = React.useState("") // Estado para o filtro de produto

  return (
    <div className="flex items-center justify-end gap-4 py-4">
      {/* Date Range Picker */}
      <div className="flex items-center gap-4">
        <DatePickerWithRange />
      </div>

      {/* Ícone de Filtro dentro do Sheet */}
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <FiFilter className="h-5 w-5" /> {/* Ícone de Filtro */}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <h2 className="text-lg font-bold mb-4">Filtros</h2>
            
            {/* Filtro de Produto */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Produto</label>
              <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um produto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product1">Produto 1</SelectItem>
                  <SelectItem value="product2">Produto 2</SelectItem>
                  <SelectItem value="product3">Produto 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Botão para aplicar o filtro */}
            <Button onClick={() => alert(`Filtrando por produto: ${selectedProduct}`)}>
              Aplicar Filtros
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
