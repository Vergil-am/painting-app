"use server"
import { db } from "@/db/index"
import { InsertInventory, SelectInventory, inventory } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getInventory() {
  try {
    const items = await db.select().from(inventory).execute()

    return items
  } catch (e) {
    return []
  }
}


export async function addInventory(item: InsertInventory) {
  try {
    const newItem = await db.insert(inventory).values(item).returning({ insertedId: inventory.id }).execute()
    return newItem
  } catch (e) {
    return []
  }

}


export async function deleteItem(id: string) {
  try {
    db.delete(inventory).where(eq(inventory.id, id)).execute()
  } catch (e) {
    return
  }
}


// export async function getItem(id: number) {
//     try {
//         const item = await db.select().from(inventory).where(eq(inventory.id, id)).execute()
//         console.log(item)
//         return item
//     } catch (e) {
//         console.log(e)
//     }
// }
