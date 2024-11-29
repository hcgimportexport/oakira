"use client";

import { WhatsApp } from "@/components/svgs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export function WhatsAppButton() {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className="fixed bottom-4 right-4">
                        <Link href="/contact">
                            <WhatsApp className="size-14" />
                        </Link>
                    </button>
                </TooltipTrigger>

                <TooltipContent>
                    <p>Need help? Contact us on WhatsApp!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
