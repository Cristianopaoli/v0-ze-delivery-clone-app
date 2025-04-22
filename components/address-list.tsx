"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Plus, Pencil, Trash2 } from "lucide-react"
import { AddressForm } from "@/components/address-form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type Address = {
  id: string
  title: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  postalCode: string
  isDefault: boolean
}

export function AddressList() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      title: "Casa",
      street: "Av. da Liberdade",
      number: "10",
      complement: "Apartamento 5A",
      neighborhood: "Centro",
      city: "Lisboa",
      postalCode: "1250-096",
      isDefault: true,
    },
    {
      id: "2",
      title: "Trabalho",
      street: "Rua Augusta",
      number: "25",
      complement: "Loja 3",
      neighborhood: "Baixa",
      city: "Lisboa",
      postalCode: "1100-053",
      isDefault: false,
    },
  ])

  const [addressToDelete, setAddressToDelete] = useState<string | null>(null)
  const [addressToEdit, setAddressToEdit] = useState<Address | null>(null)
  const [showAddAddress, setShowAddAddress] = useState(false)

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      })),
    )
  }

  const handleDeleteAddress = () => {
    if (addressToDelete) {
      setAddresses(addresses.filter((address) => address.id !== addressToDelete))
      setAddressToDelete(null)
    }
  }

  const handleAddAddress = (newAddress: Omit<Address, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setAddresses([...addresses, { ...newAddress, id }])
    setShowAddAddress(false)
  }

  const handleEditAddress = (updatedAddress: Address) => {
    setAddresses(addresses.map((address) => (address.id === updatedAddress.id ? updatedAddress : address)))
    setAddressToEdit(null)
  }

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <Card key={address.id} className="p-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-medium">{address.title}</h3>
                {address.isDefault && (
                  <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                    Predefinido
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {address.street}, {address.number}
                {address.complement && `, ${address.complement}`}
              </p>
              <p className="text-sm text-gray-600">
                {address.neighborhood}, {address.city}
              </p>
              <p className="text-sm text-gray-600">{address.postalCode}</p>

              <div className="flex mt-3 space-x-3">
                <Sheet open={addressToEdit?.id === address.id} onOpenChange={(open) => !open && setAddressToEdit(null)}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-600"
                      onClick={() => setAddressToEdit(address)}
                    >
                      <Pencil className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Editar endereço</SheetTitle>
                    </SheetHeader>
                    {addressToEdit && <AddressForm address={addressToEdit} onSubmit={handleEditAddress} />}
                  </SheetContent>
                </Sheet>

                <AlertDialog
                  open={addressToDelete === address.id}
                  onOpenChange={(open) => !open && setAddressToDelete(null)}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => setAddressToDelete(address.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remover
                  </Button>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Remover endereço</AlertDialogTitle>
                      <AlertDialogDescription>
                        Tem certeza que deseja remover este endereço? Esta ação não pode ser desfeita.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteAddress} className="bg-red-500 hover:bg-red-600">
                        Remover
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {!address.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                    onClick={() => handleSetDefault(address.id)}
                  >
                    Definir como padrão
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}

      <Sheet open={showAddAddress} onOpenChange={setShowAddAddress}>
        <SheetTrigger asChild>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar novo endereço
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Adicionar endereço</SheetTitle>
          </SheetHeader>
          <AddressForm
            onSubmit={(address) => handleAddAddress(address)}
            address={{
              id: "",
              title: "",
              street: "",
              number: "",
              complement: "",
              neighborhood: "",
              city: "",
              postalCode: "",
              isDefault: false,
            }}
          />
        </SheetContent>
      </Sheet>
    </div>
  )
}
