"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function CheckoutBar() {
  const router = useRouter()

  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" onClick={() => router.push("/checkout")}>
        Finalizar pedido • €7.47
      </Button>
    </div>
  )
}
