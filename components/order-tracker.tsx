"use client"

import { useState, useEffect } from "react"

export function OrderTracker() {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    { id: 1, name: "Confirmado" },
    { id: 2, name: "Em preparação" },
    { id: 3, name: "A caminho" },
    { id: 4, name: "Entregue" },
  ]

  useEffect(() => {
    // Simulação do progresso do pedido
    const timer = setTimeout(() => {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentStep, steps.length])

  return (
    <div className="w-full">
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500 transition-all duration-500"
          ></div>
        </div>
        <div className="flex justify-between">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col items-center ${step.id <= currentStep ? "text-yellow-500" : "text-gray-400"}`}
            >
              <div
                className={`rounded-full h-6 w-6 flex items-center justify-center mb-1 ${
                  step.id <= currentStep ? "bg-yellow-500 text-white" : "bg-gray-200"
                }`}
              >
                {step.id}
              </div>
              <div className="text-xs">{step.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
