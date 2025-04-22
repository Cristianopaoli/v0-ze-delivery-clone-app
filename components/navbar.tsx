"use client"

import { Home, Search, ShoppingBag, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Início", href: "/home" },
    { icon: Search, label: "Explorar", href: "/explore" },
    { icon: ShoppingBag, label: "Pedidos", href: "/orders" },
    { icon: User, label: "Perfil", href: "/profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-10">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        return (
          <Link key={item.href} href={item.href} className="flex flex-col items-center">
            <item.icon className={`h-6 w-6 ${isActive ? "text-yellow-500" : "text-gray-500"}`} />
            <span className={`text-xs mt-1 ${isActive ? "text-yellow-500 font-medium" : "text-gray-500"}`}>
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
