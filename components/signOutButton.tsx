"use client"
import { Button } from "@nextui-org/button"
import { signOut } from "next-auth/react"


export default function SignOutButton() {
  return (
    <Button onClick={() => signOut()}>Sign out</Button>
  )
}

