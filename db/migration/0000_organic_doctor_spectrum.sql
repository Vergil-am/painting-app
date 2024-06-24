CREATE TABLE IF NOT EXISTS "clients" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"phone" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inventory" (
	"id" integer PRIMARY KEY NOT NULL,
	"item_name" text,
	"quantity" integer,
	"threshold" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notifications" (
	"id" integer PRIMARY KEY NOT NULL,
	"order_id" integer,
	"message" text,
	"sent_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" integer PRIMARY KEY NOT NULL,
	"client_id" integer,
	"status" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transactions" (
	"id" integer PRIMARY KEY NOT NULL,
	"client_id" integer,
	"items" text,
	"purchase_type" text,
	"purchase_date" timestamp,
	"status" text
);
