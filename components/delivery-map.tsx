"use client"

import { useState, useEffect } from "react"

export function DeliveryMap() {
  const [eta, setEta] = useState(15)

  useEffect(() => {
    // Simulação da contagem regressiva
    const timer = setInterval(() => {
      setEta((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 60000) // Atualiza a cada minuto

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="h-48 bg-gray-200 relative">
        {/* Aqui seria renderizado um mapa real */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Mapa de entrega</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Tempo estimado</h3>
            <p className="text-sm text-gray-500">O seu pedido chegará em breve</p>
          </div>
          <div className="text-xl font-bold">{eta} min</div>
        </div>
      </div>
    </div>
  )
}
