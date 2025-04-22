"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type PaymentCard = {
  cardNumber: string
  cardHolder: string
  expiryDate: string
  brand: "visa" | "mastercard" | "amex" | "other"
  isDefault: boolean
}

interface CardFormProps {
  onSubmit: (card: PaymentCard) => void
}

export function CardForm({ onSubmit }: CardFormProps) {
  const [formData, setFormData] = useState<PaymentCard>({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    brand: "visa",
    isDefault: false,
  })
  const [cvv, setCvv] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "cardNumber") {
      // Format card number with spaces every 4 digits
      const formatted = value
        .replace(/\s/g, "")
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(\d{4})/g, "$1 ")
        .trim()

      setFormData((prev) => ({ ...prev, [name]: formatted }))
      return
    }

    if (name === "expiryDate") {
      // Format expiry date as MM/YY
      const formatted = value
        .replace(/\D/g, "")
        .slice(0, 4)
        .replace(/(\d{2})(\d{1,2})/, "$1/$2")

      setFormData((prev) => ({ ...prev, [name]: formatted }))
      return
    }

    if (name === "cardHolder") {
      // Convert to uppercase
      setFormData((prev) => ({ ...prev, [name]: value.toUpperCase() }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3)
    setCvv(value)
  }

  const handleBrandChange = (value: string) => {
    setFormData((prev) => ({ ...prev, brand: value as "visa" | "mastercard" | "amex" | "other" }))
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

      // Mascarar o número do cartão para exibição
      const maskedCardNumber = "•••• •••• •••• " + formData.cardNumber.slice(-4)

      onSubmit({
        ...formData,
        cardNumber: maskedCardNumber,
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Número do cartão</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardHolder">Nome no cartão</Label>
        <Input
          id="cardHolder"
          name="cardHolder"
          placeholder="NOME COMPLETO"
          value={formData.cardHolder}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Validade</Label>
          <Input
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/AA"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            name="cvv"
            placeholder="123"
            value={cvv}
            onChange={handleCvvChange}
            required
            type="password"
            maxLength={3}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="brand">Bandeira do cartão</Label>
        <Select value={formData.brand} onValueChange={handleBrandChange}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a bandeira" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="visa">Visa</SelectItem>
            <SelectItem value="mastercard">Mastercard</SelectItem>
            <SelectItem value="amex">American Express</SelectItem>
            <SelectItem value="other">Outra</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox id="isDefault" checked={formData.isDefault} onCheckedChange={handleCheckboxChange} />
        <Label htmlFor="isDefault" className="text-sm font-normal">
          Definir como método de pagamento padrão
        </Label>
      </div>

      <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" disabled={isLoading}>
        {isLoading ? "A guardar..." : "Guardar cartão"}
      </Button>
    </form>
  )
}
