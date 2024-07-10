import QuestionsAccordion from "@/components/questionsAccordion"


const questions = [
  {
    question: "What are your business hours?",
    answer: "We are open Mon-Sat 10 AM - 8 PM, and Sun 12 PM - 6 PM."
  },
  {
    question: "Do I need to make a reservation?",
    answer: "Reservations are recommended but not required. Walk-ins are welcome based on availability."
  },
  {
    question: "What materials are included in the take-home kits?",
    answer: "Each kit includes a pottery piece, paint set, brushes, and instructions."
  },
]
export default function Questions() {
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

