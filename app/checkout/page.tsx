import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { PaymentOptions } from "@/components/payment-options"
import { DeliveryInfo } from "@/components/delivery-info"
import { OrderSummary } from "@/components/order-summary"

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <Link href="/cart">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">Finalizar pedido</h1>
      </div>

      <div className="flex-1 p-4 space-y-4 pb-24">
        <DeliveryInfo />
        <PaymentOptions />
        <OrderSummary />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
          <Link href="/order-confirmation">Confirmar pedido • €7.47</Link>
        </Button>
      </div>
    </div>
  )
}
