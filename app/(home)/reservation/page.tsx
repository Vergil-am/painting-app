import ReservationForm from "@/components/ReservationForm";
import { Input } from "@nextui-org/input";

export default function Reservation() {
  return (
    <section className="h-[80dvh] flex flex-col justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-5">
        Make a Reservation
      </h1>
      <ReservationForm />
    </section>
  )
}


