"use client"

import { useState } from "react"
import { CreditCard, Banknote, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function PaymentOptions() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [showAddCard, setShowAddCard] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Método de pagamento</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex-1 flex items-center cursor-pointer">
              <CreditCard className="h-5 w-5 mr-2" />
              <span>Cartão de crédito</span>
            </Label>
            <Sheet open={showAddCard} onOpenChange={setShowAddCard}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Adicionar cartão</SheetTitle>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Número do cartão</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Validade</Label>
                      <Input id="expiry" placeholder="MM/AA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome no cartão</Label>
                    <Input id="name" placeholder="NOME COMPLETO" />
                  </div>
                  <Button
                    className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black"
                    onClick={() => setShowAddCard(false)}
                  >
                    Adicionar cartão
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash" className="flex-1 flex items-center cursor-pointer">
              <Banknote className="h-5 w-5 mr-2" />
              <span>Dinheiro</span>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
