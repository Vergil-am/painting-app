"use client"
import Link from "next/link"
import { Tooltip } from "@nextui-org/tooltip"
import {
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users2,
} from "lucide-react"
import { usePathname } from "next/navigation"

const items = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Dashboard",
    href: "/admin"
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    label: "Orders",
    href: "/admin/orders"
  },
  {
    icon: <Package className="h-5 w-5" />,
    label: "Inventory",
    href: "/admin/inventory"
  },
  {
    icon: <Users2 className="h-5 w-5" />,
    label: "Customers",
    href: "/admin/customers"
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    label: "Analytics",
    href: "/admin/analytics"
  },

]
export default function AdminSideBar() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {
          items.map((item) => {
            return (
              <Tooltip content={item.label} placement="right" key={item.label}>
                <Link
                  href={item.href}
                  className={pathname == item.href ? "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base" : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"}
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Link>
              </Tooltip>
            )
          })
        }


      </nav>
    </aside>
  )
}

