import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  discount?: number
}

export function ProductCard({ id, name, price, image, discount }: ProductCardProps) {
  const discountedPrice = discount ? price - (price * discount) / 100 : price

  return (
    <Card className="overflow-hidden">
      <Link href={`/product/${id}`}>
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-32 object-cover" />
          {discount && (
            <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
              {discount}% OFF
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-3">
        <Link href={`/product/${id}`}>
          <h3 className="font-medium text-sm line-clamp-2">{name}</h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex flex-col">
                <span className="text-xs line-through text-gray-400">${price.toFixed(2)}</span>
                <span className="font-bold text-pink-600">${discountedPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-pink-600">${price.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
