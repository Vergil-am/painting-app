"use server"
import { client, db } from "@/db/index"
import { InsertClient, clients } from "@/db/schema"
import { eq } from "drizzle-orm"


export async function createUser(user: InsertClient) {
  try {
    const newUser = db.insert(clients).values(user).returning({ name: clients.name }).execute()
    console.log(newUser)
    return newUser
  } catch (e) {
    return
  }
}


export async function getUser(email: string) {
  try {
    const user = await db.select().from(clients).where(eq(clients.email, email)).execute()
    return user[0]
  } catch (e) {
    return
  }

}

export async function getUserById(id: string) {
  try {
    const user = await db.select().from(clients).where(eq(clients.id, id)).execute()
    return user[0]
  } catch (e) {
    return
  }

}

export async function getAllUsers() {
  try {
    const users = await db.select().from(clients).execute()
    return users
  } catch (e) {
    return
  }

}

export async function deleteUser(id: string) {
  try {
    db.delete(clients).where(eq(clients.id, id)).execute()
  } catch (e) {
    return
  }
}
