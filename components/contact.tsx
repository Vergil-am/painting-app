import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import React from 'react'
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (

    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center py-12">
        Get in Touch</h1>
      <p className="text-muted-foreground text-center ">Have a question or want to work together? We&apos;d love to hear from you.</p>
      <div className='w-full flex flex-col items-center gap-4'>
        <div className='flex gap-2 items-center'>
          <img src='https://www.svgrepo.com/show/529714/map-point.svg'
            alt="Map pin icon"
            className='w-8 h-8'
          />
          <p>123 Art Lane, Creativity City, ST 12345</p>
        </div>
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='flex gap-2 items-center'>
          <img src='https://www.svgrepo.com/show/529758/phone-rounded.svg'
            className='w-8 h-8'
            alt='Phone icon'
          />
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex gap-2 '>
          <img src='https://www.svgrepo.com/show/529667/letter.svg'
            alt='Email icon'
            className='w-8 h-8'
          />
          <a href='mailto:contact@potterypainting.com'>contact@potterypainting.com</a>
        </div>
        <div className='flex flex-col items-center'>
          <Button
            as={Link}
            href={siteConfig.location}
          >Get Directions</Button>
        </div>
      </div>
    </section>
  )
}

