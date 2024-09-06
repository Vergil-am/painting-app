import { Button } from "@nextui-org/button"
import { Card, CardHeader, CardFooter } from "@nextui-org/card"
import { Link } from "@nextui-org/link"


const items = [
  {
    title: "Mug",
    img: "https://jpp.trgcdn.com/media/catalog/product/x/p/xp8435.png",
    description: "A classic choice for your morning coffee. Personalize it with your own design.",
    price: "$15.00"
  },
  {
    title: "Plate",
    img: "https://shop.luzerne.com/cdn/shop/products/marble-round-coupe-plate-1-standard-2_09c2ffa3-891e-41da-9bc7-81a1fa9b0f6e.png?v=1716188861",
    description: "A classic choice for your dinner. Personalize it with your own design.",
    price: "$25.00"
  },
  {
    title: "Jug",
    img: "https://img.freepik.com/free-photo/black-textured-ceramic-jug-vase-wooden-table_53876-125910.jpg",
    description: "A classic choice for your drinks. Personalize it with your own design.",
    price: "$55.00"
  },
]
export default function Explore() {
  return (
    <div>
      <p className="text-lg font-semibold my-6">
        Choose from a wide variety of pottery items,
        each waiting for your creative touch.<br />
        Whether it&apos;s a mug, plate, or vase,
        you&apos;ll find the perfect canvas here.
      </p>
      <section className="flex flex-wrap gap-6 my-6">
        {
          items.map((item) => {
            return (
              <Card
                isFooterBlurred
                key={item.title}>
                <CardHeader className="flex justify-center">
                  <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
                    {item.title}</h2>
                </CardHeader>
                <img
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.img}
                  width={270}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-foreground/80">{item.description}</p>
                  <Button className="text-tiny text-white bg-black/20" variant="flat" disabled color="default" radius="lg" size="sm">
                    {item.price}
                  </Button>
                </CardFooter>
              </Card>
            )
          })
        }
      </section>
      <section className="my-6 flex justify-between">
        <p className="text-xl text-muted-foreground">Explore our full selection when you visit!</p>
        <Button variant="faded" as={Link} href="/reservation">Reserve a Table to Paint</Button>
      </section>
    </div>

  )
}


