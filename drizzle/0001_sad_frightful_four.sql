ALTER TABLE "tickets" ADD COLUMN "first_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "last_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "name";