"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Icons } from "../icons";

const BELIEFS = [
    { title: "Quality", icon: "Medal" },
    { title: "Expertise", icon: "Star" },
    { title: "Sustainability", icon: "Leaf" },
] as const;

export function CoreBeliefs({ className, ...props }: GenericProps) {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.4, 1], [1, 1.5]);

    return (
        <section className={cn("space-y-16 py-20", className)} {...props}>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                >
                    Our Philosophy
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Core <span className="text-accent">Beliefs</span>
                </motion.h2>
            </div>

            <div className="relative overflow-hidden rounded-3xl">
                <motion.div
                    style={{ scale }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="relative aspect-square md:aspect-[21/9] lg:aspect-[21/9]"
                >
                    <Image
                        src="https://picsum.photos/seed/51461/2000/2000"
                        alt="Core Beliefs"
                        width={2000}
                        height={1000}
                        className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:p-8 md:grid md:grid-cols-3 md:gap-8 md:p-8 lg:p-12"
                >
                    {BELIEFS.map((belief, index) => {
                        const Icon = Icons[belief.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6 + index * 0.2,
                                }}
                                className="group flex items-center gap-4 text-background md:flex-col md:items-center md:text-center"
                            >
                                <div className="rounded-full border border-background/20 bg-background/5 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 md:p-4">
                                    <Icon className="size-5 md:size-8" />
                                </div>

                                <p className="text-lg font-semibold md:text-xl">
                                    {belief.title}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
