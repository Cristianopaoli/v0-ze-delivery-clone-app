"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function TermsContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const lastUpdated = "22 de Abril de 2023"

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Termos e Condições do Manu Delivery</h2>
        <p className="text-sm text-gray-500">Última atualização: {lastUpdated}</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Pesquisar nos termos..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="services">Serviços</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-bold mb-3">1. Introdução e Aceitação</h3>
            <div className="space-y-3">
              <p>
                Bem-vindo ao Manu Delivery. Estes Termos e Condições ("Termos") constituem um acordo legal entre você
                ("Utilizador", "você" ou "seu") e Manu Delivery, Lda. ("Manu Delivery", "nós", "nosso" ou "empresa"),
                operadora da aplicação móvel e website Manu Delivery (coletivamente, a "Plataforma").
              </p>
              <p>
                <strong>
                  AO ACEDER OU UTILIZAR A NOSSA PLATAFORMA, VOCÊ CONCORDA EM FICAR VINCULADO POR ESTES TERMOS.
                </strong>{" "}
                Se não concordar com qualquer parte destes Termos, não poderá aceder ou utilizar a nossa Plataforma.
              </p>
              <p>
                Recomendamos que leia estes Termos cuidadosamente antes de utilizar a nossa Plataforma. Estes Termos
                aplicam-se a todos os visitantes, utilizadores e outras pessoas que acedam ou utilizem a Plataforma.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">2. Definições</h3>
            <div className="space-y-3">
              <p>Para efeitos destes Termos, as seguintes definições aplicam-se:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>"Plataforma"</strong> refere-se à aplicação móvel Manu Delivery, website e qualquer outro
                  software relacionado.
                </li>
                <li>
                  <strong>"Serviços"</strong> refere-se a todos os serviços oferecidos através da Plataforma, incluindo
                  mas não limitado a, pedidos, entregas, processamento de pagamentos e suporte ao cliente.
                </li>
                <li>
                  <strong>"Produtos"</strong> refere-se a bebidas, alimentos e outros itens disponíveis para compra
                  através da Plataforma.
                </li>
                <li>
                  <strong>"Parceiros"</strong> refere-se a fornecedores, estabelecimentos e outros terceiros que
                  fornecem Produtos através da nossa Plataforma.
                </li>
                <li>
                  <strong>"Estafetas"</strong> refere-se aos prestadores de serviços independentes que realizam as
                  entregas dos Produtos.
                </li>
                <li>
                  <strong>"Conta"</strong> refere-se à conta registada de um Utilizador na Plataforma.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">3. Elegibilidade e Registo</h3>
            <div className="space-y-3">
              <p>
                <strong>3.1. Requisitos de Idade:</strong> Para utilizar os nossos Serviços, você deve ter pelo menos 18
                anos de idade. Ao utilizar a Plataforma, você confirma e garante que tem pelo menos 18 anos.
                Reservamo-nos o direito de solicitar comprovativo de idade a qualquer momento.
              </p>
              <p>
                <strong>3.2. Criação de Conta:</strong> Para aceder a determinadas funcionalidades da Plataforma, você
                deverá criar uma Conta. Ao criar uma Conta, você concorda em fornecer informações precisas, atuais e
                completas. É da sua responsabilidade manter as suas informações atualizadas.
              </p>
              <p>
                <strong>3.3. Segurança da Conta:</strong> Você é responsável por manter a confidencialidade das suas
                credenciais de acesso e por todas as atividades que ocorram na sua Conta. Você concorda em notificar-nos
                imediatamente sobre qualquer uso não autorizado da sua Conta ou qualquer outra violação de segurança.
              </p>
              <p>
                <strong>3.4. Uma Conta por Pessoa:</strong> Cada pessoa só pode criar e manter uma Conta. Reservamo-nos
                o direito de encerrar contas duplicadas.
              </p>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="services" className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-bold mb-3">4. Serviços Oferecidos</h3>
            <div className="space-y-3">
              <p>
                <strong>4.1. Descrição dos Serviços:</strong> A Plataforma Manu Delivery permite que os Utilizadores
                encomendem Produtos de diversos Parceiros para entrega no local especificado pelo Utilizador. Atuamos
                como intermediários entre os Utilizadores, Parceiros e Estafetas.
              </p>
              <p>
                <strong>4.2. Disponibilidade:</strong> Os Serviços estão disponíveis apenas em áreas geográficas
                específicas onde operamos. A disponibilidade dos Produtos e tempos de entrega podem variar dependendo da
                sua localização, horário do dia e outros fatores.
              </p>
              <p>
                <strong>4.3. Qualidade dos Produtos:</strong> Embora nos esforcemos para garantir a qualidade dos
                Produtos, não somos os fabricantes ou produtores dos mesmos. A responsabilidade pela qualidade,
                segurança e conformidade dos Produtos é dos nossos Parceiros.
              </p>
              <p>
                <strong>4.4. Verificação de Idade:</strong> Para compras de bebidas alcoólicas e outros produtos com
                restrição de idade, exigimos verificação de idade no momento da entrega. Os Estafetas têm o direito de
                recusar a entrega se não for apresentada identificação válida ou se o destinatário for menor de idade.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">5. Uso da Plataforma</h3>
            <div className="space-y-3">
              <p>
                <strong>5.1. Uso Permitido:</strong> Você concorda em utilizar a Plataforma apenas para fins legais e de
                acordo com estes Termos. Você não pode utilizar a Plataforma de qualquer maneira que possa danificar,
                desativar, sobrecarregar ou prejudicar a Plataforma ou interferir no uso da Plataforma por terceiros.
              </p>
              <p>
                <strong>5.2. Condutas Proibidas:</strong> Você concorda em não:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Utilizar a Plataforma para qualquer finalidade ilegal ou não autorizada;</li>
                <li>Violar quaisquer leis aplicáveis na sua jurisdição;</li>
                <li>Infringir os nossos direitos de propriedade intelectual ou de terceiros;</li>
                <li>
                  Enviar material que contenha vírus de software, worms, trojans ou qualquer outro código, arquivo ou
                  programa de computador projetado para interromper, destruir ou limitar a funcionalidade de qualquer
                  software ou hardware;
                </li>
                <li>Tentar obter acesso não autorizado a sistemas ou redes conectadas à Plataforma;</li>
                <li>Coletar ou armazenar dados pessoais de outros utilizadores sem o seu consentimento;</li>
                <li>
                  Personificar qualquer pessoa ou entidade, ou falsamente declarar ou deturpar a sua afiliação com
                  qualquer pessoa ou entidade.
                </li>
              </ul>
              <p>
                <strong>5.3. Monitorização:</strong> Reservamo-nos o direito, mas não a obrigação, de monitorizar e
                revisar o conteúdo na Plataforma a qualquer momento.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">6. Pedidos e Entregas</h3>
            <div className="space-y-3">
              <p>
                <strong>6.1. Realização de Pedidos:</strong> Ao fazer um pedido através da nossa Plataforma, você está a
                fazer uma oferta para comprar os Produtos selecionados. Todos os pedidos estão sujeitos à aceitação e
                disponibilidade.
              </p>
              <p>
                <strong>6.2. Precisão das Informações:</strong> Você é responsável por fornecer informações precisas e
                completas para o seu pedido, incluindo o endereço de entrega correto e instruções especiais. Não nos
                responsabilizamos por atrasos ou falhas na entrega devido a informações incorretas ou incompletas.
              </p>
              <p>
                <strong>6.3. Tempos de Entrega:</strong> Os tempos de entrega fornecidos são apenas estimativas e podem
                variar devido a fatores como trânsito, condições meteorológicas, volume de pedidos e disponibilidade de
                Estafetas. Não garantimos tempos de entrega específicos.
              </p>
              <p>
                <strong>6.4. Recebimento da Entrega:</strong> Você ou alguém autorizado deve estar disponível no
                endereço de entrega para receber o pedido. Se ninguém estiver disponível após um período razoável, o
                Estafeta poderá deixar o pedido num local seguro, devolvê-lo ou descartá-lo, a nosso critério, e você
                poderá ser cobrado pelo pedido.
              </p>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="legal" className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-bold mb-3">7. Pagamentos e Taxas</h3>
            <div className="space-y-3">
              <p>
                <strong>7.1. Preços:</strong> Os preços dos Produtos são determinados pelos nossos Parceiros e podem
                variar. Todos os preços são apresentados em euros e incluem IVA e outras taxas aplicáveis.
              </p>
              <p>
                <strong>7.2. Taxas Adicionais:</strong> Além do preço dos Produtos, podemos cobrar taxas adicionais,
                incluindo, mas não limitado a, taxas de entrega, taxas de serviço e taxas para pedidos abaixo de um
                valor mínimo. Estas taxas serão claramente apresentadas antes da finalização do pedido.
              </p>
              <p>
                <strong>7.3. Métodos de Pagamento:</strong> Aceitamos vários métodos de pagamento, conforme indicado na
                Plataforma. Você concorda em fornecer informações de pagamento precisas e atualizadas.
              </p>
              <p>
                <strong>7.4. Autorização de Pagamento:</strong> Ao fornecer informações de pagamento, você autoriza-nos
                a cobrar o valor total do seu pedido, incluindo o preço dos Produtos, taxas e impostos aplicáveis, ao
                método de pagamento designado.
              </p>
              <p>
                <strong>7.5. Falhas de Pagamento:</strong> Se o seu método de pagamento for recusado ou expirar,
                reservamo-nos o direito de cancelar o seu pedido ou suspender a sua Conta até que o pagamento seja
                processado com sucesso.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">8. Cancelamentos e Reembolsos</h3>
            <div className="space-y-3">
              <p>
                <strong>8.1. Cancelamentos pelo Utilizador:</strong> Você pode cancelar um pedido a qualquer momento
                antes de entrar em preparação. Após o início da preparação, os cancelamentos estão sujeitos à nossa
                política de reembolso.
              </p>
              <p>
                <strong>8.2. Cancelamentos pela Plataforma:</strong> Reservamo-nos o direito de cancelar pedidos a
                qualquer momento devido a indisponibilidade de Produtos, problemas técnicos, suspeita de fraude ou
                outras circunstâncias razoáveis.
              </p>
              <p>
                <strong>8.3. Reembolsos:</strong> Os reembolsos podem ser processados nos seguintes casos:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cancelamento do pedido antes da preparação;</li>
                <li>Produtos danificados, incorretos ou de qualidade inferior;</li>
                <li>Falha na entrega devido a circunstâncias dentro do nosso controlo;</li>
                <li>Outros casos conforme determinado pela nossa equipa de suporte ao cliente.</li>
              </ul>
              <p>
                <strong>8.4. Processamento de Reembolsos:</strong> Os reembolsos serão processados para o método de
                pagamento original utilizado na compra. O tempo de processamento pode variar dependendo do seu banco ou
                emissor do cartão de crédito.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">9. Propriedade Intelectual</h3>
            <div className="space-y-3">
              <p>
                <strong>9.1. Nossos Direitos:</strong> A Plataforma e todo o seu conteúdo, recursos e funcionalidades
                (incluindo, mas não limitado a, todas as informações, software, texto, exibições, imagens, vídeo, áudio,
                design, seleção e arranjo) são de propriedade do Manu Delivery, seus licenciadores ou outros
                fornecedores de tal material e são protegidos por leis de direitos autorais, marcas registadas,
                patentes, segredos comerciais e outras leis de propriedade intelectual.
              </p>
              <p>
                <strong>9.2. Licença Limitada:</strong> Concedemos-lhe uma licença limitada, não exclusiva e não
                transferível para aceder e utilizar a Plataforma para fins pessoais e não comerciais.
              </p>
              <p>
                <strong>9.3. Restrições:</strong> Você não pode:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar
                  trabalhos derivados, transferir ou vender qualquer informação obtida da Plataforma;
                </li>
                <li>
                  Usar qualquer robô, spider ou outro dispositivo automático para monitorizar ou copiar qualquer
                  conteúdo da Plataforma;
                </li>
                <li>Descompilar, fazer engenharia reversa ou desmontar a Plataforma;</li>
                <li>
                  Remover quaisquer avisos de direitos autorais ou outras notificações proprietárias da Plataforma.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">10. Limitação de Responsabilidade</h3>
            <div className="space-y-3">
              <p>
                <strong>10.1. Isenção de Garantias:</strong> A PLATAFORMA É FORNECIDA "COMO ESTÁ" E "CONFORME
                DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS. NA EXTENSÃO MÁXIMA PERMITIDA PELA
                LEI APLICÁVEL, REJEITAMOS TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO
                A, GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO.
              </p>
              <p>
                <strong>10.2. Limitação de Responsabilidade:</strong> NA EXTENSÃO MÁXIMA PERMITIDA POR LEI, EM NENHUMA
                CIRCUNSTÂNCIA O MANU DELIVERY, SEUS DIRETORES, FUNCIONÁRIOS, PARCEIROS, AGENTES, FORNECEDORES OU
                AFILIADOS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU
                PUNITIVOS, INCLUINDO, MAS NÃO SE LIMITANDO A, PERDA DE LUCROS, DADOS, USO, BOA VONTADE OU OUTRAS PERDAS
                INTANGÍVEIS, RESULTANTES DE:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Seu acesso ou uso ou incapacidade de acessar ou usar a Plataforma;</li>
                <li>Qualquer conduta ou conteúdo de terceiros na Plataforma;</li>
                <li>Conteúdo obtido da Plataforma; e</li>
                <li>Acesso não autorizado, uso ou alteração das suas transmissões ou conteúdo.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">11. Alterações nos Termos</h3>
            <div className="space-y-3">
              <p>
                <strong>11.1. Modificações:</strong> Reservamo-nos o direito de modificar ou substituir estes Termos a
                qualquer momento, a nosso critério. Se uma revisão for material, tentaremos fornecer um aviso com pelo
                menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor.
              </p>
              <p>
                <strong>11.2. Notificação:</strong> Notificaremos sobre alterações aos Termos publicando os Termos
                atualizados na Plataforma e/ou enviando um email para o endereço associado à sua Conta.
              </p>
              <p>
                <strong>11.3. Aceitação Contínua:</strong> O seu uso continuado da Plataforma após a publicação de
                Termos revisados significa que você aceita e concorda com as alterações. Se não concordar com os novos
                termos, deve deixar de utilizar a Plataforma.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">12. Lei Aplicável e Resolução de Disputas</h3>
            <div className="space-y-3">
              <p>
                <strong>12.1. Lei Aplicável:</strong> Estes Termos serão regidos e interpretados de acordo com as leis
                de Portugal, sem considerar suas disposições de conflito de leis.
              </p>
              <p>
                <strong>12.2. Resolução de Disputas:</strong> Qualquer disputa decorrente ou relacionada a estes Termos
                ou à sua utilização da Plataforma será resolvida exclusivamente pelos tribunais de Lisboa, Portugal.
              </p>
              <p>
                <strong>12.3. Resolução Amigável:</strong> Antes de iniciar qualquer ação legal, você concorda em tentar
                resolver a disputa informalmente entrando em contacto connosco. Se a disputa não for resolvida
                informalmente dentro de 30 dias, qualquer uma das partes pode prosseguir com os procedimentos legais.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-3">13. Disposições Gerais</h3>
            <div className="space-y-3">
              <p>
                <strong>13.1. Acordo Integral:</strong> Estes Termos constituem o acordo integral entre você e o Manu
                Delivery em relação ao uso da Plataforma e substituem todos os acordos anteriores e contemporâneos,
                sejam escritos ou orais.
              </p>
              <p>
                <strong>13.2. Renúncia:</strong> A falha do Manu Delivery em exercer ou fazer cumprir qualquer direito
                ou disposição destes Termos não constituirá uma renúncia a tal direito ou disposição.
              </p>
              <p>
                <strong>13.3. Divisibilidade:</strong> Se qualquer disposição destes Termos for considerada inválida ou
                inexequível por um tribunal, as disposições restantes permanecerão em pleno vigor e efeito.
              </p>
              <p>
                <strong>13.4. Cessão:</strong> Você não pode ceder ou transferir estes Termos, por força de lei ou de
                outra forma, sem o nosso consentimento prévio por escrito. Qualquer tentativa de cessão sem tal
                consentimento será nula. Podemos ceder ou transferir estes Termos, a nosso critério, sem restrição.
              </p>
              <p>
                <strong>13.5. Contacto:</strong> Perguntas sobre estes Termos devem ser enviadas para
                termos@manudelivery.pt.
              </p>
            </div>
          </section>

          <div className="pt-6 border-t mt-6">
            <p className="text-sm text-gray-500">
              Ao utilizar a Plataforma Manu Delivery, você reconhece que leu, compreendeu e concorda em ficar vinculado
              por estes Termos e Condições.
            </p>
            <div className="mt-4 flex justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Aceitar Termos e Condições</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
