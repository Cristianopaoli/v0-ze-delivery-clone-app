"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { LogOut, HelpCircle, FileText, Shield, Info, ChevronRight, AlertTriangle } from "lucide-react"
import { AppVersion } from "@/components/app-version"
import Link from "next/link"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function SettingsForm() {
  // Estado para as configurações
  const [notificationSettings, setNotificationSettings] = useState({
    pushEnabled: true,
    orderUpdates: true,
    promotions: false,
    emailMarketing: true,
  })

  const [privacySettings, setPrivacySettings] = useState({
    locationTracking: true,
    dataSharing: false,
    analytics: true,
  })

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "light",
    language: "pt-PT",
  })

  // Handlers para alterações de configuração
  const handleNotificationChange = (key: keyof typeof notificationSettings, value: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [key]: value }))
    toast({
      title: "Configuração atualizada",
      description: "As suas preferências de notificação foram atualizadas.",
    })
  }

  const handlePrivacyChange = (key: keyof typeof privacySettings, value: boolean) => {
    setPrivacySettings((prev) => ({ ...prev, [key]: value }))
    toast({
      title: "Configuração atualizada",
      description: "As suas preferências de privacidade foram atualizadas.",
    })
  }

  const handleAppearanceChange = (key: keyof typeof appearanceSettings, value: string) => {
    setAppearanceSettings((prev) => ({ ...prev, [key]: value }))
    toast({
      title: "Configuração atualizada",
      description: "As suas preferências de aparência foram atualizadas.",
    })
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="privacy">Privacidade</TabsTrigger>
          <TabsTrigger value="appearance">Aparência</TabsTrigger>
        </TabsList>

        {/* Aba de Notificações */}
        <TabsContent value="notifications">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications" className="font-medium">
                      Notificações push
                    </Label>
                    <p className="text-sm text-gray-500">Receber notificações push no seu dispositivo</p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notificationSettings.pushEnabled}
                    onCheckedChange={(checked) => handleNotificationChange("pushEnabled", checked)}
                  />
                </div>

                <div className="pl-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="order-updates" className="text-sm">
                      Atualizações de pedidos
                    </Label>
                    <Switch
                      id="order-updates"
                      checked={notificationSettings.orderUpdates}
                      onCheckedChange={(checked) => handleNotificationChange("orderUpdates", checked)}
                      disabled={!notificationSettings.pushEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="promotions" className="text-sm">
                      Promoções e ofertas
                    </Label>
                    <Switch
                      id="promotions"
                      checked={notificationSettings.promotions}
                      onCheckedChange={(checked) => handleNotificationChange("promotions", checked)}
                      disabled={!notificationSettings.pushEnabled}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-marketing" className="font-medium">
                        Email marketing
                      </Label>
                      <p className="text-sm text-gray-500">Receber emails sobre promoções e novidades</p>
                    </div>
                    <Switch
                      id="email-marketing"
                      checked={notificationSettings.emailMarketing}
                      onCheckedChange={(checked) => handleNotificationChange("emailMarketing", checked)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Privacidade */}
        <TabsContent value="privacy">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="location-tracking" className="font-medium">
                      Rastreamento de localização
                    </Label>
                    <p className="text-sm text-gray-500">Permitir acesso à sua localização para entregas</p>
                  </div>
                  <Switch
                    id="location-tracking"
                    checked={privacySettings.locationTracking}
                    onCheckedChange={(checked) => handlePrivacyChange("locationTracking", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="data-sharing" className="font-medium">
                      Compartilhamento de dados
                    </Label>
                    <p className="text-sm text-gray-500">Compartilhar dados com parceiros para melhorar serviços</p>
                  </div>
                  <Switch
                    id="data-sharing"
                    checked={privacySettings.dataSharing}
                    onCheckedChange={(checked) => handlePrivacyChange("dataSharing", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="analytics" className="font-medium">
                      Coleta de análises
                    </Label>
                    <p className="text-sm text-gray-500">Permitir coleta de dados de uso para melhorar a aplicação</p>
                  </div>
                  <Switch
                    id="analytics"
                    checked={privacySettings.analytics}
                    onCheckedChange={(checked) => handlePrivacyChange("analytics", checked)}
                  />
                </div>

                <div className="pt-4 border-t">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="w-full">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Excluir minha conta
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados
                          dos nossos servidores.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                          Sim, excluir minha conta
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Aparência */}
        <TabsContent value="appearance">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme" className="font-medium">
                    Tema
                  </Label>
                  <Select
                    value={appearanceSettings.theme}
                    onValueChange={(value) => handleAppearanceChange("theme", value)}
                  >
                    <SelectTrigger id="theme">
                      <SelectValue placeholder="Selecione um tema" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Claro</SelectItem>
                      <SelectItem value="dark">Escuro</SelectItem>
                      <SelectItem value="system">Sistema</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language" className="font-medium">
                    Idioma
                  </Label>
                  <Select
                    value={appearanceSettings.language}
                    onValueChange={(value) => handleAppearanceChange("language", value)}
                  >
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Selecione um idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-PT">Português (Portugal)</SelectItem>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Seção Sobre */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-medium mb-3">Sobre</h3>
          <div className="space-y-1">
            <Link href="/help" className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-md px-1">
              <div className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-3 text-gray-500" />
                <span>Ajuda e suporte</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>

            <Link href="/terms" className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-md px-1">
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-3 text-gray-500" />
                <span>Termos e condições</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>

            <Link href="/privacy" className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-md px-1">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-3 text-gray-500" />
                <span>Política de privacidade</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>

            <Link href="/about" className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-md px-1">
              <div className="flex items-center">
                <Info className="h-5 w-5 mr-3 text-gray-500" />
                <span>Sobre o Manu Delivery</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="outline"
        className="w-full flex items-center justify-center text-red-500 hover:text-red-600 hover:bg-red-50"
      >
        <LogOut className="h-5 w-5 mr-2" />
        Terminar sessão
      </Button>

      <AppVersion />
      <Toaster />
    </div>
  )
}
