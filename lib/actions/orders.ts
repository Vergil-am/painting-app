"use server"
import { db } from "@/db/index"
import { InsertOrder, orders } from "@/db/schema"
import { SendSMS } from "./twillio"
import { eq } from "drizzle-orm"

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
    console.log(newOrder)

    // await SendSMS(order.phone, `Dear: ${order.name} your order number : ${newOrder[0].order_nmber} has been created ${newOrder[0].created_at}`)
    //
    // const user = await getUserById(order.client_id as string)
    // if (user) {
    //   await SendSMS(user?.phone, `your order number : ${newOrder[0].order_nmber} has been created ${newOrder[0].created_at}`)
    // }
    return newOrder
  } catch (e) {
    console.log(e)
    return
  }
}

export async function getOrderById(id: string) {
  try {
    const order = await db.select().from(orders).where(eq(orders.id, id)).execute()
    return order[0]

  } catch (e) {
    return
  }
}

export async function getOrdersByUser(userId: string) {
  try {
    return await db.select().from(orders).where(eq(orders.client_id, userId))
  } catch (e) {
    return
  }
}

export async function getAllOrders() {
  try {
    return await db.select().from(orders).execute()

  } catch (e) {
    return
  }
}

export async function deleteOrder(id: string) {
  try {
    db.delete(orders).where(eq(orders.id, id)).execute()
  } catch (e) {
    return
  }
}


export async function payOrder(id: string) {
  try {
    db.update(orders).set({ status: "paid" }).where(eq(orders.id, id))
  } catch (e) {
    return
  }
}
