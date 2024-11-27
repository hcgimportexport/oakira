"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../icons";

export function ContactPage({ className, ...props }: GenericProps) {
    return (
        <div className={cn("basis-1/2 space-y-10", className)} {...props}>
            <div className="space-y-5">
                <h3 className="text-xl font-semibold uppercase md:text-3xl">
                    Talk to Us
                </h3>

                <div className="flex items-center gap-5">
                    <div className="rounded-full border p-3">
                        <Icons.Mail className="size-4 md:size-7" />
                    </div>

                    <div>
                        <p className="uppercase md:text-xl">Email</p>

                        <Link
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-sm text-muted-foreground md:text-base"
                        >
                            {siteConfig.contact.email}
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="rounded-full border p-3">
                        <Icons.MapPin className="size-4 md:size-7" />
                    </div>

                    <div>
                        <p className="uppercase md:text-xl">Address</p>

                        <p className="text-sm text-muted-foreground md:text-base">
                            {siteConfig.contact.location}
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-5">
                <h3 className="text-xl font-semibold uppercase md:text-3xl">
                    Follow Us
                </h3>

                {siteConfig.links &&
                    !!Object.entries(siteConfig.links).length && (
                        <div className="flex gap-4">
                            {Object.entries(siteConfig.links).map(
                                ([name, href]) => {
                                    const Icon =
                                        Icons[name as keyof typeof Icons];

                                    return (
                                        <Link
                                            key={name}
                                            href={href}
                                            className="rounded-full border p-2 text-muted-foreground md:p-3"
                                        >
                                            <Icon className="size-4 md:size-5" />
                                        </Link>
                                    );
                                }
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
}
