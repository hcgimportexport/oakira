"use client";

import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { GeneralShell } from "../shells";

export function Footer({ className, ...props }: GenericProps) {
    return (
        <footer
            className={cn("relative overflow-hidden bg-muted/50", className)}
            {...props}
        >
            <GeneralShell>
                <div className="relative z-10 space-y-16 py-20 pb-0">
                    <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-20">
                        <div className="space-y-4">
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-2 text-2xl font-bold transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-xl font-bold uppercase md:text-2xl">
                                    {siteConfig.name}
                                </p>
                            </Link>

                            <p className="max-w-md text-balance text-muted-foreground">
                                {siteConfig.longDescription}
                            </p>
                        </div>

                        <div className="grid gap-10 md:grid-cols-3 md:gap-20">
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">Pages</h4>
                                <div className="flex flex-col gap-3">
                                    <FooterLink href="/">Home</FooterLink>
                                    {siteConfig.menu.map(({ name, href }) => (
                                        <FooterLink key={name} href={href}>
                                            {name}
                                        </FooterLink>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">
                                    Other Links
                                </h4>
                                <div className="flex flex-col gap-3">
                                    {siteConfig.links &&
                                        Object.entries(siteConfig.links).map(
                                            ([name, href]) => (
                                                <FooterLink
                                                    key={name}
                                                    href={href}
                                                >
                                                    {name}
                                                </FooterLink>
                                            )
                                        )}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">Legal</h4>
                                <div className="flex flex-col gap-3">
                                    <FooterLink href="/privacy">
                                        Privacy Policy
                                    </FooterLink>
                                    <FooterLink href="/terms">
                                        Terms of Service
                                    </FooterLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator className="bg-accent/10" />

                    <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm text-muted-foreground"
                        >
                            <span>&copy; {new Date().getFullYear()}</span> made
                            with ❤️ by{" "}
                            <Link
                                href={siteConfig.developer.url}
                                className="text-sm hover:underline"
                            >
                                {siteConfig.developer.name}
                            </Link>{" "}
                            . <span>All rights reserved.</span>
                        </motion.p>

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
                                                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                                            >
                                                <Icon className="size-5" />
                                            </Link>
                                        );
                                    }
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </GeneralShell>
        </footer>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="group relative w-fit text-sm text-muted-foreground transition-colors hover:text-accent"
        >
            <span>{children}</span>
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
        </Link>
    );
}
