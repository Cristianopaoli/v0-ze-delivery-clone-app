import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function OrderConfirmationPage() {
  return (
    <div className="container py-8">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">Your order has been placed successfully. We'll deliver your items soon.</p>

        <div className="bg-white p-4 rounded-lg border mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Order #</span>
            <span>MM12345678</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Date</span>
            <span>April 11, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Estimated Delivery</span>
            <span>30-45 minutes</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border mb-6">
          <h3 className="font-medium mb-3">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span>2x</span>
                <span>Brahma Duplo Malte</span>
              </div>
              <span>$8.98</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span>1x</span>
                <span>Skol Pilsen</span>
              </div>
              <span>$3.99</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>$12.97</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>$15.96</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link href="/orders">
            <Button variant="outline" className="w-full">
              Track Order
            </Button>
          </Link>
          <Link href="/">
            <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
