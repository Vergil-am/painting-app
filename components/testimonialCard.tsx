import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
export default function TestimonialCard({ name, testimonial }: { name: string, testimonial: string }) {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5 px-3">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          {testimonial}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
      </CardFooter>
    </Card>
  )
}

