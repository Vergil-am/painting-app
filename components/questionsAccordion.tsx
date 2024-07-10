"use client"
import { Accordion, AccordionItem } from "@nextui-org/accordion"

export default function QuestionsAccordion({ questions }: { questions: { question: string, answer: string }[] }) {
  return (
    <Accordion selectionMode="multiple">
      {questions.map((question, index) => {
        return (
          <AccordionItem key={index} aria-label={`Accordion ${index}`} title={question.question}>
            {question.answer}
          </AccordionItem>
        )
      })}

    </Accordion>
  )
}

