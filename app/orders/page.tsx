import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OrderList } from "@/components/order-list"
import { OrderHistory } from "@/components/order-history"

export default function OrdersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-16">
      <div className="bg-white p-4 sticky top-0 z-10 shadow-sm">
        <h1 className="text-lg font-bold">Meus pedidos</h1>
      </div>

      <div className="flex-1 p-4">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="active">Em andamento</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <OrderList />
          </TabsContent>
          <TabsContent value="history">
            <OrderHistory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
