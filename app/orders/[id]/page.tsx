import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { OrderDetails } from "@/components/order-details"

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <Link href="/orders">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">
          Pedido #{params.id === "1" ? "12345" : params.id === "2" ? "12346" : "12344"}
        </h1>
      </div>

      <div className="flex-1 p-4">
        <OrderDetails orderId={params.id} />
      </div>
    </div>
  )
}
