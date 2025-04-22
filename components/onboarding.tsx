"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  const slides = [
    {
      title: "Bem-vindo ao Manu Delivery",
      description: "A forma mais fácil de receber bebidas geladas em sua casa",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Entrega rápida",
      description: "Receba as suas bebidas em menos de 30 minutos",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Variedade de produtos",
      description: "Cervejas, vinhos, destilados e muito mais",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      router.push("/login")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8 bg-yellow-50">
      <div className="w-full max-w-md flex flex-col items-center">
        <Image
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Onboarding"
          width={300}
          height={300}
          className="mb-8"
        />

        <h1 className="text-2xl font-bold text-center mb-2">{slides[currentSlide].title}</h1>

        <p className="text-center text-gray-600 mb-8">{slides[currentSlide].description}</p>

        <div className="flex gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full ${index === currentSlide ? "w-8 bg-yellow-500" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>

        <Button onClick={handleNext} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
          {currentSlide < slides.length - 1 ? "Próximo" : "Começar"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
