"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Clock, Package, CheckCircle, ChevronRight } from "lucide-react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { pt } from "date-fns/locale"

type OrderStatus = "preparing" | "shipping" | "delivered"

type Order = {
  id: string
  orderNumber: string
  date: Date
  status: OrderStatus
  items: { name: string; quantity: number }[]
  total: number
}

export function OrderList() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "1",
      orderNumber: "12345",
      date: new Date(),
      status: "preparing",
      items: [
        { name: "Super Bock Original", quantity: 2 },
        { name: "Somersby Maçã", quantity: 1 },
      ],
      total: 7.47,
    },
    {
      id: "2",
      orderNumber: "12346",
      date: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      status: "shipping",
      items: [
        { name: "Sagres", quantity: 6 },
        { name: "Água Luso", quantity: 2 },
      ],
      total: 10.32,
    },
  ])

  const getStatusInfo = (status: OrderStatus) => {
    switch (status) {
      case "preparing":
        return {
          icon: <Package className="h-5 w-5 text-yellow-500" />,
          text: "Em preparação",
          description: "O seu pedido está a ser preparado",
        }
      case "shipping":
        return {
          icon: <Clock className="h-5 w-5 text-blue-500" />,
          text: "A caminho",
          description: "O seu pedido está a caminho",
        }
      case "delivered":
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          text: "Entregue",
          description: "O seu pedido foi entregue",
        }
    }
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Package className="h-16 w-16 text-gray-300 mb-4" />
        <h2 className="text-xl font-bold">Nenhum pedido em andamento</h2>
        <p className="text-gray-500 mt-2">Os seus pedidos em andamento aparecerão aqui</p>
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
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(order.date, { addSuffix: true, locale: pt })}
                  </p>
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
