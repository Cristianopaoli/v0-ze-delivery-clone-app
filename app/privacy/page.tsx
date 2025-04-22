import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { PrivacyContent } from "@/components/privacy-content"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
        <Link href="/profile/settings">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">Política de Privacidade</h1>
      </div>

      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PrivacyContent />
        </div>
      </div>
    </div>
  )
}
