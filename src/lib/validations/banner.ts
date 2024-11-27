import { z } from "zod";

export const bannerSchema = z.object({
    title: z
        .string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        })
        .min(3, "Title must be at least 3 characters long"),
    description: z
        .string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        })
        .min(3, "Description must be at least 3 characters long"),
    imageUrl: z
        .string({
            required_error: "Image URL is required",
            invalid_type_error: "Image URL must be a string",
        })
        .url("Image URL must be a valid URL"),
});

export type Banner = z.infer<typeof bannerSchema>;
