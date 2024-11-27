import { z } from "zod";

export const trustedPartner = z.object({
    company: z.array(
        z
            .string({
                required_error: "Company is required",
                invalid_type_error: "Company must be a string",
            })
            .min(3, "Company must have at least 3 items")
    ),
    beliefs: z.array(
        z
            .string({
                required_error: "Beliefs is required",
                invalid_type_error: "Beliefs must be a string",
            })
            .min(3, "Beliefs must have at least 3 items")
    ),
});

export type TrustedPartner = z.infer<typeof trustedPartner>;
