import { getUser } from "@/lib/actions/clients"
import argon2 from "argon2"

export async function POST(req: Request) {
    const {email, password} =await req.json()

    const user = await getUser(email)
    if (!user) {
        throw new Error("Email or password wrong")
    }
    const verify = await argon2.verify(user.password, password)
    if (verify) {
    return Response.json(user)
    } else {
        throw new Error("Email or passowrd wrong")
    }
}