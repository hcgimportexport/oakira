"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Icons } from "../icons";

const FEATURES: {
    title: string;
    description: string;
    icon: keyof typeof Icons;
}[] = [
    {
        title: "Quality Products",
        description:
            "We take pride in manufacturing high-quality rubber products for various industries.",
        icon: "Medal",
    },
    {
        title: "Proven Success",
        description:
            "Explore our track record of successful partnerships and the growth of our dealership network.",
        icon: "Trophy",
    },
    {
        title: "Commitment to Excellence",
        description:
            "Our commitment to quality, innovation, and customer satisfaction sets us apart.",
        icon: "Star",
    },
];

export function GrowWithUs({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn("relative space-y-16 py-20", className)}
            {...props}
        >
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                >
                    Partnership Opportunities
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Grow <span className="text-accent">With Us</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-balance text-lg text-muted-foreground"
                >
                    Join the Ijaro family as a dealer and boost your business
                    with our high-quality rubber products. Partner with us to
                    access innovative products and exceptional service.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid gap-8 md:grid-cols-3"
            >
                {FEATURES.map((feature, index) => {
                    const Icon = Icons[feature.icon];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8 + index * 0.2,
                            }}
                            className="group relative overflow-hidden rounded-3xl bg-muted/50 p-8 transition-colors duration-300 hover:bg-accent/10"
                        >
                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="w-fit rounded-full bg-accent/10 p-4 text-accent transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="size-6" />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
