
"use client"
import { Button } from "@nextui-org/button"
import { signIn } from "next-auth/react"

function SignInButton() {
  return (
    <Button onClick={() => signIn()}>Sign in</Button>
  )
}

export default SignInButton
