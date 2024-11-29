"use client";

import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { useNavbarStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementRef, useEffect, useRef } from "react";

export function NavbarMob({ className, ...props }: GenericProps) {
    const isMenuOpen = useNavbarStore((state) => state.isOpen);
    const setIsMenuOpen = useNavbarStore((state) => state.setIsOpen);

    const navContainerRef = useRef<ElementRef<"div"> | null>(null);
    const navListRef = useRef<ElementRef<"ul"> | null>(null);

    useEffect(() => {
        if (typeof document === "undefined") return;

        if (isMenuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isMenuOpen]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                navContainerRef.current?.contains(event.target as Node) &&
                !navListRef.current?.contains(event.target as Node)
            )
                setIsMenuOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsMenuOpen]);

    return (
        <div
            aria-label="Mobile Menu"
            data-menu-open={isMenuOpen}
            className={cn(
                "fixed inset-x-0 z-40",
                "overflow-hidden",
                "transition-all duration-500 ease-in-out",
                "h-0 data-[menu-open=true]:h-screen",
                "-top-1/2 bottom-0 data-[menu-open=true]:top-0",
                "md:hidden",
                "flex flex-col justify-between gap-4",
                className
            )}
            ref={navContainerRef}
            {...props}
        >
            <div
                className="space-y-5 overflow-y-scroll pt-[3.7rem]"
                style={{ scrollbarWidth: "none" }}
            >
                <ul ref={navListRef} className="bg-background drop-shadow-md">
                    {siteConfig.menu.map((item, index) => {
                        const Icon = Icons[item.icon];

                        return (
                            <li
                                key={index}
                                aria-label={`Extra Menu Item ${item.name}`}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center justify-between gap-2 p-4"
                                    target={
                                        item.isExternal ? "_blank" : "_self"
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon className="size-5 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm font-semibold">
                                                {item.name}
                                            </p>

                                            <p className="text-xs">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <Icons.ChevronRight className="size-5 text-muted-foreground" />
                                    </div>
                                </Link>

                                {index !== siteConfig.menu.length - 1 && (
                                    <Separator />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
