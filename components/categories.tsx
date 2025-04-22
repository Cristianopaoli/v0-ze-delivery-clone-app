"use client"

import { useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("Cervejas")

  const categories = [
    { id: "cervejas", name: "Cervejas", icon: "/placeholder.svg?height=40&width=40" },
    { id: "destilados", name: "Destilados", icon: "/placeholder.svg?height=40&width=40" },
    { id: "vinhos", name: "Vinhos", icon: "/placeholder.svg?height=40&width=40" },
    { id: "sem-alcool", name: "Sem Álcool", icon: "/placeholder.svg?height=40&width=40" },
    { id: "snacks", name: "Snacks", icon: "/placeholder.svg?height=40&width=40" },
    { id: "gelo", name: "Gelo", icon: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div className="bg-white py-3">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex px-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col items-center space-y-1 cursor-pointer min-w-[60px]`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div
                className={`p-1 rounded-full ${selectedCategory === category.name ? "bg-yellow-100 border-2 border-yellow-500" : "bg-gray-100"}`}
              >
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="text-xs font-medium">{category.name}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
