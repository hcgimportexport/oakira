"use client";

import { cn } from "@/lib/utils";
import { IframeHTMLAttributes } from "react";

type MapIframeProps = IframeHTMLAttributes<HTMLIFrameElement>;

export function Iframe({ className, ...props }: MapIframeProps) {
    return (
        <iframe
            className={cn(
                "w-full rounded-3xl bg-muted/50 shadow-lg transition-all duration-300 hover:shadow-xl",
                className
            )}
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            {...props}
        />
    );
}
