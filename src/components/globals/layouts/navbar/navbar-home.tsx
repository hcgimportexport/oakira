"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useNavbarStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function NavbarHome() {
    const [isMenuHidden, setIsMenuHidden] = useState(false);

    const isMenuOpen = useNavbarStore((state) => state.isOpen);
    const setIsMenuOpen = useNavbarStore((state) => state.setIsOpen);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (latest > previous && latest > 150) setIsMenuHidden(true);
        else setIsMenuHidden(false);
    });

    return (
        <motion.header
            variants={{
                visible: {
                    y: 0,
                },
                hidden: {
                    y: "-100%",
                },
            }}
            animate={isMenuHidden ? "hidden" : "visible"}
            transition={{
                duration: 0.35,
                ease: "easeInOut",
            }}
            className="sticky inset-x-0 top-0 z-50 flex h-auto w-full items-center justify-center bg-background"
            data-menu-open={isMenuOpen}
        >
            <nav
                className={cn(
                    "relative z-10 flex w-full max-w-5xl items-center justify-between gap-5 overflow-hidden p-4 md:px-8 xl:max-w-[100rem]",
                    isMenuOpen && "border-b"
                )}
            >
                <button
                    aria-label="Mobile Menu Toggle Button"
                    aria-pressed={isMenuOpen}
                    className="sm:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Icons.Menu className="size-6" />
                </button>

                <Link
                    href="/"
                    title="Home"
                    className="flex items-center gap-1 text-2xl font-bold hover:opacity-100 active:opacity-100"
                >
                    {/* <Renivet className="size-8" /> */}

                    <h4 className="text-xl font-bold uppercase md:text-2xl">
                        {siteConfig.name}
                    </h4>
                </Link>

                <ul className="hidden items-center gap-10 sm:flex">
                    {!!siteConfig.menu.length &&
                        siteConfig.menu.map((item, index) => (
                            <li key={index}>
                                <Link
                                    className={cn(
                                        "text-sm ease-in-out",
                                        item.isDisabled &&
                                            "cursor-not-allowed opacity-50"
                                    )}
                                    prefetch
                                    href={item.href}
                                    target={
                                        item.isExternal ? "_blank" : "_self"
                                    }
                                    onClick={(e) =>
                                        item.isDisabled && e.preventDefault()
                                    }
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </motion.header>
    );
}
