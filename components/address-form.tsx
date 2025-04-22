"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

type Address = {
  id: string
  title: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  postalCode: string
  isDefault: boolean
}

interface AddressFormProps {
  address: Address
  onSubmit: (address: Address) => void
}

export function AddressForm({ address, onSubmit }: AddressFormProps) {
  const [formData, setFormData] = useState<Address>(address)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isDefault: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de processamento
    setTimeout(() => {
      setIsLoading(false)
      onSubmit(formData)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="title">Nome do endereço</Label>
        <Input
          id="title"
          name="title"
          placeholder="Ex: Casa, Trabalho"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="postalCode">Código postal</Label>
        <Input
          id="postalCode"
          name="postalCode"
          placeholder="1000-000"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="street">Rua</Label>
        <Input
          id="street"
          name="street"
          placeholder="Nome da rua"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="number">Número</Label>
          <Input id="number" name="number" placeholder="123" value={formData.number} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="complement">Complemento</Label>
          <Input
            id="complement"
            name="complement"
            placeholder="Apto, Bloco, etc."
            value={formData.complement}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="neighborhood">Bairro</Label>
        <Input
          id="neighborhood"
          name="neighborhood"
          placeholder="Bairro"
          value={formData.neighborhood}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">Cidade</Label>
        <Input id="city" name="city" placeholder="Cidade" value={formData.city} onChange={handleChange} required />
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox id="isDefault" checked={formData.isDefault} onCheckedChange={handleCheckboxChange} />
        <Label htmlFor="isDefault" className="text-sm font-normal">
          Definir como endereço padrão
        </Label>
      </div>

      <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" disabled={isLoading}>
        {isLoading ? "A guardar..." : "Guardar endereço"}
      </Button>
    </form>
  )
}
