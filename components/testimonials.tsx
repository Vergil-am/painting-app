
import React from 'react'
import TestimonialCard from './testimonialCard'

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        What Our Customers Say
      </h1>

      <div className="container px-4 md:px-6 lg:grid-cols-3 lg:gap-10 py-32">
        <p className='text-center'>
          No reviews yet—be the first to share your experience!
        </p>
      </div>
      {/* <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10 py-32"> */}
      {/* <TestimonialCard name='Sarah L.' testimonial='A wonderful experience! The kit was easy to use and the results were fantastic!' /> */}
      {/* <TestimonialCard name='Mike D.' testimonial='Perfect for a fun night in with friends. The instructions were clear and the materials high-quality.' /> */}
      {/* </div> */}
      <div className="flex justify-center w-full pb-32">
        <p className='text-muted-foreground md:text-xl'>
          We love hearing from our customers! Here's what they have to say about their experience with us.
        </p>
      </div>
    </section>

  )
}


