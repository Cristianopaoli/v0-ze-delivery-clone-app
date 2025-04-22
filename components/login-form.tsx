"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/home")
    }, 1500)
  }

  return (
    <Tabs defaultValue="email" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="phone">Telemóvel</TabsTrigger>
      </TabsList>

      <TabsContent value="email">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" required />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password">Palavra-passe</Label>
              <Link href="/forgot-password" className="text-sm text-yellow-600 hover:underline">
                Esqueceu?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" disabled={isLoading}>
            {isLoading ? "A processar..." : "Entrar"}
          </Button>
        </form>
      </TabsContent>

      <TabsContent value="phone">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Número de telemóvel</Label>
            <Input id="phone" type="tel" placeholder="912 345 678" required />
          </div>

          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" disabled={isLoading}>
            {isLoading ? "A processar..." : "Receber código"}
          </Button>
        </form>
      </TabsContent>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link href="/register" className="text-yellow-600 hover:underline">
            Registar
          </Link>
        </p>
      </div>
    </Tabs>
  )
}
