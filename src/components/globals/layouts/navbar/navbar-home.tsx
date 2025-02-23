"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useNavbarStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavbarHome() {
    const [isMenuHidden, setIsMenuHidden] = useState(false);

    const isMenuOpen = useNavbarStore((state) => state.isOpen);
    const setIsMenuOpen = useNavbarStore((state) => state.setIsOpen);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (isMenuOpen) return;
        if (latest > previous && latest > 150) setIsMenuHidden(true);
        else setIsMenuHidden(false);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={isMenuHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sticky inset-x-0 top-0 z-50 flex h-auto w-full items-center justify-center bg-background/80 backdrop-blur-lg"
            data-menu-open={isMenuOpen}
        >
            <nav
                className={cn(
                    "relative z-10 flex w-full max-w-5xl items-center justify-between gap-5 p-4 md:px-8 xl:max-w-[100rem]",
                    isMenuOpen && "border-b"
                )}
            >
                <button
                    aria-label="Mobile Menu Toggle Button"
                    aria-pressed={isMenuOpen}
                    className="rounded-full p-2 transition-colors duration-300 hover:bg-accent/10 sm:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Icons.Menu className="size-6" />
                </button>

                <Link
                    href="/"
                    title="Home"
                    className="transition-transform duration-300 hover:scale-105"
                >
                    <Image
                        src="https://utfs.io/a/wjndgl4cy4/6fyUUFYtyiQeASI30ORVF9sUGOm5n4Y1XP2RlcNzJCBu0TeH"
                        alt="Logo"
                        width={108}
                        height={53}
                        className="object-cover"
                    />
                </Link>

                <ul className="hidden items-center gap-10 sm:flex">
                    {siteConfig.menu.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={cn(
                                    "group relative text-sm font-medium transition-colors",
                                    item.isDisabled &&
                                        "cursor-not-allowed opacity-50"
                                )}
                                href={item.href}
                                target={item.isExternal ? "_blank" : "_self"}
                                onClick={(e) =>
                                    item.isDisabled && e.preventDefault()
                                }
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
