"use client";

import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GeneralShell } from "../shells";

export function Footer({ className, ...props }: GenericProps) {
    return (
        <footer
            className={cn(
                "flex items-center justify-center border-t",
                className
            )}
            {...props}
        >
            <GeneralShell>
                <div className="flex flex-col justify-between gap-10 pb-10 md:flex-row md:gap-5">
                    <div className="space-y-2">
                        <Link href="/" className="space-x-2 text-2xl">
                            {/* <Vortex /> */}
                            <p className="text-xl font-semibold md:text-2xl">
                                {siteConfig.name}
                            </p>
                        </Link>

                        <p className="max-w-md text-sm text-muted-foreground md:text-balance">
                            {siteConfig.longDescription}
                        </p>
                    </div>

                    <Separator className="md:hidden" />

                    <div className="flex justify-between gap-4 md:gap-16">
                        <div className="space-y-4">
                            <h4 className="font-medium">Pages</h4>

                            <div className="flex flex-col gap-2">
                                <Link
                                    href="/"
                                    className="text-sm text-muted-foreground"
                                >
                                    Home
                                </Link>

                                {siteConfig.menu.map(({ name, href }) => (
                                    <Link
                                        key={name}
                                        href={href}
                                        className="text-sm text-muted-foreground"
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-medium">Other Links</h4>

                            <div className="flex flex-col gap-2">
                                {siteConfig.links &&
                                    !!Object.entries(siteConfig.links).length &&
                                    Object.entries(siteConfig.links).map(
                                        ([name, href]) => (
                                            <Link
                                                key={name}
                                                href={href}
                                                className="text-sm capitalize text-muted-foreground"
                                            >
                                                {name}
                                            </Link>
                                        )
                                    )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-medium">Legal</h4>

                            <div className="flex flex-col gap-2">
                                <Link
                                    href="/privacy"
                                    className="text-sm text-muted-foreground"
                                >
                                    Privacy Policy
                                </Link>

                                <Link
                                    href="/terms"
                                    className="text-sm text-muted-foreground"
                                >
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        <span>&copy; {new Date().getFullYear()}</span>{" "}
                        <Link
                            href={siteConfig.developer.url}
                            className="text-sm hover:underline"
                        >
                            {siteConfig.developer.name}.
                        </Link>{" "}
                        <span>All rights reserved.</span>
                    </p>

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
                                                className="text-muted-foreground"
                                            >
                                                <Icon className="size-5" />
                                            </Link>
                                        );
                                    }
                                )}
                            </div>
                        )}
                </div>
            </GeneralShell>
        </footer>
    );
}
