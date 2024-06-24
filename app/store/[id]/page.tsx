import { auth } from "@/auth"
import { createOrder } from "@/lib/actions/orders"
import { Button } from "@nextui-org/button"


async function page({params} : {params: {id: string}}) {
    const {id} = params
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
    <div>
    <div>Item : {id}</div>
    <form action={handleOrder}>
      {session &&
      <Button type="submit">Order now</Button>
      }
    </form>
    </div>
  )
}

export default page