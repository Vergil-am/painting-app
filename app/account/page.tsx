import { auth } from "@/auth";
import ChangePassword from "@/components/change-password-form";
import { db } from "@/db";
import { clients } from "@/db/schema";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { eq } from "drizzle-orm";

export default async function Account() {
  const session = await auth()
  const user = await db.query.clients.findFirst({
    columns: {
      password: false
    },
    where: eq(clients.id, session?.user?.id as string)
  })
  console.log(user)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Manage Your Profile</h3>
        <p className="text-sm text-muted-foreground">
          Update your personal information, address, and preferences.
        </p>
      </div>

      {user &&
        <form className="flex flex-col gap-4 items-center w-full">
          <Input
            isReadOnly
            variant="bordered"
            size="sm"
            label="Name"
            defaultValue={user.name}
          />
          <Input
            type="Email"
            size="sm"
            variant="bordered"
            label="email"
            defaultValue={user.email}
          />
          <Input
            type="text"
            size="sm"
            variant="bordered"
            label="Phone number"
            defaultValue={user.phone}
          />
          <Input
            type="text"
            label="Address"
            size="sm"
            variant="bordered"
            defaultValue={user.address}
          />
          <ChangePassword />
          <div className="flex justify-end gap-2 w-full">
            <Button
              color="danger"
              variant="light"
              type="reset">Cancel</Button>
            <Button
              className="bg-foreground text-background"
              type="submit">Save</Button>
          </div>
        </form>
      }
    </div>
  )
}

