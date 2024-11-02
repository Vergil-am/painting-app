import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

export default function SuccessPage() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 h-[80dvh]">
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Payment success</h1>
      <p className='text-lg font-semibold'>your order has been placed succeessfully.</p>
      <p className='text-lg font-semibold'>Thank you for shopping with us.</p>
      <Button as={Link} href='/orders'>My orders</Button>
    </div>
  )
}

