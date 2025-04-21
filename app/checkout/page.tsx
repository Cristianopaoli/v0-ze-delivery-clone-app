import Link from "next/link"
import { ChevronLeft, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  // This would normally come from a cart state or database
  const subtotal = 12.97
  const deliveryFee = 2.99
  const total = subtotal + deliveryFee

  return (
    <div className="container pb-32">
      <header className="sticky top-0 z-10 bg-white py-4 border-b">
        <div className="flex items-center">
          <Link href="/cart" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-medium">Mr. Mush - Checkout</h1>
        </div>
      </header>

      <main className="mt-4">
        <div className="space-y-6">
          <div className="p-4 bg-white rounded-lg border">
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

          <div className="p-4 bg-white rounded-lg border">
            <h3 className="font-medium mb-4">Payment Method</h3>
            <RadioGroup defaultValue="card">
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Credit/Debit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  Cash on Delivery
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="p-4 bg-white rounded-lg border">
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

          <div className="p-4 bg-white rounded-lg border">
            <h3 className="font-medium mb-4">Delivery Time</h3>
            <RadioGroup defaultValue="asap">
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="asap" id="asap" />
                <Label htmlFor="asap">As soon as possible (30-45 min)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="scheduled" id="scheduled" />
                <Label htmlFor="scheduled">Schedule for later</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Total</span>
          <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </div>
        <Link href="/order-confirmation">
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">Place Order</Button>
        </Link>
      </div>
    </div>
  )
}
