import {db} from "@/db/index"
import {InsertOrder, SelectOrder, orders} from "@/db/schema"
import { getUserById } from "./clients"
import { SendSMS } from "./twillio"

export async function createOrder(order : InsertOrder) {
    try {
        const newOrder = await db.insert(orders).values(order).returning({
            order_nmber : orders.id,
            created_at: orders.created_at
        }).execute()
        const user = await getUserById(order.client_id as string)
        if (user) {
             await SendSMS(user?.phone, `your order number : ${newOrder[0].order_nmber} has been created ${newOrder[0].created_at}`)
        }
        return newOrder
    } catch(e) {
        return
    }
}