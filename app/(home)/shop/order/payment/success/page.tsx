

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col justify-center text-center h-[90dvh]">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Thank You</h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Your order was completed successfully</h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">A text message was sent to your phone number including the details about your order.</p>
      <p className="text-lg font-semibold">Thank you for shopping with us.</p>
    </div>
  )
}


