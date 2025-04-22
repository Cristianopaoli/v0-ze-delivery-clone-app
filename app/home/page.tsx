import { ProductList } from "@/components/product-list"
import { Navbar } from "@/components/navbar"
import { AddressBar } from "@/components/address-bar"
import { Categories } from "@/components/categories"
import { SearchBar } from "@/components/search-bar"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AddressBar />
      <SearchBar />
      <Categories />
      <ProductList />
      <Navbar />
    </div>
  )
}
