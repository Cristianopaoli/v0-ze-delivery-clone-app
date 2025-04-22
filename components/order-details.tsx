"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Clock, CheckCircle, MapPin, Phone, MessageCircle, XCircle } from "lucide-react"
import Image from "next/image"
import { format } from "date-fns"
import { pt } from "date-fns/locale"
import { OrderTracker } from "@/components/order-tracker"
import { DeliveryMap } from "@/components/delivery-map"

type OrderStatus = "preparing" | "shipping" | "delivered" | "cancelled"

type OrderItem = {
  id: string
  name: string
  quantity: number
  price: number
  image: string
}

type Order = {
  id: string
  orderNumber: string
  date: Date
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  deliveryFee: number
  total: number
  address: {
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    postalCode: string
  }
  paymentMethod: {
    type: "card" | "cash" | "mbway"
    details?: string
  }
  deliveryPerson?: {
    name: string
    phone: string
    image: string
  }
}

interface OrderDetailsProps {
  orderId: string
}

export function OrderDetails({ orderId }: OrderDetailsProps) {
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulação de carregamento de dados
    setTimeout(() => {
      // Dados fictícios baseados no ID
      const mockOrders: Record<string, Order> = {
        "1": {
          id: "1",
          orderNumber: "12345",
          date: new Date(),
          status: "preparing",
          items: [
            {
              id: "1",
              name: "Super Bock Original",
              quantity: 2,
              price: 1.49,
              image: "/placeholder.svg?height=60&width=60",
            },
            {
              id: "4",
              name: "Somersby Maçã",
              quantity: 1,
              price: 1.99,
              image: "/placeholder.svg?height=60&width=60",
            },
          ],
          subtotal: 4.97,
          deliveryFee: 2.5,
          total: 7.47,
          address: {
            street: "Av. da Liberdade",
            number: "10",
            complement: "Apartamento 5A",
            neighborhood: "Centro",
            city: "Lisboa",
            postalCode: "1250-096",
          },
          paymentMethod: {
            type: "card",
            details: "Visa •••• 1234",
          },
        },
        "2": {
          id: "2",
          orderNumber: "12346",
          date: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
          status: "shipping",
          items: [
            {
              id: "2",
              name: "Sagres",
              quantity: 6,
              price: 1.39,
              image: "/placeholder.svg?height=60&width=60",
            },
            {
              id: "5",
              name: "Água Luso",
              quantity: 2,
              price: 0.89,
              image: "/placeholder.svg?height=60&width=60",
            },
          ],
          subtotal: 10.12,
          deliveryFee: 2.5,
          total: 12.62,
          address: {
            street: "Rua Augusta",
            number: "25",
            complement: "Loja 3",
            neighborhood: "Baixa",
            city: "Lisboa",
            postalCode: "1100-053",
          },
          paymentMethod: {
            type: "mbway",
          },
          deliveryPerson: {
            name: "João Silva",
            phone: "912 345 678",
            image: "/placeholder.svg?height=60&width=60",
          },
        },
        "3": {
          id: "3",
          orderNumber: "12344",
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          status: "delivered",
          items: [
            {
              id: "1",
              name: "Super Bock Original",
              quantity: 12,
              price: 1.49,
              image: "/placeholder.svg?height=60&width=60",
            },
            {
              id: "6",
              name: "Doritos",
              quantity: 2,
              price: 2.99,
              image: "/placeholder.svg?height=60&width=60",
            },
          ],
          subtotal: 23.86,
          deliveryFee: 0, // Entrega grátis
          total: 23.86,
          address: {
            street: "Av. da Liberdade",
            number: "10",
            complement: "Apartamento 5A",
            neighborhood: "Centro",
            city: "Lisboa",
            postalCode: "1250-096",
          },
          paymentMethod: {
            type: "cash",
          },
        },
        "5": {
          id: "5",
          orderNumber: "12342",
          date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
          status: "cancelled",
          items: [
            {
              id: "2",
              name: "Sagres",
              quantity: 6,
              price: 1.39,
              image: "/placeholder.svg?height=60&width=60",
            },
            {
              id: "5",
              name: "Água Luso",
              quantity: 2,
              price: 0.89,
              image: "/placeholder.svg?height=60&width=60",
            },
          ],
          subtotal: 10.12,
          deliveryFee: 2.5,
          total: 12.62,
          address: {
            street: "Rua Augusta",
            number: "25",
            complement: "Loja 3",
            neighborhood: "Baixa",
            city: "Lisboa",
            postalCode: "1100-053",
          },
          paymentMethod: {
            type: "card",
            details: "Mastercard •••• 5678",
          },
        },
      }

      setOrder(mockOrders[orderId] || mockOrders["1"])
      setLoading(false)
    }, 500)
  }, [orderId])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <XCircle className="h-16 w-16 text-red-500 mb-4" />
        <h2 className="text-xl font-bold">Pedido não encontrado</h2>
        <p className="text-gray-500 mt-2">Não foi possível encontrar os detalhes deste pedido</p>
      </div>
    )
  }

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case "preparing":
        return <Package className="h-5 w-5 text-yellow-500" />
      case "shipping":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "cancelled":
        return <XCircle className="h-5 w-5 text-red-500" />
    }
  }

  const getStatusText = (status: OrderStatus) => {
    switch (status) {
      case "preparing":
        return "Em preparação"
      case "shipping":
        return "A caminho"
      case "delivered":
        return "Entregue"
      case "cancelled":
        return "Cancelado"
    }
  }

  const getPaymentMethodText = (type: "card" | "cash" | "mbway", details?: string) => {
    switch (type) {
      case "card":
        return `Cartão de crédito${details ? ` (${details})` : ""}`
      case "cash":
        return "Dinheiro"
      case "mbway":
        return "MB Way"
    }
  }

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {getStatusIcon(order.status)}
            <span className="font-medium ml-2">{getStatusText(order.status)}</span>
          </div>
          <span className="text-sm text-gray-500">{format(order.date, "dd/MM/yyyy 'às' HH:mm", { locale: pt })}</span>
        </div>

        {(order.status === "preparing" || order.status === "shipping") && (
          <OrderTracker currentStep={order.status === "preparing" ? 2 : 3} />
        )}

        {order.status === "shipping" && (
          <>
            <DeliveryMap />

            <div className="mt-4 border-t pt-4">
              <h3 className="font-medium mb-3">Estafeta</h3>
              {order.deliveryPerson && (
                <div className="flex items-center">
                  <Image
                    src={order.deliveryPerson.image || "/placeholder.svg"}
                    alt={order.deliveryPerson.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{order.deliveryPerson.name}</h4>
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
              )}
            </div>
          </>
        )}
      </Card>

      <Card className="p-4">
        <h3 className="font-medium mb-3">Produtos</h3>
        <div className="space-y-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} width={40} height={40} className="mr-3" />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  €{item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <p className="font-medium">€{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="border-t mt-4 pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>€{order.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Taxa de entrega</span>
            <span>{order.deliveryFee > 0 ? `€${order.deliveryFee.toFixed(2)}` : "Grátis"}</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t">
            <span>Total</span>
            <span>€{order.total.toFixed(2)}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-medium mb-3">Informações de entrega</h3>
        <div className="flex items-start mb-4">
          <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
          <div>
            <p>
              {order.address.street}, {order.address.number}
              {order.address.complement && `, ${order.address.complement}`}
            </p>
            <p className="text-gray-600">
              {order.address.neighborhood}, {order.address.city}
            </p>
            <p className="text-gray-600">{order.address.postalCode}</p>
          </div>
        </div>

        <h3 className="font-medium mb-2">Método de pagamento</h3>
        <p>{getPaymentMethodText(order.paymentMethod.type, order.paymentMethod.details)}</p>
      </Card>

      {order.status === "delivered" && (
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Comprar novamente</Button>
      )}

      {order.status === "cancelled" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
          <XCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
          <h3 className="font-medium text-red-800">Pedido cancelado</h3>
          <p className="text-sm text-red-600 mt-1">Este pedido foi cancelado</p>
        </div>
      )}
    </div>
  )
}
