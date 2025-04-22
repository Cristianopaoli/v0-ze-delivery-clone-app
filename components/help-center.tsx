"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  ShoppingBag,
  CreditCard,
  Truck,
  User,
  Settings,
  MessageSquare,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showLiveChat, setShowLiveChat] = useState(false)
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<{ type: "user" | "agent"; text: string }[]>([
    { type: "agent", text: "Olá! Sou o assistente virtual do Manu Delivery. Como posso ajudar?" },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      toast({
        title: "Pesquisa realizada",
        description: `A pesquisar por "${searchQuery}"`,
      })
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Adicionar mensagem do usuário
      setChatMessages((prev) => [...prev, { type: "user", text: message }])
      setMessage("")

      // Simular resposta do agente
      setIsTyping(true)
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            type: "agent",
            text: "Obrigado pela sua mensagem. Um dos nossos agentes irá responder em breve. Enquanto isso, pode consultar as nossas FAQs para obter ajuda imediata.",
          },
        ])
        setIsTyping(false)
      }, 1500)
    }
  }

  const handleFeedback = (helpful: boolean) => {
    toast({
      title: helpful ? "Obrigado pelo feedback positivo!" : "Lamentamos que não tenha sido útil",
      description: helpful ? "Ficamos felizes em ajudar." : "Vamos trabalhar para melhorar as nossas respostas.",
    })
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Pesquisar ajuda..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      {!showLiveChat ? (
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="contact">Contacto</TabsTrigger>
            <TabsTrigger value="articles">Artigos</TabsTrigger>
          </TabsList>

          {/* Aba de FAQs */}
          <TabsContent value="faq">
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2 text-yellow-500" />
                    Pedidos
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como cancelar um pedido?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">Pode cancelar um pedido seguindo estes passos:</p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>Aceda à secção "Pedidos" na barra de navegação inferior</li>
                          <li>Selecione o pedido que deseja cancelar</li>
                          <li>Toque no botão "Cancelar pedido" na parte inferior do ecrã</li>
                          <li>Confirme o cancelamento</li>
                        </ol>
                        <p className="text-sm text-gray-500">
                          Nota: Só é possível cancelar pedidos que ainda não foram preparados. Após o início da
                          preparação, entre em contacto com o suporte.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>O que fazer se o meu pedido estiver atrasado?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">Se o seu pedido estiver demorando mais do que o tempo estimado:</p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>Verifique o status atual na página de detalhes do pedido</li>
                          <li>Se o estafeta já estiver a caminho, pode contactá-lo diretamente através da aplicação</li>
                          <li>
                            Se o pedido ainda estiver em preparação e o atraso for significativo, utilize a opção
                            "Contactar suporte" na página do pedido
                          </li>
                        </ol>
                        <p className="text-sm text-gray-500">
                          Estamos sempre a monitorizar os tempos de entrega e trabalhamos para garantir que receba o seu
                          pedido o mais rápido possível.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Como rastrear o meu pedido em tempo real?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">
                          O Manu Delivery oferece rastreamento em tempo real para todos os pedidos:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>Aceda à secção "Pedidos" na barra de navegação</li>
                          <li>Selecione o pedido ativo que deseja rastrear</li>
                          <li>Na página de detalhes, verá um mapa em tempo real mostrando a localização do estafeta</li>
                          <li>O tempo estimado de chegada é atualizado constantemente com base na localização atual</li>
                        </ol>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-yellow-500" />
                    Pagamentos
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Quais métodos de pagamento são aceites?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">O Manu Delivery aceita os seguintes métodos de pagamento:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>Cartões de crédito e débito (Visa, Mastercard, American Express)</li>
                          <li>MB Way</li>
                          <li>Dinheiro (pagamento na entrega)</li>
                          <li>Transferência bancária (em breve)</li>
                        </ul>
                        <p className="text-sm text-gray-500">
                          Pode gerir os seus métodos de pagamento na secção "Métodos de pagamento" do seu perfil.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Como solicitar reembolso?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">Se precisar de um reembolso, siga estes passos:</p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>Aceda à secção "Pedidos" e selecione o pedido em questão</li>
                          <li>Toque em "Reportar um problema" na parte inferior da página</li>
                          <li>Selecione o motivo do reembolso e forneça detalhes adicionais</li>
                          <li>Envie fotos se necessário para comprovar o problema</li>
                          <li>Submeta o pedido de reembolso</li>
                        </ol>
                        <p className="text-sm text-gray-500">
                          A nossa equipa analisará o seu pedido e processará o reembolso em até 5 dias úteis, caso seja
                          aprovado.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-yellow-500" />
                    Entregas
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Qual é o tempo médio de entrega?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">
                          O tempo médio de entrega do Manu Delivery é de 30-45 minutos, dependendo de vários fatores:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>Distância entre a sua localização e o armazém mais próximo</li>
                          <li>Condições de trânsito</li>
                          <li>Volume de pedidos atual</li>
                          <li>Condições meteorológicas</li>
                        </ul>
                        <p className="text-sm text-gray-500">
                          Antes de finalizar o seu pedido, apresentamos sempre uma estimativa de tempo de entrega
                          atualizada.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Como alterar o endereço de entrega?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">Para alterar o endereço de entrega de um pedido:</p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>
                            Se o pedido ainda não foi confirmado, pode cancelá-lo e fazer um novo pedido com o endereço
                            correto
                          </li>
                          <li>
                            Se o pedido já foi confirmado mas ainda não está em preparação, contacte imediatamente o
                            suporte ao cliente
                          </li>
                        </ol>
                        <p className="text-sm text-gray-500 mb-3">
                          Não é possível alterar o endereço de entrega depois que o pedido entrou em preparação.
                        </p>
                        <p className="text-sm text-gray-500">
                          Para evitar problemas futuros, mantenha os seus endereços atualizados na secção "Endereços" do
                          seu perfil.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <User className="h-5 w-5 mr-2 text-yellow-500" />
                    Conta
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como alterar a minha palavra-passe?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">Para alterar a sua palavra-passe:</p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>Aceda ao seu perfil tocando no ícone de utilizador na barra de navegação</li>
                          <li>Toque em "Informações pessoais"</li>
                          <li>Selecione "Alterar palavra-passe"</li>
                          <li>Insira a sua palavra-passe atual e a nova palavra-passe</li>
                          <li>Confirme a nova palavra-passe e toque em "Guardar"</li>
                        </ol>
                        <p className="text-sm text-gray-500">
                          Por razões de segurança, recomendamos que altere a sua palavra-passe regularmente e utilize
                          uma combinação de letras, números e caracteres especiais.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Como excluir a minha conta?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">Para excluir a sua conta do Manu Delivery:</p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>Aceda ao seu perfil tocando no ícone de utilizador</li>
                          <li>Toque em "Configurações"</li>
                          <li>Na aba "Privacidade", deslize até ao final da página</li>
                          <li>Toque em "Excluir minha conta"</li>
                          <li>Siga as instruções para confirmar a exclusão</li>
                        </ol>
                        <p className="text-sm text-gray-500 mb-3">
                          Atenção: A exclusão da conta é permanente e não pode ser desfeita. Todos os seus dados,
                          incluindo histórico de pedidos e informações pessoais, serão removidos dos nossos servidores.
                        </p>
                        <p className="text-sm text-gray-500">
                          Se preferir, pode contactar o nosso suporte ao cliente para solicitar a exclusão da sua conta.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-yellow-500" />
                    Aplicação
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como ativar notificações?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">Para ativar ou personalizar as notificações:</p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>Aceda ao seu perfil tocando no ícone de utilizador</li>
                          <li>Toque em "Configurações"</li>
                          <li>Selecione a aba "Notificações"</li>
                          <li>Ative ou desative as notificações conforme a sua preferência</li>
                        </ol>
                        <p className="text-sm text-gray-500 mb-3">
                          Pode personalizar quais tipos de notificações deseja receber:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3 text-sm text-gray-500">
                          <li>Atualizações de pedidos</li>
                          <li>Promoções e ofertas</li>
                          <li>Email marketing</li>
                        </ul>
                        <p className="text-sm text-gray-500">
                          Certifique-se também de que as notificações estão ativadas nas configurações do seu
                          dispositivo.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>A aplicação está lenta. O que fazer?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3">Se a aplicação estiver lenta, experimente estas soluções:</p>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                          <li>Verifique a sua conexão à internet</li>
                          <li>Feche a aplicação completamente e abra-a novamente</li>
                          <li>Limpe a cache da aplicação nas configurações do seu dispositivo</li>
                          <li>Verifique se há atualizações disponíveis para a aplicação</li>
                          <li>Reinicie o seu dispositivo</li>
                        </ol>
                        <p className="text-sm text-gray-500">
                          Se o problema persistir, entre em contacto com o nosso suporte técnico para assistência
                          adicional.
                        </p>
                        <div className="flex items-center justify-end mt-3 space-x-2">
                          <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFeedback(false)}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Aba de Contacto */}
          <TabsContent value="contact">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Fale connosco</h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto py-3 px-4"
                      onClick={() => setShowLiveChat(true)}
                    >
                      <MessageSquare className="h-5 w-5 mr-3 text-yellow-500" />
                      <div className="text-left">
                        <p className="font-medium">Chat ao vivo</p>
                        <p className="text-sm text-gray-500">Converse com um assistente em tempo real</p>
                      </div>
                    </Button>

                    <Button variant="outline" className="w-full justify-start h-auto py-3 px-4">
                      <Phone className="h-5 w-5 mr-3 text-yellow-500" />
                      <div className="text-left">
                        <p className="font-medium">Linha de apoio</p>
                        <p className="text-sm text-gray-500">+351 210 123 456 (9h-21h, todos os dias)</p>
                      </div>
                    </Button>

                    <Button variant="outline" className="w-full justify-start h-auto py-3 px-4">
                      <Mail className="h-5 w-5 mr-3 text-yellow-500" />
                      <div className="text-left">
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-500">suporte@manudelivery.pt</p>
                      </div>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Formulário de contacto</h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="order">Problema com pedido</option>
                        <option value="account">Questão sobre conta</option>
                        <option value="payment">Problema de pagamento</option>
                        <option value="app">Problema técnico</option>
                        <option value="other">Outro assunto</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Descreva o seu problema ou questão..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Enviar mensagem</Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Artigos */}
          <TabsContent value="articles">
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <div className="h-32 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Imagem do artigo</p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-medium mb-2">Guia completo para novos utilizadores</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Aprenda a utilizar todas as funcionalidades do Manu Delivery com este guia passo a passo.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-yellow-600">
                    Ler artigo <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-32 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Imagem do artigo</p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-medium mb-2">Como funciona o programa de fidelidade</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Descubra como ganhar e resgatar pontos no programa de fidelidade do Manu Delivery.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-yellow-600">
                    Ler artigo <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-32 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Imagem do artigo</p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-medium mb-2">Dicas para uma entrega mais rápida</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Conheça as melhores práticas para garantir que os seus pedidos cheguem o mais rápido possível.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-yellow-600">
                    Ler artigo <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Button className="w-full" variant="outline">
                Ver todos os artigos <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Chat ao vivo</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowLiveChat(false)}>
                Fechar
              </Button>
            </div>

            <div className="h-[400px] border rounded-md p-3 mb-4 overflow-y-auto flex flex-col space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.type === "agent" && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Agente" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 max-w-[80%] ${
                      msg.type === "user" ? "bg-yellow-500 text-black" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Agente" />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg px-3 py-2 bg-gray-100">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                placeholder="Escreva a sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
      <Toaster />
    </div>
  )
}
