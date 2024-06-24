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
                client_id: "3703b4b1-8b6e-4bc6-b594-236a1794100f",
                status: "pending",
            }
        )

        
    }
  return (
    <div>
    <div>Item : {id}</div>
    <form action={handleOrder}>
    <Button type="submit">Order now</Button>
    </form>
    </div>
  )
}

export default page