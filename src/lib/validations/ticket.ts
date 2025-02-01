import { z } from "zod";

export const ticketSchema = z.object({
    id: z
        .string({
            invalid_type_error: "Invalid type Expected string",
            required_error: "This field is required",
        })
        .uuid("Invalid UUID"),
    firstName: z
        .string({
            invalid_type_error: "Invalid type Expected string",
            required_error: "This field is required",
        })
        .min(2, "First name must be at least 2 characters long")
        .max(100, "First name must be at most 100 characters long"),
    lastName: z
        .string({
            invalid_type_error: "Invalid type Expected string",
            required_error: "This field is required",
        })
        .min(2, "Last name must be at least 2 characters long")
        .max(100, "Last name must be at most 100 characters long"),
    email: z
        .string({
            invalid_type_error: "Invalid type Expected string",
            required_error: "This field is required",
        })
        .email("Invalid email address"),
    phone: z
        .string({
            invalid_type_error: "Invalid type Expected string",
            required_error: "This field is required",
        })
        .regex(/^\+?[0-9]*$/, "Invalid phone number"),
    message: z
        .string({
            invalid_type_error: "Invalid type Expected string",
            required_error: "This field is required",
        })
        .min(10, "Message must be at least 10 characters long")
        .max(2000, "Message must be at most 2000 characters long"),
    createdAt: z.date({
        invalid_type_error: "Invalid type Expected date",
        required_error: "This field is required",
    }),
    updatedAt: z.date({
        invalid_type_error: "Invalid type Expected date",
        required_error: "This field is required",
    }),
});

export const createTicketSchema = ticketSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export type Ticket = z.infer<typeof ticketSchema>;
export type CreateTicket = z.infer<typeof createTicketSchema>;
