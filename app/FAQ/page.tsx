import QuestionsAccordion from "@/components/questionsAccordion";
import { Button } from "@nextui-org/button";

const questions = [
  {
    question: "What pottery items do you offer for painting?",
    answer: "Not answered yet"
  },
  {
    question: "How do I book a table or session?",
    answer: "Not answered yet"
  },
  {
    question: "Is there a minimum age requirement for children?",
    answer: "Not answered yet"
  },
  {
    question: "What should I expect during my visit?",
    answer: "Not answered yet"
  }, {
    question: "How does the shipping process work for items?",
    answer: "Not answered yet"
  }, {
    question: "What payment methods do you accept?",
    answer: "Not answered yet"
  }, {
    question: "How can I provide feedback or reviews?",
    answer: "Not answered yet"
  }, {
    question: "Are there any special events or classes offered?",
    answer: "Not answered yet"
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Not answered yet"
  },
  {
    question: `What if I have a question that’s not listed here?`,
    answer: "Not answered yet"
  },


]
export default function FAQ() {
  return (
    <div className="container flex flex-col items-center py-12">
      <QuestionsAccordion questions={questions} />
      <div className="flex flex-col items-center">
        <p>Still have questions? Reach out to us directly!</p>
        <Button>Contact Us</Button>
      </div>
    </div>
  )
}

