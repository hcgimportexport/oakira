"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Icons } from "../icons";

export function WhatWeDo({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10 py-10", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-balance text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-semibold uppercase md:text-3xl"
                >
                    What We Do
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-sm text-muted-foreground md:text-base"
                >
                    Trust us for teas that delight your senses, promote
                    wellness, and provide lasting value. <br /> Discover why tea
                    lovers worldwide rely on HCG Group for unmatched flavor,
                    freshness, and reliability.
                </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <WhatWeDoCard
                    icon="Leaf"
                    title="Curating the Finest Teas"
                    description="We source exceptional teas from world-renowned plantations, offering a wide variety, including black, green, white, oolong, and unique specialty blends."
                    index={0}
                />
                <WhatWeDoCard
                    icon="Heart"
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
                    icon="Apple"
                    title="Tailored Tea Solutions"
                    description="From bulk orders to personalized blends, we provide customized solutions to meet the diverse needs of our partners and clients."
                    index={3}
                />
            </div>
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
            initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
            className="flex h-full flex-col items-center justify-center space-y-4 bg-muted p-6 py-10 text-center"
        >
            <div className="text-primary">
                <Icon className="size-8" />
            </div>

            <div className="space-y-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </motion.div>
    );
}
