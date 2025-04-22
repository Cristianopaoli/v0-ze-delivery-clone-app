"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle, XCircle, ChevronRight } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { pt } from "date-fns/locale"

type OrderStatus = "delivered" | "cancelled"

type HistoricalOrder = {
  id: string
  orderNumber: string
  date: Date
  status: OrderStatus
  items: { name: string; quantity: number }[]
  total: number
}

export function OrderHistory() {
  const [orders, setOrders] = useState<HistoricalOrder[]>([
    {
      id: "3",
      orderNumber: "12344",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      status: "delivered",
      items: [
        { name: "Super Bock Original", quantity: 12 },
        { name: "Doritos", quantity: 2 },
      ],
      total: 22.86,
    },
    {
      id: "4",
      orderNumber: "12343",
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      status: "delivered",
      items: [
        { name: "Heineken", quantity: 6 },
        { name: "Amendoins", quantity: 1 },
      ],
      total: 12.13,
    },
    {
      id: "5",
      orderNumber: "12342",
      date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
      status: "cancelled",
      items: [
        { name: "Sagres", quantity: 6 },
        { name: "Água Luso", quantity: 2 },
      ],
      total: 10.32,
    },
  ])

  const getStatusInfo = (status: OrderStatus) => {
    switch (status) {
      case "delivered":
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          text: "Entregue",
        }
      case "cancelled":
        return {
          icon: <XCircle className="h-5 w-5 text-red-500" />,
          text: "Cancelado",
        }
    }
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="h-16 w-16 text-gray-300 mb-4" />
        <h2 className="text-xl font-bold">Nenhum pedido anterior</h2>
        <p className="text-gray-500 mt-2">O histórico dos seus pedidos aparecerá aqui</p>
        <Link
          href="/home"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1"
        >
          Fazer um pedido
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => {
        const statusInfo = getStatusInfo(order.status)
        return (
          <Link href={`/orders/${order.id}`} key={order.id}>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium">Pedido #{order.orderNumber}</h3>
                  <p className="text-sm text-gray-500">{format(order.date, "dd/MM/yyyy", { locale: pt })}</p>
                </div>
                <div className="flex items-center">
                  {statusInfo.icon}
                  <span className="text-sm font-medium ml-1">{statusInfo.text}</span>
                </div>
              </div>

              <div className="border-t border-b py-2 my-2">
                <p className="text-sm text-gray-600">
                  {order.items.map((item, index) => (
                    <span key={index}>
                      {item.quantity}x {item.name}
                      {index < order.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <p className="font-bold">€{order.total.toFixed(2)}</p>
                <div className="flex items-center text-yellow-600">
                  <span className="text-sm">Ver detalhes</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
