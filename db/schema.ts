import {integer, pgTable, text, timestamp, serial, uuid} from "drizzle-orm/pg-core"
export const clients = pgTable(
    "clients", {
        id: uuid("id").primaryKey().defaultRandom(),
        name: text("name").notNull(),
        password: text("password").notNull(),
        address: text("address").notNull(),
        email: text("email").notNull().unique(),
        phone: text("phone").notNull().unique()
    },
)

export type InsertClient = typeof clients.$inferInsert;
export type SelectClient = typeof clients.$inferSelect

export const inventory = pgTable(
    "inventory", {
        id: uuid("id").primaryKey().defaultRandom(),
        item_name: text("item_name"),
        quantity: integer("quantity"),
        threshold: integer("threshold")
    },
)

export type InsertInventory= typeof inventory.$inferInsert;
export type SelectInventory= typeof inventory.$inferSelect


export const notifications = pgTable(
    "notifications", {
        id: uuid("id").primaryKey().defaultRandom(),
        order_id: uuid("order_id"),
        message : text("message"),
        sent_at : timestamp("sent_at").defaultNow()
    },
)

export type InsertNotification = typeof notifications.$inferInsert;
export type SelectNotification = typeof notifications.$inferSelect

export const orders = pgTable(
    "orders", {
        id: uuid("id").primaryKey().defaultRandom(),
        client_id: uuid("client_id"),
        status: text("status"),
        created_at: timestamp("created_at").defaultNow(),
        updated_at: timestamp("updated_at").defaultNow()
    },
)

export type InsertOrder = typeof orders.$inferInsert;
export type SelectOrder = typeof orders.$inferSelect


export const transactions = pgTable(
    "transactions", {
        id: uuid("id").primaryKey().defaultRandom(),
        client_id : uuid("client_id"),
        items: text("items"),
        purchase_type: text("purchase_type"),
        purchase_date: timestamp("purchase_date").defaultNow(),
        status: text("status")
    },
)


export type InsertTransaction = typeof transactions.$inferInsert;
export type SelectTransaction = typeof transactions.$inferSelect