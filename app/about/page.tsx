import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function About() {
  return (
    <div className="container">
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
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                At Our Shop,
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                we believe in the joy of creating together.
                Whether you're painting your first mug or glazing a masterpiece,
                our space is designed to inspire creativity in a relaxed,
                welcoming atmosphere.
              </p>
              <p className="text-xl text-muted-foreground">Come and enjoy a cup of coffee while you unleash your inner artist.</p>
            </div>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Ready to create? Reserve your table now!
            </h2>
            <Button variant="ghost" as={Link} href="/reservation">
              Reserve a Table
            </Button>
          </div>
        </div>

      </section>
    </div>
  )
}

