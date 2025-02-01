"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";

export function Growing({ className, ...props }: GenericProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Create smooth spring animations
    const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

    // Transform mouse movement to constrained values
    const transformX = useTransform(mouseX, [-500, 500], [-20, 20]);
    const transformY = useTransform(mouseY, [-500, 500], [-20, 20]);

    function handleMouseMove(event: React.MouseEvent) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <section
            className={cn("flex flex-col gap-16 py-20", className)}
            {...props}
        >
            <div className="mx-auto max-w-4xl space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Growing Global Demand for{" "}
                    <span className="text-accent">
                        Indian Rubber Mat Products
                    </span>
                </motion.h2>

                <div className="space-y-6 text-muted-foreground">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-balance"
                    >
                        The demand for high-quality rubber products is on a
                        steady rise across the globe, driven by industries
                        seeking durable, versatile, and eco-friendly solutions.
                        At Ijaro Rubber, we proudly cater to this growing need,
                        exporting premium rubber mats to some of the
                        world&apos;s leading economies, including the United
                        States of America, Germany, Canada, the United Kingdom,
                        France, and the Netherlands.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-balance"
                    >
                        Our products have earned the trust of global markets
                        like the Philippines, Mexico, Belgium, Italy, Japan, and
                        Australia due to their unmatched durability and
                        performance. Countries like Poland, Greece, Austria, and
                        the Czech Republic are increasingly turning to Ijaro
                        Rubber for innovative solutions that deliver exceptional
                        value. As the global demand continues to expand, we
                        remain committed to manufacturing excellence and
                        delivering tailored solutions to meet the specific needs
                        of diverse industries worldwide.
                    </motion.p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl md:aspect-[21/9] md:rounded-full"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    className="relative size-full"
                    style={{
                        x: transformX,
                        y: transformY,
                        scale: 1.1, // Slight zoom
                    }}
                >
                    <Image
                        src="https://picsum.photos/seed/global/2100/900"
                        alt="Global Rubber Mat Demand"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
