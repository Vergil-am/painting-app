import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import argon2 from "argon2"
import { db } from "@/db/index"
import { clients } from "@/db/schema"
import Link from "next/link"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { InsertClient } from "@/db/schema"

export default async function SignUp() {
//  const session = await auth()
 // if (session) {
   // redirect("/")
  //}
  return (
    <section className="container flex justify-center items-center h-[80dvh]">
      <div className="space-y-4 text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Create your account
        </h1>
        <p className="text-muted-foreground md:text-xl text-center">
          Or <Link
            href="/auth/signin"
            className="text-foreground font-bold hover:underline"
          >
            Sign In
          </Link>
          <span> </span>
          to an existing account
        </p>
        <form
          className="flex flex-col gap-8"
          action={async (data) => {
            "use server"
            console.log(data)
            const password = await argon2.hash(data.get("password") as string)
            console.log(password)

            const user: InsertClient = {
              name: data.get("name") as string,
              email: data.get("email") as string,
              password: password,
              phone: data.get("phone") as string,
              address: data.get("address") as string
            }

            const newUser = await db.insert(clients).values(user).returning({ userId: clients.id })
            console.log(newUser)
          }}
        >
          <Input name="name" type="text" label="Name" placeholder="Enter your full name" />
          <Input name="email" type="email" label="Email" placeholder="Enter your email" />
          <Input name="password" type="text" label="password" placeholder="Enter your password" />
          <Input name="phone" type="text" label="Phone" placeholder="Enter your phone number" />
          <Input name="address" type="text" label="Address" placeholder="Enter your adress" />
          <Button type="submit" >Create account</Button>
        </form>
      </div>
    </section>
  )
}
