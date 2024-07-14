import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import argon2 from "argon2"
import { db } from "@/db/index"
import { InsertInventory, inventory } from "@/db/schema"

export default function CreateItem() {
  return (
    <>
      <h1>Signup page</h1>
      <form action={
        async (data) => {
          "use server"
          console.log(data)

          const item: InsertInventory = {
            item_name: data.get("item_name") as string,
            quantity: Number(data.get("quantity")),
            threshold: Number(data.get("threshold")),

          }
          const newItem = await db.insert(inventory).values(item).returning({ itemId: inventory.id })
        }

      }>
        <Input name="item_name" type="text" label="Item name" placeholder="" />
        <Input name="quantity" type="number" label="Quantity" placeholder="" />
        <Input name="threshold" type="number" label="Threshold" placeholder="" />
        <Button type="submit" >Create account</Button>
      </form>
    </>
  )
}
