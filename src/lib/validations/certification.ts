import { z } from "zod";

export const ceritificationSchema = z.object({
    logoUrl: z
        .string({
            required_error: "Certification logo is required",
            invalid_type_error: "Certification logo must be a string",
        })
        .url("Image URL must be a valid URL"),
    name: z
        .string({
            required_error: "Certification name is required",
            invalid_type_error: "Certification name must be a string",
        })
        .min(3, "Certification name must be at least 3 characters long"),
    link: z
        .string({
            required_error: "Certification link is required",
            invalid_type_error: "Certification link must be a string",
        })
        .url("Certification link must be a valid URL"),
});

export type Certification = z.infer<typeof ceritificationSchema>;
