"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/cn"





export default function AccountSideBar({ items }: any) {
  const pathname = usePathname()
  console.log(pathname)
  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
            item.disabled && "cursor-not-allowed opacity-60",
            pathname === item.href
              ? "font-medium  bg-primary-900 text-background"
              : "text-muted-foreground"
          )}
          target={item.external ? "_blank" : ""}
          rel={item.external ? "noreferrer" : ""}
        >
          {item.title}
          {item.label && (
            <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
              {item.label}
            </span>
          )}
        </Link>

      ))}
    </div>
  ) : null
}
