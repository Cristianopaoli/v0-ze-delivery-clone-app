import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-yellow-50 p-4">
      <div className="w-full max-w-md py-8">
        <div className="flex justify-center mb-8">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Manu Delivery Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        <h1 className="text-2xl font-bold text-center mb-8">Entrar no Manu Delivery</h1>

        <LoginForm />
      </div>
    </div>
  )
}
