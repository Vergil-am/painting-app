import Link from "next/link"
export default function ShopNowButton() {
  return (
    <Link
      href="/shop"
      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      prefetch={false}
    >
      Shop Now
    </Link>
  )
}

