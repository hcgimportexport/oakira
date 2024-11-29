"use client";

import { siteConfig } from "@/config/site";
import { useNavbarStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../icons";

export function SocialStrip({ className, ...props }: GenericProps) {
    const isNavbarOpen = useNavbarStore((state) => state.isOpen);

    return (
        <div
            className={cn(
                "z-50 w-full bg-foreground p-2 py-3 shadow-lg",
                isNavbarOpen ? "hidden" : "block",
                className
            )}
            {...props}
        >
            <div className="flex flex-col items-center justify-between px-10 text-xs text-background md:flex-row md:text-sm">
                <div className="flex items-center gap-10">
                    <div className="hidden items-center gap-2 md:flex">
                        <div>
                            <Icons.MapPin className="size-4" />
                        </div>
                        <p className="text-xs md:text-sm">
                            {siteConfig.contact.location}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div>
                            <Icons.Mail className="size-4" />
                        </div>
                        <Link
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-xs md:text-sm"
                        >
                            {siteConfig.contact.email}
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex">
                    {siteConfig.links &&
                        !!Object.entries(siteConfig.links).length && (
                            <div className="flex gap-4">
                                {Object.entries(siteConfig.links).map(
                                    ([name, href]) => {
                                        const Icon =
                                            Icons[name as keyof typeof Icons];

                                        return (
                                            <Link key={name} href={href}>
                                                <Icon className="size-4" />
                                            </Link>
                                        );
                                    }
                                )}
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}
