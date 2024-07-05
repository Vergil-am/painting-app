import { auth } from "@/auth"
import { createOrder } from "@/lib/actions/orders"
import { Button } from "@nextui-org/button"


async function page() {
    const session = await auth()
    async function  handleOrder(data: any) {
        "use server"
        const res = await createOrder(
            {
                client_id: session?.user?.id,
                status: "pending",
            }
        )

        
    }
  return (
    <>
      <div className="">
        Place holder
      </div>
    {/* <form action={handleOrder}> */}
    {/*   {session && */}
    {/*   <Button type="submit">Order now</Button> */}
    {/*   } */}
    {/* </form> */}
    </>
  )
}

export default page
