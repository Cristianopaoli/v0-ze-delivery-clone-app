"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Download, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function PrivacyContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [marketingConsent, setMarketingConsent] = useState(true)
  const [analyticsConsent, setAnalyticsConsent] = useState(true)
  const lastUpdated = "22 de Abril de 2023"

  const handleConsentChange = (type: string, value: boolean) => {
    if (type === "marketing") {
      setMarketingConsent(value)
      toast({
        title: value ? "Marketing ativado" : "Marketing desativado",
        description: value
          ? "Você receberá comunicações de marketing."
          : "Você não receberá mais comunicações de marketing.",
      })
    } else if (type === "analytics") {
      setAnalyticsConsent(value)
      toast({
        title: value ? "Analytics ativado" : "Analytics desativado",
        description: value
          ? "Seus dados serão usados para melhorar nossos serviços."
          : "Seus dados não serão mais usados para analytics.",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Política de Privacidade do Manu Delivery</h2>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Baixar PDF</span>
          </Button>
        </div>
        <p className="text-sm text-gray-500">Última atualização: {lastUpdated}</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Pesquisar na política de privacidade..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
        <h3 className="text-sm font-medium text-blue-800 mb-2">Resumo da nossa política</h3>
        <p className="text-sm text-blue-700">
          Valorizamos a sua privacidade e estamos comprometidos em proteger os seus dados pessoais. Esta política
          explica como recolhemos, utilizamos e protegemos as suas informações quando utiliza a nossa aplicação e
          serviços.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="collection">Dados</TabsTrigger>
          <TabsTrigger value="sharing">Partilha</TabsTrigger>
          <TabsTrigger value="choices">Escolhas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-bold mb-3">1. Introdução</h3>
            <div className="space-y-3">
              <p>
                A Manu Delivery, Lda. ("Manu Delivery", "nós", "nosso" ou "empresa") está comprometida em proteger a sua
                privacidade. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos
                os seus dados pessoais quando utiliza a nossa aplicação móvel, website e serviços relacionados
                (coletivamente, a "Plataforma").
              </p>
              <p>
                Por favor, leia esta Política de Privacidade cuidadosamente para entender as nossas práticas
                relativamente aos seus dados pessoais. Ao utilizar a nossa Plataforma, concorda com a recolha,
                utilização e divulgação de informações de acordo com esta Política de Privacidade.
              </p>
              <p>
                Esta Política de Privacidade aplica-se a todos os utilizadores da nossa Plataforma, incluindo clientes,
                parceiros comerciais e visitantes do website.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">2. Responsável pelo Tratamento de Dados</h3>
            <div className="space-y-3">
              <p>
                O responsável pelo tratamento dos seus dados pessoais é a Manu Delivery, Lda., com sede em Av. da
                Liberdade, 110, 1269-046 Lisboa, Portugal.
              </p>
              <p>
                Nomeámos um Encarregado de Proteção de Dados (EPD) que é responsável por supervisionar questões
                relacionadas com esta Política de Privacidade. Se tiver dúvidas sobre esta Política de Privacidade ou
                sobre como tratamos os seus dados pessoais, por favor contacte o nosso EPD através do email
                privacidade@manudelivery.pt.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">3. Princípios de Privacidade</h3>
            <div className="space-y-3">
              <p>Comprometemo-nos a seguir os seguintes princípios de privacidade:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Legalidade, justiça e transparência:</strong> Processamos os seus dados pessoais de forma
                  legal, justa e transparente.
                </li>
                <li>
                  <strong>Limitação de finalidade:</strong> Recolhemos os seus dados pessoais apenas para finalidades
                  específicas, explícitas e legítimas.
                </li>
                <li>
                  <strong>Minimização de dados:</strong> Limitamos a recolha de dados pessoais ao que é necessário para
                  as finalidades para as quais são processados.
                </li>
                <li>
                  <strong>Precisão:</strong> Mantemos os dados pessoais precisos e atualizados.
                </li>
                <li>
                  <strong>Limitação de armazenamento:</strong> Armazenamos dados pessoais apenas pelo tempo necessário.
                </li>
                <li>
                  <strong>Integridade e confidencialidade:</strong> Processamos dados pessoais de forma a garantir a
                  segurança adequada.
                </li>
                <li>
                  <strong>Responsabilidade:</strong> Somos responsáveis por demonstrar conformidade com estes
                  princípios.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">4. Alterações a Esta Política de Privacidade</h3>
            <div className="space-y-3">
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações nas nossas
                práticas de informação ou alterações na legislação aplicável. Publicaremos a Política de Privacidade
                atualizada na nossa Plataforma e atualizaremos a data de "última atualização" no topo desta Política de
                Privacidade.
              </p>
              <p>
                Recomendamos que reveja esta Política de Privacidade periodicamente para se manter informado sobre como
                estamos a proteger os seus dados pessoais. O seu uso continuado da nossa Plataforma após a publicação de
                alterações a esta Política de Privacidade constituirá a sua aceitação dessas alterações.
              </p>
              <p>
                Para alterações significativas que afetem materialmente os seus direitos ou a forma como utilizamos os
                seus dados pessoais, iremos notificá-lo através de um aviso proeminente na nossa Plataforma ou enviando
                uma notificação diretamente para si.
              </p>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="collection" className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-bold mb-3">5. Dados Pessoais que Recolhemos</h3>
            <div className="space-y-3">
              <p>Podemos recolher os seguintes tipos de dados pessoais:</p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Informações de identificação pessoal</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Nome completo</li>
                      <li>Endereço de email</li>
                      <li>Número de telefone</li>
                      <li>Endereço(s) de entrega</li>
                      <li>Data de nascimento (para verificação de idade)</li>
                      <li>Género (opcional)</li>
                      <li>Fotografia de perfil (opcional)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Informações de pagamento</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Detalhes do cartão de pagamento (processados de forma segura por processadores de pagamento)
                      </li>
                      <li>Histórico de transações</li>
                      <li>Métodos de pagamento preferidos</li>
                      <li>Informações de faturação</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Nota:</strong> Não armazenamos os dados completos do seu cartão de crédito. Estas
                      informações são processadas diretamente pelos nossos prestadores de serviços de pagamento seguros.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Informações de localização</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Localização geográfica precisa (com o seu consentimento)</li>
                      <li>Endereços guardados</li>
                      <li>Código postal</li>
                      <li>Cidade e país</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      A localização precisa é utilizada para determinar a disponibilidade de entrega, mostrar lojas
                      próximas e facilitar entregas precisas. Pode desativar o acesso à localização nas configurações do
                      seu dispositivo.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Informações de utilização e atividade</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Histórico de pedidos</li>
                      <li>Produtos visualizados e pesquisados</li>
                      <li>Preferências e favoritos</li>
                      <li>Avaliações e comentários</li>
                      <li>Interações com o suporte ao cliente</li>
                      <li>Participação em programas de fidelidade ou promoções</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Informações do dispositivo e técnicas</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Tipo de dispositivo e modelo</li>
                      <li>Sistema operativo</li>
                      <li>Identificadores únicos do dispositivo</li>
                      <li>Endereço IP</li>
                      <li>Navegador web e versão</li>
                      <li>Operadora de telecomunicações</li>
                      <li>Fuso horário</li>
                      <li>Informações de rede</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">6. Como Recolhemos os Seus Dados</h3>
            <div className="space-y-3">
              <p>Recolhemos os seus dados pessoais através de vários métodos:</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Informações que nos fornece diretamente</h4>
                  <p className="text-sm">
                    Recolhemos dados pessoais que nos fornece quando cria uma conta, faz um pedido, preenche
                    formulários, contacta o nosso suporte ao cliente, participa em inquéritos ou interage com a nossa
                    Plataforma de outras formas.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Informações recolhidas automaticamente</h4>
                  <p className="text-sm">
                    Quando utiliza a nossa Plataforma, recolhemos automaticamente determinadas informações, incluindo
                    dados técnicos sobre o seu dispositivo, padrões de navegação e informações sobre como interage com a
                    nossa Plataforma. Recolhemos estas informações utilizando cookies, pixels, web beacons e tecnologias
                    semelhantes.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Informações de terceiros</h4>
                  <p className="text-sm">Podemos receber informações sobre si de terceiros, incluindo:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                    <li>Parceiros comerciais com os quais colaboramos</li>
                    <li>Plataformas de redes sociais, se optar por se registar ou iniciar sessão através delas</li>
                    <li>Prestadores de serviços de pagamento</li>
                    <li>Serviços de análise e publicidade</li>
                    <li>Fontes publicamente disponíveis</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">7. Base Legal para o Processamento</h3>
            <div className="space-y-3">
              <p>
                Processamos os seus dados pessoais apenas quando temos uma base legal válida para o fazer. Dependendo
                das circunstâncias, podemos processar os seus dados com base em:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Execução de um contrato</h4>
                  <p className="text-sm">
                    Quando o processamento é necessário para a execução de um contrato do qual é parte ou para tomar
                    medidas a seu pedido antes de celebrar um contrato.
                  </p>
                  <Badge className="mt-2 bg-yellow-500 hover:bg-yellow-600">Exemplo</Badge>
                  <p className="text-xs mt-1">Processar o seu pedido, gerir a sua conta, facilitar pagamentos</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Consentimento</h4>
                  <p className="text-sm">
                    Quando nos deu o seu consentimento explícito para processar os seus dados pessoais para uma
                    finalidade específica.
                  </p>
                  <Badge className="mt-2 bg-yellow-500 hover:bg-yellow-600">Exemplo</Badge>
                  <p className="text-xs mt-1">
                    Enviar-lhe comunicações de marketing, recolher a sua localização precisa
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Interesses legítimos</h4>
                  <p className="text-sm">
                    Quando o processamento é necessário para os nossos interesses legítimos ou os de terceiros, desde
                    que os seus interesses e direitos fundamentais não prevaleçam.
                  </p>
                  <Badge className="mt-2 bg-yellow-500 hover:bg-yellow-600">Exemplo</Badge>
                  <p className="text-xs mt-1">
                    Melhorar os nossos serviços, prevenir fraudes, garantir a segurança da rede
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Obrigação legal</h4>
                  <p className="text-sm">
                    Quando o processamento é necessário para cumprir uma obrigação legal a que estamos sujeitos.
                  </p>
                  <Badge className="mt-2 bg-yellow-500 hover:bg-yellow-600">Exemplo</Badge>
                  <p className="text-xs mt-1">
                    Verificação de idade para venda de álcool, manutenção de registos fiscais
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">8. Finalidades do Processamento</h3>
            <div className="space-y-3">
              <p>Utilizamos os seus dados pessoais para as seguintes finalidades:</p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Fornecer e gerir os nossos serviços</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Criar e gerir a sua conta</li>
                      <li>Processar e entregar os seus pedidos</li>
                      <li>Facilitar pagamentos e reembolsos</li>
                      <li>Fornecer suporte ao cliente</li>
                      <li>Comunicar consigo sobre os seus pedidos e a nossa Plataforma</li>
                      <li>Personalizar a sua experiência na Plataforma</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Melhorar e desenvolver os nossos serviços</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Analisar como a nossa Plataforma é utilizada</li>
                      <li>Testar e desenvolver novas funcionalidades</li>
                      <li>Resolver problemas técnicos</li>
                      <li>Realizar pesquisas e análises</li>
                      <li>Melhorar a interface do utilizador e a experiência geral</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Marketing e comunicações</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Enviar-lhe atualizações sobre os nossos serviços</li>
                      <li>Fornecer ofertas personalizadas e recomendações</li>
                      <li>Realizar campanhas de marketing e publicidade</li>
                      <li>Medir a eficácia das nossas campanhas de marketing</li>
                      <li>Convidá-lo a participar em eventos ou inquéritos</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Nota:</strong> Respeitamos as suas preferências de comunicação. Pode optar por não receber
                      comunicações de marketing a qualquer momento.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Segurança e conformidade legal</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Verificar a sua identidade</li>
                      <li>Prevenir e detetar fraudes e abusos</li>
                      <li>Proteger a segurança da nossa Plataforma</li>
                      <li>Cumprir obrigações legais</li>
                      <li>Resolver disputas e fazer cumprir os nossos acordos</li>
                      <li>Responder a solicitações legais de autoridades públicas</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="sharing" className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-bold mb-3">9. Partilha de Dados Pessoais</h3>
            <div className="space-y-3">
              <p>
                Podemos partilhar os seus dados pessoais com as seguintes categorias de destinatários, sempre em
                conformidade com esta Política de Privacidade e a legislação aplicável:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mr-2">
                      1
                    </span>
                    Prestadores de serviços e parceiros comerciais
                  </h4>
                  <p className="text-sm">
                    Partilhamos dados com terceiros que nos ajudam a operar, fornecer e melhorar os nossos serviços,
                    incluindo:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                    <li>Estafetas e parceiros de entrega</li>
                    <li>Processadores de pagamento</li>
                    <li>Fornecedores de serviços de armazenamento em nuvem</li>
                    <li>Serviços de análise e marketing</li>
                    <li>Serviços de suporte ao cliente</li>
                    <li>Fornecedores de verificação de identidade</li>
                  </ul>
                  <p className="text-xs mt-2 text-gray-500">
                    Estes prestadores de serviços estão contratualmente obrigados a utilizar os dados apenas para os
                    fins especificados e a manter a confidencialidade e segurança dos seus dados.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mr-2">
                      2
                    </span>
                    Parceiros e estabelecimentos
                  </h4>
                  <p className="text-sm">
                    Partilhamos informações necessárias com os estabelecimentos e parceiros que fornecem os produtos que
                    encomenda, para permitir o processamento e entrega dos seus pedidos.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mr-2">
                      3
                    </span>
                    Empresas afiliadas
                  </h4>
                  <p className="text-sm">
                    Podemos partilhar dados com as nossas empresas-mãe, subsidiárias e afiliadas para apoiar a prestação
                    dos nossos serviços e para fins administrativos internos.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mr-2">
                      4
                    </span>
                    Autoridades legais e reguladoras
                  </h4>
                  <p className="text-sm">
                    Podemos divulgar os seus dados pessoais se acreditarmos de boa fé que tal divulgação é necessária
                    para:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                    <li>Cumprir uma obrigação legal ou regulamentar</li>
                    <li>
                      Proteger os direitos, propriedade ou segurança da nossa empresa, dos nossos utilizadores ou de
                      terceiros
                    </li>
                    <li>Prevenir ou investigar possíveis irregularidades relacionadas com os nossos serviços</li>
                    <li>Responder a processos legais, como mandados de busca, ordens judiciais ou intimações</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center text-xs mr-2">
                      5
                    </span>
                    Transações comerciais
                  </h4>
                  <p className="text-sm">
                    Se estivermos envolvidos numa fusão, aquisição, venda de ativos ou processo de falência, os seus
                    dados pessoais podem ser transferidos como parte desse processo. Notificaremos sobre quaisquer
                    alterações na propriedade ou utilização dos seus dados pessoais.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium">Importante:</p>
                <p className="text-sm">
                  Não vendemos os seus dados pessoais a terceiros. Quando partilhamos dados com terceiros, fazemo-lo
                  apenas conforme descrito nesta Política de Privacidade e com proteções adequadas em vigor.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">10. Transferências Internacionais de Dados</h3>
            <div className="space-y-3">
              <p>
                A Manu Delivery opera principalmente em Portugal, mas podemos transferir os seus dados pessoais para
                outros países onde os nossos prestadores de serviços ou afiliadas estão localizados. Estas
                transferências são necessárias para fornecer os nossos serviços e para as finalidades descritas nesta
                Política de Privacidade.
              </p>
              <p>
                Quando transferimos dados pessoais para fora do Espaço Económico Europeu (EEE), garantimos que são
                implementadas salvaguardas adequadas para proteger os seus dados, tais como:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Transferências para países que a Comissão Europeia reconheceu como tendo proteção adequada</li>
                <li>Utilização de cláusulas contratuais-tipo aprovadas pela Comissão Europeia</li>
                <li>Implementação de regras empresariais vinculativas</li>
                <li>Outros mecanismos de transferência legalmente reconhecidos</li>
              </ul>
              <p>
                Para obter mais informações sobre as salvaguardas específicas que utilizamos para transferências de
                dados, contacte o nosso Encarregado de Proteção de Dados através do email privacidade@manudelivery.pt.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">11. Retenção de Dados</h3>
            <div className="space-y-3">
              <p>
                Retemos os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais
                foram recolhidos, incluindo para satisfazer requisitos legais, contabilísticos ou de relatórios.
              </p>
              <p>Para determinar o período de retenção apropriado, consideramos:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A quantidade, natureza e sensibilidade dos dados pessoais</li>
                <li>O risco potencial de danos por uso não autorizado ou divulgação</li>
                <li>As finalidades para as quais processamos os dados</li>
                <li>Se podemos alcançar essas finalidades por outros meios</li>
                <li>Requisitos legais aplicáveis</li>
              </ul>
              <p>Em geral, mantemos os dados das seguintes formas:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Dados da conta</h4>
                  <p className="text-sm">
                    Mantidos enquanto a sua conta estiver ativa. Após o encerramento da conta, retemos determinados
                    dados por um período limitado para fins legais e de prevenção de fraudes.
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Dados de transações</h4>
                  <p className="text-sm">
                    Mantidos por até 7 anos para cumprir obrigações fiscais, contabilísticas e legais.
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Dados de comunicações</h4>
                  <p className="text-sm">
                    Comunicações com o suporte ao cliente são mantidas por até 2 anos para garantir a qualidade do
                    serviço e para fins de formação.
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Dados de utilização</h4>
                  <p className="text-sm">
                    Dados analíticos e de utilização são geralmente mantidos em forma agregada e anonimizada.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="choices" className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-bold mb-3">12. Os Seus Direitos de Privacidade</h3>
            <div className="space-y-3">
              <p>
                Dependendo da sua localização, pode ter determinados direitos relativamente aos seus dados pessoais. Ao
                abrigo do Regulamento Geral de Proteção de Dados (RGPD) e outras leis de privacidade aplicáveis, estes
                direitos podem incluir:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Direito de acesso</h4>
                  <p className="text-sm">Tem o direito de solicitar uma cópia dos seus dados pessoais que mantemos.</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Direito de retificação</h4>
                  <p className="text-sm">Tem o direito de corrigir dados pessoais imprecisos ou incompletos.</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Direito ao apagamento</h4>
                  <p className="text-sm">
                    Tem o direito de solicitar a eliminação dos seus dados pessoais em determinadas circunstâncias.
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Direito à limitação do processamento</h4>
                  <p className="text-sm">
                    Tem o direito de solicitar a restrição do processamento dos seus dados pessoais em determinadas
                    circunstâncias.
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Direito à portabilidade dos dados</h4>
                  <p className="text-sm">
                    Tem o direito de receber os seus dados pessoais num formato estruturado, comummente utilizado e
                    legível por máquina.
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Direito de oposição</h4>
                  <p className="text-sm">
                    Tem o direito de se opor ao processamento dos seus dados pessoais em determinadas circunstâncias.
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Direito de retirar o consentimento</h4>
                  <p className="text-sm">
                    Quando o processamento se baseia no consentimento, tem o direito de retirar o seu consentimento a
                    qualquer momento.
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-1">Direito de apresentar reclamação</h4>
                  <p className="text-sm">
                    Tem o direito de apresentar uma reclamação junto de uma autoridade de supervisão.
                  </p>
                </div>
              </div>

              <p className="mt-2">
                Para exercer qualquer um destes direitos, contacte-nos através de privacidade@manudelivery.pt ou utilize
                as opções disponíveis na nossa Plataforma. Responderemos ao seu pedido dentro do prazo exigido pela lei
                aplicável (geralmente 30 dias).
              </p>

              <p>
                Podemos precisar de solicitar informações específicas para nos ajudar a confirmar a sua identidade e
                garantir o seu direito de aceder aos seus dados pessoais ou exercer outros direitos. Esta é uma medida
                de segurança para garantir que os dados pessoais não são divulgados a qualquer pessoa que não tenha
                direito a recebê-los.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">13. As Suas Escolhas e Preferências</h3>
            <div className="space-y-4">
              <p>
                Oferecemos-lhe várias escolhas sobre como utilizamos os seus dados pessoais. Pode atualizar as suas
                preferências a qualquer momento através das configurações da sua conta ou contactando-nos.
              </p>

              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-3">Preferências de comunicação</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-emails" className="font-medium">
                        Emails de marketing
                      </Label>
                      <p className="text-sm text-gray-500">Receba ofertas especiais, promoções e atualizações</p>
                    </div>
                    <Switch
                      id="marketing-emails"
                      checked={marketingConsent}
                      onCheckedChange={(checked) => handleConsentChange("marketing", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="analytics-consent" className="font-medium">
                        Analytics e personalização
                      </Label>
                      <p className="text-sm text-gray-500">
                        Permita-nos analisar a utilização para melhorar os serviços
                      </p>
                    </div>
                    <Switch
                      id="analytics-consent"
                      checked={analyticsConsent}
                      onCheckedChange={(checked) => handleConsentChange("analytics", checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Outras escolhas disponíveis</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Cookies e tecnologias semelhantes:</strong> Pode gerir as suas preferências de cookies
                    através das configurações do seu navegador ou do nosso banner de cookies.
                  </li>
                  <li>
                    <strong>Notificações push:</strong> Pode gerir as notificações push através das configurações da
                    aplicação ou do seu dispositivo.
                  </li>
                  <li>
                    <strong>Localização:</strong> Pode controlar o acesso à sua localização através das configurações do
                    seu dispositivo.
                  </li>
                  <li>
                    <strong>Dados da conta:</strong> Pode atualizar ou eliminar os seus dados da conta através das
                    configurações da sua conta na Plataforma.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">14. Segurança de Dados</h3>
            <div className="space-y-3">
              <p>
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados
                pessoais contra perda acidental, acesso não autorizado, utilização, alteração e divulgação. Estas
                medidas incluem:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Encriptação de dados sensíveis</li>
                <li>Firewalls e proteção contra intrusões</li>
                <li>Controlos de acesso rigorosos</li>
                <li>Monitorização regular de sistemas</li>
                <li>Formação de funcionários em segurança de dados</li>
                <li>Avaliações de segurança e testes de penetração</li>
              </ul>
              <p>
                Embora nos esforcemos para proteger os seus dados pessoais, nenhum método de transmissão pela Internet
                ou método de armazenamento eletrónico é 100% seguro. Portanto, não podemos garantir a sua segurança
                absoluta.
              </p>
              <p>
                Notificaremos os utilizadores afetados e as autoridades reguladoras relevantes sobre qualquer violação
                de dados pessoais, conforme exigido por lei.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">15. Cookies e Tecnologias Semelhantes</h3>
            <div className="space-y-3">
              <p>
                Utilizamos cookies e tecnologias semelhantes (como web beacons e pixels) para recolher e armazenar
                informações quando visita a nossa Plataforma ou interage com os nossos emails.
              </p>

              <div className="space-y-2">
                <h4 className="font-medium">Tipos de cookies que utilizamos:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Cookies essenciais:</strong> Necessários para o funcionamento da Plataforma. Não podem ser
                    desativados.
                  </li>
                  <li>
                    <strong>Cookies de preferências:</strong> Permitem-nos lembrar as suas preferências e personalizar a
                    Plataforma.
                  </li>
                  <li>
                    <strong>Cookies analíticos:</strong> Ajudam-nos a entender como os utilizadores interagem com a
                    Plataforma.
                  </li>
                  <li>
                    <strong>Cookies de marketing:</strong> Utilizados para mostrar publicidade relevante e medir a
                    eficácia das campanhas.
                  </li>
                </ul>
              </div>

              <p>
                Pode gerir as suas preferências de cookies através das configurações do seu navegador ou do nosso banner
                de cookies. No entanto, bloquear alguns tipos de cookies pode afetar a sua experiência na nossa
                Plataforma.
              </p>

              <p>
                Para mais informações sobre como utilizamos cookies, consulte a nossa{" "}
                <Button variant="link" className="p-0 h-auto text-yellow-600">
                  Política de Cookies <ExternalLink className="h-3 w-3 inline ml-1" />
                </Button>
                .
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">16. Privacidade de Crianças</h3>
            <div className="space-y-3">
              <p>
                A nossa Plataforma não se destina a crianças com menos de 18 anos, e não recolhemos intencionalmente
                dados pessoais de crianças com menos de 18 anos. Se tomar conhecimento de que uma criança nos forneceu
                dados pessoais sem verificação do consentimento parental, contacte-nos para que possamos tomar medidas
                para remover essas informações.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">17. Contacte-nos</h3>
            <div className="space-y-3">
              <p>
                Se tiver dúvidas ou preocupações sobre esta Política de Privacidade ou as nossas práticas de
                privacidade, por favor contacte-nos:
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium">Manu Delivery, Lda.</p>
                <p>Av. da Liberdade, 110</p>
                <p>1269-046 Lisboa</p>
                <p>Portugal</p>
                <p className="mt-2">
                  <strong>Email:</strong> privacidade@manudelivery.pt
                </p>
                <p>
                  <strong>Telefone:</strong> +351 210 123 456
                </p>
                <p className="mt-2">
                  <strong>Encarregado de Proteção de Dados:</strong> dpo@manudelivery.pt
                </p>
              </div>
              <p>
                Se não estiver satisfeito com a nossa resposta, tem o direito de apresentar uma reclamação junto da
                Comissão Nacional de Proteção de Dados (CNPD) ou outra autoridade de supervisão competente.
              </p>
            </div>
          </section>

          <div className="pt-6 border-t mt-6">
            <p className="text-sm text-gray-500">
              Esta Política de Privacidade foi atualizada pela última vez em {lastUpdated}. Continuaremos a atualizar
              esta política conforme necessário para refletir alterações nas nossas práticas e para garantir a
              conformidade com a legislação aplicável.
            </p>
          </div>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}
