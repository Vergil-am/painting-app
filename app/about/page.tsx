import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function About() {
  return (
    <div className="container">
      <section className="w-full h-[80dvh] py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          At Our Shop
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 ">
          we believe in the joy of creating together.
          Whether you&apos;re painting your first mug or glazing a masterpiece,
          our space is designed to inspire creativity in a relaxed,
          welcoming atmosphere.
        </p>
        <p className="text-xl text-muted-foreground">Come and enjoy a cup of coffee while you unleash your inner artist.</p>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Ready to create? Reserve your table now!
        </h2>
        <Button variant="ghost" as={Link} href="/reservation">
          Reserve a Table
        </Button>

      </section>
    </div>
  )
}

