"use server"
import { db } from "@/db/index"
import { InsertOrder, SelectOrder, orders } from "@/db/schema"
import { getUserById } from "./clients"
import { SendSMS } from "./twillio"
import { eq, or } from "drizzle-orm"

export async function createOrder(order: InsertOrder) {
  try {
    const newOrder = await db.insert(orders).values(order).returning({
      name: orders.name,
      address: orders.address,
      email: orders.email,
      phone: orders.phone,
      order_nmber: orders.id,
      created_at: orders.created_at
    }).execute()

    await SendSMS(order.phone, `Dear: ${order.name} your order number : ${newOrder[0].order_nmber} has been created ${newOrder[0].created_at}`)
    // const user = await getUserById(order.client_id as string)
    // if (user) {
    //   await SendSMS(user?.phone, `your order number : ${newOrder[0].order_nmber} has been created ${newOrder[0].created_at}`)
    // }
    return newOrder
  } catch (e) {
    return
  }
}

export async function getOrderById(id: string) {
  try {
    const order = await db.select().from(orders).where(eq(orders.id, id))

    return order

  } catch (e) {
    return
  }
}
