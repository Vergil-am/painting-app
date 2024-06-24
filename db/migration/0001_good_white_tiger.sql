ALTER TABLE "clients" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ALTER COLUMN "phone" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "password" text NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD CONSTRAINT "clients_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "clients" ADD CONSTRAINT "clients_phone_unique" UNIQUE("phone");