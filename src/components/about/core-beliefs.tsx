"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icons } from "../icons";

export function CoreBeliefs({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10 py-10", className)} {...props}>
            <div className="relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="aspect-[3/4] size-full overflow-hidden md:aspect-[16/7]"
                >
                    <Image
                        src="https://picsum.photos/seed/51461/2000/2000"
                        alt="Core Beliefs"
                        width={1000}
                        height={1000}
                        className="size-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute bottom-0 m-5 space-y-4 bg-foreground px-4 py-3 text-background md:bottom-10 md:left-10 md:m-0 md:space-y-2 md:px-8 md:py-6"
                >
                    <h3 className="flex items-center gap-2 font-semibold md:text-xl">
                        <span>Core Beliefs</span>
                        <Icons.ArrowUpRight />
                    </h3>

                    <ul className="flex list-inside list-disc flex-wrap items-start justify-between gap-3 text-sm md:gap-6 md:text-base">
                        <li>Quality</li>
                        <li>Expertise</li>
                        <li>Sustainability</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
