import Linechart from "@/components/admin/charts/lineChart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { ChevronRight, DollarSign, Package, ShoppingCart, Users2 } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="container m-8 flex flex-col gap-16">
      <section className="flex flex-wrap gap-8 justify-around">
        <Link href="/admin/customers">
          <Card className="w-56 h-32">
            <CardHeader className="flex justify-center gap-4">

              <Users2 />

              <h1 className="text-xl font-semibold leading-none tracking-tight">
                Customers
              </h1>

              <ChevronRight />
            </CardHeader>
            <CardBody className="justify-center items-center">

              <h1 className="text-4xl font-semibold leading-none tracking-tight">
                200
              </h1>

            </CardBody>
          </Card>
        </Link>

        <Link href="/admin/inventory">
          <Card className="w-56 h-32">
            <CardHeader className="flex justify-center gap-4">
              <Package />

              <h1 className="text-xl font-semibold leading-none tracking-tight">
                Inventory
              </h1>

              <ChevronRight />
            </CardHeader>
            <CardBody className="justify-center items-center">

              <h1 className="text-4xl font-semibold leading-none tracking-tight">
                100
              </h1>
            </CardBody>
          </Card>
        </Link>

        <Link href="/admin/orders">
          <Card className="w-56 h-32">
            <CardHeader className="flex justify-center gap-4">
              <ShoppingCart />

              <h1 className="text-xl font-semibold leading-none tracking-tight">
                Orders
              </h1>
              <ChevronRight />
            </CardHeader>
            <CardBody className="justify-center items-center">
              <h1 className="text-4xl font-semibold leading-none tracking-tight">
                346
              </h1>
            </CardBody>
          </Card>
        </Link>
        <Card className="w-56 h-32">
          <CardHeader className="flex justify-center gap-4">
            <DollarSign />

            <h1 className="text-xl font-semibold leading-none tracking-tight">
              Revenue
            </h1>

          </CardHeader>
          <CardBody className="justify-center items-center ">
            <h1 className="text-4xl font-semibold leading-none tracking-tight">$3699</h1>
          </CardBody>
        </Card>
      </section>
      <section className="w-full flex justify-center">
        <Linechart />
      </section>
    </div>
  )
}

