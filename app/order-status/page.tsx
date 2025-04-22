import { Button } from "@/components/ui/button"
import { ChevronLeft, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { OrderTracker } from "@/components/order-tracker"
import { DeliveryMap } from "@/components/delivery-map"
import Image from "next/image"

export default function OrderStatusPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <Link href="/home">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">Pedido #12345</h1>
      </div>

      <div className="flex-1 p-4 space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="font-bold mb-4">Estado do pedido</h2>
          <OrderTracker />
        </div>

        <DeliveryMap />

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="font-bold mb-4">Estafeta</h2>
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Estafeta"
              width={60}
              height={60}
              className="rounded-full mr-3"
            />
            <div className="flex-1">
              <h3 className="font-medium">João Silva</h3>
              <p className="text-sm text-gray-500">Estafeta Manu Delivery</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="font-bold mb-4">Detalhes do pedido</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex">
                <span className="mr-2">2x</span>
                <span>Super Bock Original</span>
              </div>
              <span>€2.98</span>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <span className="mr-2">1x</span>
                <span>Somersby Maçã</span>
              </div>
              <span>€1.99</span>
            </div>

            <div className="border-t my-3"></div>

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
    </div>
  )
}
