
import { auth, signIn } from '@/auth'
import OrdersTable from '@/components/OrdersTable'
import { SelectOrder } from '@/db/schema'
import { getOrdersByUser } from '@/lib/actions/orders'
export default async function Orders() {
  const session = await auth()
  if (session == null) {
    signIn()
  }

  const orders = await getOrdersByUser(session?.user?.id as string)
  console.log(orders)
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>

      //@ts-ignore
      <OrdersTable orders={orders != undefined ? orders : []} />
    </div>
  )
}


