import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <Link href="/help">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">Sobre o Manu Delivery</h1>
      </div>

      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-center mb-6">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Manu Delivery Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>

          <h2 className="text-xl font-bold text-center mb-2">Manu Delivery</h2>
          <p className="text-center text-gray-500 mb-6">Versão 1.0.0</p>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold mb-2">A Nossa Missão</h3>
              <p>
                No Manu Delivery, a nossa missão é proporcionar a melhor experiência de entrega de bebidas, conectando
                os nossos clientes às suas bebidas favoritas com rapidez, conveniência e excelência no serviço.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">A Nossa História</h3>
              <p>
                Fundado em 2023, o Manu Delivery nasceu da ideia de simplificar a forma como as pessoas adquirem
                bebidas. Começámos como uma pequena startup em Lisboa e rapidamente expandimos para outras cidades
                portuguesas, sempre com o objetivo de oferecer um serviço rápido, fiável e de qualidade.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Os Nossos Valores</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Conveniência:</span> Facilitamos o acesso a uma vasta gama de bebidas,
                  entregues diretamente à sua porta.
                </li>
                <li>
                  <span className="font-medium">Qualidade:</span> Garantimos a qualidade dos produtos e do serviço de
                  entrega.
                </li>
                <li>
                  <span className="font-medium">Rapidez:</span> Valorizamos o seu tempo e trabalhamos para entregas
                  rápidas e eficientes.
                </li>
                <li>
                  <span className="font-medium">Responsabilidade:</span> Promovemos o consumo responsável e verificamos
                  a idade dos nossos clientes.
                </li>
                <li>
                  <span className="font-medium">Inovação:</span> Buscamos constantemente melhorar a nossa tecnologia e
                  serviços.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Equipa</h3>
              <p>
                Somos uma equipa diversificada de profissionais apaixonados por tecnologia e excelência no serviço ao
                cliente. Desde desenvolvedores e designers até especialistas em logística e atendimento ao cliente,
                todos trabalhamos juntos para proporcionar a melhor experiência possível.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Contacto</h3>
              <p>
                Manu Delivery, Lda.
                <br />
                Av. da Liberdade, 110
                <br />
                1269-046 Lisboa
                <br />
                Portugal
                <br />
                <br />
                Email: info@manudelivery.pt
                <br />
                Telefone: +351 210 123 456
              </p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500 text-center">© 2023 Manu Delivery. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
