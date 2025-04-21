import Link from "next/link"

export function CategoryScroll() {
  const categories = [
    { id: "beers", name: "Beers", icon: "🍺" },
    { id: "wines", name: "Wines", icon: "🍷" },
    { id: "spirits", name: "Spirits", icon: "🥃" },
    { id: "mushrooms", name: "Mushrooms", icon: "🍄" },
    { id: "sodas", name: "Sodas", icon: "🥤" },
    { id: "water", name: "Water", icon: "💧" },
    { id: "snacks", name: "Snacks", icon: "🍿" },
  ]

  return (
    <div className="flex overflow-x-auto pb-2 gap-3 hide-scrollbar">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.id}`} className="flex-shrink-0 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
            {category.icon}
          </div>
          <span className="mt-1 text-xs">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}
