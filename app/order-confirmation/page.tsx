import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { OrderTracker } from "@/components/order-tracker"

export default function OrderConfirmationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
        <div className="bg-white rounded-lg p-6 shadow-sm w-full max-w-md">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Pedido confirmado!</h1>
          <p className="text-gray-600 mb-6">O seu pedido #12345 foi recebido e está a ser preparado.</p>

          <OrderTracker />

          <div className="mt-8 space-y-4">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
              <Link href="/order-status">Acompanhar pedido</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/home">Voltar para a loja</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
