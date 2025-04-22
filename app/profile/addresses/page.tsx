import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { AddressList } from "@/components/address-list"

export default function AddressesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">Endereços</h1>
      </div>

      <div className="flex-1 p-4">
        <AddressList />
      </div>
    </div>
  )
}
