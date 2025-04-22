"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function CartItems() {
  // Normalmente, estes dados viriam de um contexto global ou de uma API
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Super Bock Original",
      price: 1.49,
      quantity: 2,
      image: "/placeholder.svg?height=120&width=120",
      pack: "Garrafa 33cl",
    },
    {
      id: "4",
      name: "Somersby Maçã",
      price: 1.99,
      quantity: 1,
      image: "/placeholder.svg?height=120&width=120",
      pack: "Garrafa 33cl",
    },
  ])

  const [itemToRemove, setItemToRemove] = useState<string | null>(null)

  const increaseQuantity = (id: string) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    setItemToRemove(null)
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-center">O seu carrinho está vazio</h2>
        <p className="text-gray-500 text-center mt-2">Adicione produtos para continuar</p>
        <Button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
          <Link href="/home">Explorar produtos</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex-1 p-4">
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-3 flex items-center shadow-sm">
            <Image src={item.image || "/placeholder.svg"} alt={item.name} width={60} height={60} className="mr-3" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.pack}</p>
              <p className="font-bold mt-1">€{item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-medium w-5 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-yellow-500 border-yellow-500 text-black hover:bg-yellow-600 hover:text-black"
                  onClick={() => increaseQuantity(item.id)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <AlertDialog open={itemToRemove === item.id} onOpenChange={(open) => !open && setItemToRemove(null)}>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-red-500 hover:text-red-700 hover:bg-red-50 p-0"
                    onClick={() => setItemToRemove(item.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remover
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remover item</AlertDialogTitle>
                    <AlertDialogDescription>
                      Tem certeza que deseja remover este item do carrinho?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeItem(item.id)} className="bg-red-500 hover:bg-red-600">
                      Remover
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-bold mb-4">Resumo do pedido</h3>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>€4.97</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Taxa de entrega</span>
            <span>€2.50</span>
          </div>
          <div className="flex justify-between font-bold mt-2 pt-2 border-t">
            <span>Total</span>
            <span>€7.47</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
