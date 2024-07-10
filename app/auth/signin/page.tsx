import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { auth, signIn } from "@/auth"
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function page({ searchParams }
  : { searchParams: { callbackUrl: string | undefined } }) {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm(); 
  const { callbackUrl } = searchParams
  const session = await auth()
  if (session) {
    redirect(callbackUrl || "/")
  }

  const handleSubmit = async (data: FormData) => {
    "use server"
    const user = await signIn("credentials",
      {
        email: data.get("email"),
        password: data.get("password"),
        redirectTo: callbackUrl || "/"
      }
    )



  }

  return (
    <section className="container flex justify-center items-center h-[80dvh]">
      <div className="space-y-4 text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Sign In to your account
        </h1>
        <p className="text-muted-foreground md:text-xl text-center">
          Or <Link
            href="/auth/signup"
            className="text-foreground font-bold hover:underline"
          >
            Sign up
          </Link>
          <span> </span>
          for a new account
        </p>
        <form
          className="flex flex-col gap-8"
          action={handleSubmit}
        >
          <Input name="email" label="Email" type="email" placeholder="test@email.com" />
          <Input name="password" label="Password" type="password" placeholder="******" />

          <Button type="submit">SignIn</Button>
        </form>
      </div>
    </section>
  )
}
