import { getOrderById } from "@/lib/actions/orders"

export default async function PaymentPage({ params }: { params: { orderId: string } }) {
  const { orderId } = params

  const order = await getOrderById(orderId[0])
  console.log(order)

  return (
    <>
      <div>PaymentPage : {orderId}</div>
    </>

  )
}

