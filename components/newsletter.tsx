import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React from 'react'
import { SubmitIcon } from './icons'

export default function NewsLetter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Stay Updated
      </h1>
      <p className=" mx-auto text-muted-foreground md:text-xl/relaxed text-center py-8">
        Sign up for our newsletter to receive updates on new products, events, and special offers.
      </p>
      <div className="flex justify-center w-full pb-32">
        <Input className='w-[500px]' type='email' placeholder='test@email.com' />
        <Button color='success' endContent={<SubmitIcon />}>Submit</Button>
      </div>
    </section>
  )
}

