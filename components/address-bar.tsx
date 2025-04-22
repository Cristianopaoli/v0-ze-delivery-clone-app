"use client"

import { MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function AddressBar() {
  const [address, setAddress] = useState("Av. da Liberdade, 10")

  return (
    <div className="bg-yellow-500 p-3 sticky top-0 z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="w-full flex justify-between items-center text-black p-0 h-auto">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <div className="text-left">
                <p className="text-xs font-medium">Entregar em</p>
                <p className="text-sm font-semibold truncate max-w-[200px]">{address}</p>
              </div>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader>
            <SheetTitle>Selecione um endereço</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <Input placeholder="Pesquisar endereço" className="mb-4" />
            <div className="space-y-3">
              <AddressOption
                address="Av. da Liberdade, 10"
                detail="Apartamento 5A"
                isSelected={address === "Av. da Liberdade, 10"}
                onSelect={() => setAddress("Av. da Liberdade, 10")}
              />
              <AddressOption
                address="Rua Augusta, 25"
                detail="Loja 3"
                isSelected={address === "Rua Augusta, 25"}
                onSelect={() => setAddress("Rua Augusta, 25")}
              />
              <Button variant="outline" className="w-full justify-start mt-4">
                <MapPin className="mr-2 h-4 w-4" />
                Adicionar novo endereço
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function AddressOption({
  address,
  detail,
  isSelected,
  onSelect,
}: {
  address: string
  detail: string
  isSelected: boolean
  onSelect: () => void
}) {
  return (
    <div
      className={`p-3 rounded-lg border ${isSelected ? "border-yellow-500 bg-yellow-50" : "border-gray-200"}`}
      onClick={onSelect}
    >
      <div className="flex items-start">
        <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-medium">{address}</p>
          <p className="text-sm text-gray-500">{detail}</p>
        </div>
      </div>
    </div>
  )
}
