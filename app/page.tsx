import { auth } from "@/auth";
import Contact from "@/components/contact";
import KitItem from "@/components/kit-item";
import NewsLetter from "@/components/newsletter";
import ShopNowButton from "@/components/shop-now-button";
import Steps from "@/components/steps";
import Testimonials from "@/components/testimonials";

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
              Discover Your Inner Artist with Our Pottery Painting Kit.
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Everything you need to create beautiful pottery at home.
            </p>
            <ShopNowButton />
          </div>
        </div>
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
