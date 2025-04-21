import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { CategoryScroll } from "@/components/category-scroll"

export default function Home() {
  return (
    <div className="container pb-20">
      <header className="sticky top-0 z-10 bg-white py-4 border-b">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-pink-600">
            Mr. Mush Delivery
          </Link>
          <div className="flex items-center gap-4">
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
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for beers, water, soda..."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
      </header>

      <main className="mt-6">
        <section className="mb-8">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=200&width=800"
              alt="Promotion banner"
              className="w-full h-40 object-cover"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <CategoryScroll />
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Popular Items</h2>
          <div className="grid grid-cols-2 gap-4">
            <ProductCard
              id="1"
              name="Brahma Duplo Malte"
              price={4.99}
              image="/placeholder.svg?height=200&width=200"
              discount={10}
            />
            <ProductCard id="2" name="Skol Pilsen" price={3.99} image="/placeholder.svg?height=200&width=200" />
            <ProductCard id="3" name="Corona Extra" price={6.99} image="/placeholder.svg?height=200&width=200" />
            <ProductCard
              id="4"
              name="Heineken"
              price={7.49}
              image="/placeholder.svg?height=200&width=200"
              discount={15}
            />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Best Deals</h2>
          <div className="grid grid-cols-2 gap-4">
            <ProductCard
              id="5"
              name="Antarctica Original"
              price={3.49}
              image="/placeholder.svg?height=200&width=200"
              discount={20}
            />
            <ProductCard
              id="6"
              name="Budweiser"
              price={5.99}
              image="/placeholder.svg?height=200&width=200"
              discount={10}
            />
            <ProductCard
              id="7"
              name="Stella Artois"
              price={8.99}
              image="/placeholder.svg?height=200&width=200"
              discount={5}
            />
            <ProductCard
              id="8"
              name="Bohemia"
              price={4.49}
              image="/placeholder.svg?height=200&width=200"
              discount={15}
            />
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
        <div className="flex justify-around">
          <Link href="/" className="flex flex-col items-center text-pink-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/categories" className="flex flex-col items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-xs">Categories</span>
          </Link>
          <Link href="/orders" className="flex flex-col items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-xs">Orders</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
