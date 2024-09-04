import { auth } from "@/auth";
import Contact from "@/components/contact";
import KitItem from "@/components/kit-item";
import NewsLetter from "@/components/newsletter";
import ShopNowButton from "@/components/shop-now-button";
import Steps from "@/components/steps";
import Testimonials from "@/components/testimonials";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default async function Home() {
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to Pottery-Shop A place where creativity meets fun.
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Sip, paint, and create lasting memories with your loved ones.
            </p>
            <div className="flex justify-around">
              <Button variant="bordered" as={Link} href="/shop">
                Buy Our Kits Online
              </Button>
              <Button variant="light" as={Link} href="/reservation">
                Reserve a Table
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[60dvh] py-12 md:py-24 lg:py-32 bg-[url('https://generated.vusercontent.net/placeholder.svg')] bg-center rounded-lg flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" >Explore Our Pottery Items</h1>
        <p className="text-muted-foreground md:text-xl">Pick from a wide variety of pottery pieces ready for your artistic touch.</p>
        <Button variant="faded">Explore Pottery</Button>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Our pottery kit includes
        </h1>
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-4 lg:gap-10">
          <KitItem image="https://cdn-icons-png.flaticon.com/512/9607/9607438.png" text="Pottery piece" />
          <KitItem image="https://cdn-icons-png.freepik.com/512/16350/16350557.png" text="Paint set" />
          <KitItem image="https://cdn-icons-png.freepik.com/512/1313/1313511.png" text="Brushes" />
          <KitItem image="https://cdn-icons-png.freepik.com/512/2618/2618630.png" text="instructions" />
        </div>
      </section>
      <Steps />
      <Testimonials />
      <Contact />
      <NewsLetter />
    </div>

  );
}
