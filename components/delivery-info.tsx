"use client"

import { MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DeliveryInfo() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Informações de entrega</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Av. da Liberdade, 10</p>
              <p className="text-sm text-gray-500">Apartamento 5A</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-yellow-600">
            Alterar
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-start">
            <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Entrega em 30-45 min</p>
              <p className="text-sm text-gray-500">Hoje, 19:30 - 19:45</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-yellow-600">
            Alterar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
