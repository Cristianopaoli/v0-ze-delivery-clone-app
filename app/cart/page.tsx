import { CartItems } from "@/components/cart-items"
import { CheckoutBar } from "@/components/checkout-bar"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <Link href="/home">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">Carrinho</h1>
      </div>

      <CartItems />
      <CheckoutBar />
    </div>
  )
}
