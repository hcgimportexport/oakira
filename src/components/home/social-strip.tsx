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
                "z-50 w-full bg-foreground shadow-lg transition-all",
                isNavbarOpen ? "hidden" : "block",
                className
            )}
            {...props}
        >
            <div className="mx-auto flex flex-col items-center justify-between gap-4 px-8 py-3 text-xs text-background md:flex-row md:text-sm">
                <div className="flex items-center gap-8">
                    <div className="hidden items-center gap-3 md:flex">
                        <div className="rounded-full bg-background/10 p-2 text-background">
                            <Icons.MapPin className="size-4" />
                        </div>
                        <Link
                            href="https://maps.google.com"
                            target="_blank"
                            className="text-background/80 transition-colors hover:text-background"
                        >
                            {siteConfig.contact.location}
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-background/10 p-2 text-background">
                            <Icons.Mail className="size-4" />
                        </div>
                        <Link
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-background/80 transition-colors hover:text-background"
                        >
                            {siteConfig.contact.email}
                        </Link>
                    </div>
                </div>

                <div className="hidden md:block">
                    {siteConfig.links && (
                        <div className="flex gap-4">
                            {Object.entries(siteConfig.links).map(
                                ([name, href]) => {
                                    const Icon =
                                        Icons[name as keyof typeof Icons];
                                    return (
                                        <Link
                                            key={name}
                                            href={href}
                                            className="rounded-full bg-background/10 p-2 text-background/80 transition-all duration-300 hover:scale-110 hover:bg-background/20 hover:text-background"
                                        >
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
