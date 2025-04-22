export function OrderSummary() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="font-bold mb-4">Resumo do pedido</h3>

      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="flex">
            <span className="mr-2">2x</span>
            <span>Super Bock Original</span>
          </div>
          <span>€2.98</span>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <span className="mr-2">1x</span>
            <span>Somersby Maçã</span>
          </div>
          <span>€1.99</span>
        </div>

        <div className="border-t my-3"></div>

        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>€4.97</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Taxa de entrega</span>
          <span>€2.50</span>
        </div>
        <div className="flex justify-between font-bold mt-2 pt-2 border-t">
          <span>Total</span>
          <span>€7.47</span>
        </div>
      </div>
    </div>
  )
}
