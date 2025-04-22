"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import { useRouter } from "next/navigation"

export function ProductList() {
  const router = useRouter()
  const [cart, setCart] = useState<Record<string, number>>({})

  const products = [
    {
      id: "1",
      name: "Super Bock Original",
      description: "Cerveja Lager, 5.2% álc.",
      price: 1.49,
      image: "/placeholder.svg?height=120&width=120",
      pack: "Garrafa 33cl",
    },
    {
      id: "2",
      name: "Sagres",
      description: "Cerveja Lager, 5.0% álc.",
      price: 1.39,
      image: "/placeholder.svg?height=120&width=120",
      pack: "Garrafa 33cl",
    },
    {
      id: "3",
      name: "Heineken",
      description: "Cerveja Premium Lager, 5.0% álc.",
      price: 1.69,
      image: "/placeholder.svg?height=120&width=120",
      pack: "Garrafa 33cl",
    },
    {
      id: "4",
      name: "Somersby Maçã",
      description: "Sidra, 4.5% álc.",
      price: 1.99,
      image: "/placeholder.svg?height=120&width=120",
      pack: "Garrafa 33cl",
    },
    {
      id: "5",
      name: "Água Luso",
      description: "Água mineral natural",
      price: 0.89,
      image: "/placeholder.svg?height=120&width=120",
      pack: "Garrafa 50cl",
    },
  ]

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[productId] > 1) {
        newCart[productId] -= 1
      } else {
        delete newCart[productId]
      }
      return newCart
    })
  }

  const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
  const totalPrice = products.reduce((sum, product) => {
    return sum + (cart[product.id] || 0) * product.price
  }, 0)

  return (
    <div className="flex-1 bg-gray-50 pb-20">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Mais Vendidos</h2>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-3 flex items-center shadow-sm">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={80}
                height={80}
                className="mr-3"
              />
              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-sm text-gray-500">{product.pack}</p>
                <p className="font-bold mt-1">€{product.price.toFixed(2)}</p>
              </div>
              <div>
                {cart[product.id] ? (
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-medium">{cart[product.id]}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-yellow-500 border-yellow-500 text-black hover:bg-yellow-600 hover:text-black"
                      onClick={() => addToCart(product.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-yellow-500 border-yellow-500 text-black hover:bg-yellow-600 hover:text-black"
                    onClick={() => addToCart(product.id)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalItems > 0 && (
        <div
          className="fixed bottom-16 left-0 right-0 bg-yellow-500 p-3 flex justify-between items-center cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <div className="flex items-center">
            <div className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-2">
              {totalItems}
            </div>
            <span className="font-medium text-black">Ver carrinho</span>
          </div>
          <span className="font-bold text-black">€{totalPrice.toFixed(2)}</span>
        </div>
      )}
    </div>
  )
}
