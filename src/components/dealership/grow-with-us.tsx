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
        <section className={cn("space-y-16 py-20", className)} {...props}>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-medium uppercase tracking-wider text-muted-foreground"
                >
                    Grow with Us
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Why Partner with <span className="text-accent">ijaro</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-balance text-muted-foreground"
                >
                    Join the Ijaro family as a dealer and boost your business
                    with our high-quality rubber products. Enjoy competitive
                    margins, comprehensive support, and marketing resources.
                    Partner with us to access innovative products and
                    exceptional service, driving mutual growth and success in
                    the rubber industry.
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
                        <div
                            key={index}
                            className="group space-y-4 rounded-3xl bg-muted p-8 transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            <Icon className="size-8 transition-transform duration-300 group-hover:scale-110" />
                            <h3 className="text-xl font-semibold">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground transition-colors group-hover:text-accent-foreground/80">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
}
