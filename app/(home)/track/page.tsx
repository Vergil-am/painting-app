import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
export default function Track() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 container ">
      <div className="space-y-4 text-center lg:text-left w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          Track you order
        </h1>
        <p className="text-muted-foreground md:text-xl text-center">
          Enter your order number and email address to see the status of your order.
        </p>
        <div className="flex flex-col gap-4 py-12 w-[500px] items-center">
          <Input placeholder="test" type="text" label="Order number" labelPlacement="outside" isClearable />
          <Input placeholder="youremail@email.com" label="Email" type="email" labelPlacement="outside" isClearable />
          <Button size="lg">Track Order</Button>
        </div>
      </div>
    </section>

  )
}

