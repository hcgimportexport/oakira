import { db } from "@/lib/db";
import { tickets } from "@/lib/db/schema";
import { CResponse, handleError } from "@/lib/utils";
import { createTicketSchema } from "@/lib/validations";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const parsed = createTicketSchema.parse(body);

        const data = await db
            .insert(tickets)
            .values(parsed)
            .returning()
            .then((res) => res[0]);

        return CResponse({
            message: "OK",
            data,
        });
    } catch (err) {
        return handleError(err);
    }
}
