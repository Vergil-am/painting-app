"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown"
import { Button } from "@nextui-org/button"
import { HamburgerMenuIcon, UserIcon } from "./icons"
import { Link } from "@nextui-org/link"
import { useTheme } from "next-themes"

export default function NavBarUser() {
  const { theme } = useTheme()

  console.log(theme)
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
            variant="light"
            isIconOnly
            className=" w-20 p-2 justify-between"
          >
            <UserIcon fill={theme == "dark" ? "#A5EEFD" : "#053B48"} />
            <HamburgerMenuIcon stroke={theme == "dark" ? "#A5EEFD" : "#053B48"} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">

          <DropdownItem as={Link} href="/account" key="new" className="text-foreground text-center">Account</DropdownItem>
          <DropdownItem as={Link} href="/admin" key="new" className="text-foreground text-center">Admin</DropdownItem>
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

