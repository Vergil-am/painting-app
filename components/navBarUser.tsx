"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown"
import { Button } from "@nextui-org/button"
import { UserIcon } from "./icons"
import { Link } from "@nextui-org/link"

export default function NavBarUser() {
  const session = useSession()
  console.log(session)

  switch (session.status) {

    case "loading": return (
      <div>loading ...</div>
    )

    case "authenticated": return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            isIconOnly
            className="bg-foreground-500 p-1 rounded-full"
          >
            <UserIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">

          <DropdownItem as={Link} href="/account" key="new" className="text-foreground text-center">Account</DropdownItem>
          <DropdownItem
            variant="light"
            as={Button}
            onClick={() => signOut()}
            key="delete"
            className="text-danger"
            color="danger">
            Sign out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
    case "unauthenticated": return (
      <Button
        variant="ghost"
        onClick={() => signIn()}
      >
        SignIn
      </Button>
    )

  }


}

