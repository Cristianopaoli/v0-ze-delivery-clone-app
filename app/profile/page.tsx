import { Button } from "@/components/ui/button"
import { ChevronLeft, User, Settings, CreditCard, MapPin, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <Link href="/home">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">Perfil</h1>
      </div>

      <div className="flex-1 p-4 space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Perfil"
            width={80}
            height={80}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold text-lg">Ana Oliveira</h2>
            <p className="text-gray-500">ana.oliveira@email.com</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <Link href="/profile/personal-info" className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-3 text-gray-500" />
              <span>Informações pessoais</span>
            </div>
            <ChevronLeft className="h-5 w-5 transform rotate-180" />
          </Link>

          <Link href="/profile/addresses" className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-gray-500" />
              <span>Endereços</span>
            </div>
            <ChevronLeft className="h-5 w-5 transform rotate-180" />
          </Link>

          <Link href="/profile/payment" className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 mr-3 text-gray-500" />
              <span>Métodos de pagamento</span>
            </div>
            <ChevronLeft className="h-5 w-5 transform rotate-180" />
          </Link>

          <Link href="/profile/settings" className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Settings className="h-5 w-5 mr-3 text-gray-500" />
              <span>Configurações</span>
            </div>
            <ChevronLeft className="h-5 w-5 transform rotate-180" />
          </Link>
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Terminar sessão
        </Button>
      </div>
    </div>
  )
}
