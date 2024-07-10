import React from 'react'
import QuestionsAccordion from '@/components/questionsAccordion'


const questions = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days."
  },
  {
    question: "Can I return a take-home kit?",
    answer: "Unopened kits can be returned within 30 days for a full refund."
  }
]
export default function ShippingAndReturns() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-20  lg:py-32 h-[80dvh]">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mt-12 space-y-8">
        <QuestionsAccordion questions={questions} />

        <div className="flex justify-center">
          {/* <Button className="mt-8">Order Now</Button> */}
        </div>
      </div>
    </section>
  )
}

