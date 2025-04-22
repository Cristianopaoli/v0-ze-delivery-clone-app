"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CreditCard, Plus, Trash2, CheckCircle2 } from "lucide-react"
import { CardForm } from "@/components/card-form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PaymentCard = {
  id: string
  cardNumber: string
  cardHolder: string
  expiryDate: string
  brand: "visa" | "mastercard" | "amex" | "other"
  isDefault: boolean
}

export function PaymentMethods() {
  const [cards, setCards] = useState<PaymentCard[]>([
    {
      id: "1",
      cardNumber: "•••• •••• •••• 1234",
      cardHolder: "ANA OLIVEIRA",
      expiryDate: "12/25",
      brand: "visa",
      isDefault: true,
    },
    {
      id: "2",
      cardNumber: "•••• •••• •••• 5678",
      cardHolder: "ANA OLIVEIRA",
      expiryDate: "09/24",
      brand: "mastercard",
      isDefault: false,
    },
  ])

  const [cardToDelete, setCardToDelete] = useState<string | null>(null)
  const [showAddCard, setShowAddCard] = useState(false)
  const [activeTab, setActiveTab] = useState("cards")

  const handleSetDefault = (id: string) => {
    setCards(
      cards.map((card) => ({
        ...card,
        isDefault: card.id === id,
      })),
    )
  }

  const handleDeleteCard = () => {
    if (cardToDelete) {
      setCards(cards.filter((card) => card.id !== cardToDelete))
      setCardToDelete(null)
    }
  }

  const handleAddCard = (newCard: Omit<PaymentCard, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setCards([...cards, { ...newCard, id }])
    setShowAddCard(false)
  }

  const getBrandIcon = (brand: string) => {
    switch (brand) {
      case "visa":
        return "💳 Visa"
      case "mastercard":
        return "💳 Mastercard"
      case "amex":
        return "💳 American Express"
      default:
        return "💳 Cartão"
    }
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="cards" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="cards">Cartões</TabsTrigger>
          <TabsTrigger value="other">Outros métodos</TabsTrigger>
        </TabsList>

        <TabsContent value="cards" className="space-y-4">
          {cards.map((card) => (
            <Card key={card.id} className="p-4">
              <div className="flex items-start">
                <CreditCard className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">{getBrandIcon(card.brand)}</h3>
                        {card.isDefault && (
                          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                            Predefinido
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{card.cardNumber}</p>
                      <p className="text-sm text-gray-600">
                        {card.cardHolder} • Expira em {card.expiryDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-3 space-x-3">
                    <AlertDialog
                      open={cardToDelete === card.id}
                      onOpenChange={(open) => !open && setCardToDelete(null)}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => setCardToDelete(card.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remover
                      </Button>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remover cartão</AlertDialogTitle>
                          <AlertDialogDescription>
                            Tem certeza que deseja remover este cartão? Esta ação não pode ser desfeita.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction onClick={handleDeleteCard} className="bg-red-500 hover:bg-red-600">
                            Remover
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    {!card.isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        onClick={() => handleSetDefault(card.id)}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Definir como padrão
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <Sheet open={showAddCard} onOpenChange={setShowAddCard}>
            <SheetTrigger asChild>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar novo cartão
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Adicionar cartão</SheetTitle>
              </SheetHeader>
              <CardForm onSubmit={handleAddCard} />
            </SheetContent>
          </Sheet>
        </TabsContent>

        <TabsContent value="other" className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg">💵</span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Dinheiro</h3>
                <p className="text-sm text-gray-600">Pague em dinheiro na entrega</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg">🏦</span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium">MB Way</h3>
                <p className="text-sm text-gray-600">Pague com MB Way na entrega</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 opacity-50">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg">🔄</span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Transferência bancária</h3>
                <p className="text-sm text-gray-600">Em breve</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
