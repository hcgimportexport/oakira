import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const tickets = pgTable("tickets", {
    id: uuid("id").primaryKey().notNull().unique().defaultRandom(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
