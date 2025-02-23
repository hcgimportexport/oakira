"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { Icons } from "../icons";

export function CountryWeExport({ className, ...props }: GenericProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

    const transformX = useTransform(mouseX, [-500, 500], [-20, 20]);
    const transformY = useTransform(mouseY, [-500, 500], [-20, 20]);

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className={cn("space-y-10 py-20", className)} {...props}>
            <div className="space-y-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                >
                    <Icons.ChevronRight className="size-4" />
                    Countries We Export
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-5xl text-2xl font-bold md:text-5xl"
                >
                    Exporting to over 18 countries worldwide, ensuring quality
                    and reliability.
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative mx-auto aspect-[21/9] w-full overflow-hidden rounded-full"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    className="relative size-full"
                    style={{
                        x: transformX,
                        y: transformY,
                        scale: 1.1,
                    }}
                >
                    <Image
                        src="https://utfs.io/a/wjndgl4cy4/6fyUUFYtyiQeIUQ0x2d5Un7QbKSzf08Oq4Xie5hPJ1Rp3CNm"
                        alt="Global Export Coverage"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
