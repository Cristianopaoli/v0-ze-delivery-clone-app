import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"

// This would normally come from a database
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: "1",
      name: "Brahma Duplo Malte",
      price: 4.99,
      image: "/placeholder.svg?height=400&width=400",
      discount: 10,
      description: "A refreshing beer with a unique double malt flavor. Perfect for any occasion.",
      volume: "350ml",
      alcohol: "4.7%",
    },
  }

  return products[id as keyof typeof products]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  const discountedPrice = product.discount ? product.price - (product.price * product.discount) / 100 : product.price

  return (
    <div className="container pb-24">
      <header className="sticky top-0 z-10 bg-white py-4 border-b">
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-medium">Mr. Mush - Product Details</h1>
          <div className="ml-auto">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mt-4">
        <div className="relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-contain bg-white"
          />
          {product.discount && (
            <div className="absolute top-4 left-4 bg-pink-600 text-white px-2 py-1 rounded-full">
              {product.discount}% OFF
            </div>
          )}
        </div>

        <div className="mt-4 p-4">
          <h1 className="text-xl font-bold">{product.name}</h1>

          <div className="mt-2">
            {product.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-lg line-through text-gray-400">${product.price.toFixed(2)}</span>
                <span className="text-2xl font-bold text-pink-600">${discountedPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-pink-600">${product.price.toFixed(2)}</span>
            )}
          </div>

          <div className="mt-6">
            <h2 className="font-medium mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mt-4 flex gap-4">
            <div className="bg-gray-100 rounded-lg p-3 flex-1 text-center">
              <div className="text-sm text-gray-500">Volume</div>
              <div className="font-medium">{product.volume}</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 flex-1 text-center">
              <div className="text-sm text-gray-500">Alcohol</div>
              <div className="font-medium">{product.alcohol}</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-medium">Quantity</div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="font-medium">1</span>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
          Add to Cart - ${discountedPrice.toFixed(2)}
        </Button>
      </div>
    </div>
  )
}
