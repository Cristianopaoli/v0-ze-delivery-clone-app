import Link from "next/link"
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// This would normally come from a cart state or database
const cartItems = [
  {
    id: "1",
    name: "Brahma Duplo Malte",
    price: 4.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 2,
    discount: 10,
  },
  {
    id: "2",
    name: "Skol Pilsen",
    price: 3.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount ? item.price - (item.price * (item.discount || 0)) / 100 : item.price
    return total + itemPrice * item.quantity
  }, 0)

  const deliveryFee = 2.99
  const total = subtotal + deliveryFee

  return (
    <div className="container pb-32">
      <header className="sticky top-0 z-10 bg-white py-4 border-b">
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-medium">Mr. Mush - Your Cart</h1>
        </div>
      </header>

      <main className="mt-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some products to your cart</p>
            <Link href="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="space-y-4">
              {cartItems.map((item) => {
                const discountedPrice = item.discount
                  ? item.price - (item.price * (item.discount || 0)) / 100
                  : item.price

                return (
                  <div key={item.id} className="flex gap-4 p-4 bg-white rounded-lg border">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-contain" />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="mt-1">
                        {item.discount ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs line-through text-gray-400">${item.price.toFixed(2)}</span>
                            <span className="font-bold text-pink-600">${discountedPrice.toFixed(2)}</span>
                          </div>
                        ) : (
                          <span className="font-bold text-pink-600">${item.price.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" className="h-7 w-7 rounded-full">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-7 w-7 rounded-full">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border">
              <h3 className="font-medium mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium text-base">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border">
              <h3 className="font-medium mb-4">Delivery Address</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Home</p>
                  <p className="text-sm text-gray-600">123 Main St, Apt 4B</p>
                  <p className="text-sm text-gray-600">New York, NY 10001</p>
                </div>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Total</span>
            <span className="font-bold text-lg">${total.toFixed(2)}</span>
          </div>
          <Link href="/checkout">
            <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">Proceed to Checkout</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
