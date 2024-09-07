import { Button } from "@nextui-org/button"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { Link } from "@nextui-org/link"



export default function Shop() {
  return (
    <div className="container">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Can't make it to the shop?
            </h1>
            <p className="text-muted-foreground md:text-xl">
              No problem! Bring the pottery painting experience home with our kits
            </p>
            {/* <Button variant="bordered" as={Link} href="/shop/order"> */}
            {/*   Buy Our Kits Online */}
            {/* </Button> */}
            {/* <OrderButton /> */}
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
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Available kits</h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 my-4 text-center">Ready-Made Kits:</h2>
        <div className="flex flex-wrap gap-16 justify-between ">
          <Card className="w-96" isFooterBlurred>
            <CardHeader className="flex-col">
              <h1 className=" scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">
                Ready-Made Mug Kit
              </h1>
              <p className="text-sm text-muted-foreground text-center">Everything you need to paint a mug at home. No need to send it back—just enjoy!</p>
            </CardHeader>
            <CardBody>
              <img src="https://generated.vusercontent.net/placeholder.svg" />
            </CardBody>
            <CardFooter className="justify-between px-6">
              <h1 className=" scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">$20.00</h1>
              <Button >Buy now</Button>
            </CardFooter>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 my-4 text-center">Kits Requiring Glazing:</h2>
        <div className="flex flex-wrap gap-16 justify-between">
          <Card className="w-96">
            <CardHeader className="flex-col">
              <h1 className=" scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">
                Glazing Kit
              </h1>
              <p className="text-sm text-muted-foreground text-center">Paint your pottery at home, then send it back to us for glazing. We'll ship it back to you once it's ready!</p>
            </CardHeader>
            <CardBody>
              <img src="https://generated.vusercontent.net/placeholder.svg" />
            </CardBody>
            <CardFooter className="justify-between px-6 ">
              <h1 className=" scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">$25.00</h1>
              <Button className="self-end">Buy now</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="h-[80dvh] flex flex-col justify-center">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How does it work?</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Order your kit, and we'll deliver it with everything you need to create at home <br />
              If you choose a glazing kit:
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg shadow-sm">
              {/* <SearchIcon className="h-12 w-12 text-primary" /> */}
              <h3 className="font-semibold">Painting</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                paint your piece
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg shadow-sm">
              {/* <ShoppingCartIcon className="h-12 w-12 text-primary" /> */}
              <h3 className="font-semibold">Shipping</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                send it back to us
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg shadow-sm">
              {/* <TruckIcon className="h-12 w-12 text-primary" /> */}
              <h3 className="font-semibold">Glazing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                and we'll handle the rest
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="bordered" size="lg">
              Shop All Kits
            </Button>
          </div>
        </div>
      </section>
    </div >

  )
}
