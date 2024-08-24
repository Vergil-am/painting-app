import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import Link from "next/link"
export default function Shop() {
  return (
    <div className="container">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Shop Pottery Kit
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Bring the pottery painting fun home with our all-inclusive kit.
            </p>
            <Link
              href="/shop/details"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Order Now
            </Link>
          </div>
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width={800}
            height={600}
            alt="Pottery Hero"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width={800}
            height={600}
            alt="Pottery Hero"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Product details
            </h1>
            <div className="flex gap-8 ">
              <p className="text-muted-foreground md:text-xl">
                Kit Includes:
              </p>
              <ul className="list-disc">
                <li>A pottery piece.</li>
                <li>Paint set Brushes.</li>
                <li>Easy-to-follow instructions.</li>
              </ul>
            </div>
            <p className="text-muted-foreground md:text-xl">
              Price : 29.99$
            </p>
            <Link
              href="/shop/details"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Add to cart
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 container ">
        <div className="space-y-4 text-center lg:text-left w-full flex flex-col items-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
            In-Store Pickup Available
          </h1>
          <p className="text-muted-foreground md:text-xl text-center">
            Prefer to pick up your kit in person? Select in-store pickup at checkout and visit us at our location.<br />
            23 Art Lane, Creativity City, ST 12345.<br />
            Business hours: Mon-Sat 10 AM - 8 PM, Sun 12 PM - 6 PM.
          </p>
        </div>
      </section>
    </div>

  )
}
