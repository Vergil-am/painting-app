import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import argon2 from "argon2"
import {db} from "@/db/index"
import {clients} from "@/db/schema"

export default function page() {
  return (
    <>
    <h1>Signup page</h1>
    <form action={
      async (data) => {
        "use server"
        console.log(data)
        const password = await argon2.hash(data.get("password") as string)
        console.log(password)
      
        const newUser = await db.insert(clients).values({
          name: data.get("name") ,
          email : data.get("email") ,
          password : password,
          phone : data.get("phone"),
          address: data.get("address")
        }).returning({userId: clients.id})
      }
    }>
    <Input name="name" type="text" label="Name" placeholder="Enter your full name" />
    <Input name="email" type="email" label="Email" placeholder="Enter your email" />
    <Input name="password" type="text" label="password" placeholder="Enter your password" />
    <Input name="phone" type="text" label="Phone" placeholder="Enter your phone number" />
    <Input name="address" type="text" label="Address" placeholder="Enter your adress" />
    <Button type="submit" >Create account</Button>
    </form>
</>
  )
}
