"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export function OurMission({ className, ...props }: GenericProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number>(0);
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.2, 0.6], [1.1, 1]);

    return (
        <section
            className={cn(
                "flex flex-col items-center justify-between gap-16 p-8 py-20 md:flex-row md:gap-20 md:px-0",
                className
            )}
            {...props}
        >
            <div className="w-full basis-1/2 space-y-8">
                <div className="flex flex-col items-start gap-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                    >
                        What Defines Us
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                        Our <span className="text-accent">Vision</span> &{" "}
                        <span className="text-accent">Mission</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-balance text-lg text-muted-foreground"
                    >
                        We are defined by our commitment to quality, innovation,
                        and exceptional customer satisfaction.
                    </motion.p>
                </div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="group space-y-4 rounded-3xl bg-muted/50 transition-colors duration-300 hover:bg-accent/10 md:p-8"
                        onMouseEnter={() => setHoveredIndex(0)}
                    >
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-accent/10 p-3 text-accent">
                                <Icons.Target className="size-6" />
                            </div>
                            <h3 className="text-xl font-semibold">
                                Our Mission
                            </h3>
                        </div>

                        <p className="text-muted-foreground">
                            Our mission is to deliver innovative, high-quality
                            products that enhance everyday life. We are
                            dedicated to exceeding industry standards through
                            exceptional craftsmanship and sustainability, and we
                            focus on meeting the diverse needs of our global
                            customers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="group space-y-4 rounded-3xl bg-muted/50 transition-colors duration-300 hover:bg-accent/10 md:p-8"
                        onMouseEnter={() => setHoveredIndex(1)}
                    >
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-accent/10 p-3 text-accent">
                                <Icons.Eye className="size-6" />
                            </div>
                            <h3 className="text-xl font-semibold">
                                Our Vision
                            </h3>
                        </div>
                        <p className="text-muted-foreground">
                            Our vision is to be a global leader in our industry,
                            recognized for our commitment to innovation and
                            quality. We aim to set new benchmarks in product
                            excellence, fostering a positive impact on
                            communities and industries worldwide.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Button size="lg" className="group">
                        <span>Learn More</span>
                        <Icons.ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </div>

            <div className="group aspect-[4/3] size-full basis-1/2 overflow-hidden rounded-3xl">
                <motion.div style={{ scale }} className="relative size-full">
                    <Image
                        src={
                            hoveredIndex === 0
                                ? "https://picsum.photos/seed/mission/1000/1000"
                                : "https://picsum.photos/seed/vision/1000/1000"
                        }
                        alt="What Defines Us"
                        width={1000}
                        height={1000}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
