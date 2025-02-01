"use client";

import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/lib/utils";
import { motion, useTransform } from "motion/react";

const stats = [
    {
        count: 18,
        label: "Countries Exported",
        icon: "🌏",
    },
    {
        count: 20,
        label: "Products Offered",
        icon: "📦",
    },
    {
        count: 100,
        label: "Happy Clients",
        icon: "🤝",
    },
];

function StatCard({
    count,
    label,
    icon,
    index,
}: {
    count: number;
    label: string;
    icon: string;
    index: number;
}) {
    const { ref, springValue } = useCounter(count);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-background/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-background/10"
        >
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <span className="text-4xl">{icon}</span>

                <h3 className="flex items-baseline gap-1 text-4xl font-bold text-background md:text-5xl lg:text-6xl">
                    <motion.span ref={ref} className="tabular-nums">
                        {useTransform(springValue, (latest) =>
                            Math.round(latest)
                        )}
                    </motion.span>
                    <span className="text-accent">+</span>
                </h3>

                <p className="text-base text-background/80 md:text-lg">
                    {label}
                </p>
            </div>
        </motion.div>
    );
}

export function Stats({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative space-y-16 py-20 text-background",
                className
            )}
            {...props}
        >
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border border-background/20 bg-background/5 px-6 py-2 text-sm font-medium uppercase tracking-wider backdrop-blur-sm"
                >
                    Our Achievements
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Numbers That Define{" "}
                    <span className="text-accent">Excellence</span>
                </motion.h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {stats.map((stat, index) => (
                    <StatCard key={index} index={index} {...stat} />
                ))}
            </div>
        </section>
    );
}
