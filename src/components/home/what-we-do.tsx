"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Icons } from "../icons";

export function WhatWeDo({ className, ...props }: GenericProps) {
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
                    What We Do
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Excellence in{" "}
                    <span className="text-accent">Tea Export</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-balance text-muted-foreground md:text-lg"
                >
                    Trust us for teas that delight your senses, promote
                    wellness, and provide lasting value. Discover why tea lovers
                    worldwide rely on Oakira for unmatched flavor, freshness,
                    and reliability.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid gap-8 md:grid-cols-2"
            >
                <WhatWeDoCard
                    icon="Leaf"
                    title="Curating the Finest Teas"
                    description="We source exceptional teas from world-renowned plantations, offering a wide variety, including black, green, white, oolong, and unique specialty blends."
                    index={0}
                />
                <WhatWeDoCard
                    icon="Home"
                    title="Global Import and Export Services"
                    description="With a seamless supply chain, we connect tea growers with international markets, delivering premium teas to retailers, wholesalers, and enthusiasts worldwide."
                    index={1}
                />
                <WhatWeDoCard
                    icon="Footprints"
                    title="Commitment to Sustainability"
                    description="Ethical sourcing and eco-friendly practices are at the heart of what we do. We ensure our teas are grown responsibly, supporting both the environment and local communities."
                    index={2}
                />
                <WhatWeDoCard
                    icon="Heart"
                    title="Tailored Tea Solutions"
                    description="From bulk orders to personalized blends, we provide customized solutions to meet the diverse needs of our partners and clients."
                    index={3}
                />
            </motion.div>
        </section>
    );
}

function WhatWeDoCard({
    icon,
    title,
    description,
    index,
}: {
    icon: keyof typeof Icons;
    title: string;
    description: string;
    index: number;
}) {
    const Icon = Icons[icon];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-muted/50 p-8 transition-colors duration-300 hover:bg-accent/10"
        >
            <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="rounded-full bg-accent/10 p-3 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
    );
}
