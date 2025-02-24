"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Icons } from "../icons";
import { Button } from "../ui/button";

interface PageProps extends GenericProps {
    title: string;
}

export function Catalogue({ className, title, ...props }: PageProps) {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section
            className={cn(
                "flex flex-col items-center justify-between gap-16 py-20 md:flex-row md:gap-20",
                className
            )}
            {...props}
        >
            <div className="group aspect-square size-full basis-1/2 overflow-hidden rounded-3xl">
                <motion.div style={{ scale }} className="relative size-full">
                    <Image
                        src="https://utfs.io/a/wjndgl4cy4/6fyUUFYtyiQeQ7FzR1w6CnRsptl7PZ0mu8IN1yoKMiL5cwF2"
                        alt={title}
                        width={1000}
                        height={1000}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
            </div>

            <div className="flex w-full basis-1/2 flex-col items-start gap-8">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                >
                    Resources
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Download Our{" "}
                    <span className="text-accent">E-Catalogue</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-balance text-lg text-muted-foreground"
                >
                    Download our comprehensive e-catalogue to explore our full
                    range of high-quality tea. Find detailed information,
                    specifications, and options to meet your needs. Discover the
                    perfect solutions for your applications with our
                    easy-to-navigate catalogue.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button size="lg" className="group">
                        <span>Download Catalogue</span>
                        <Icons.Download className="ml-2 size-4 transition-transform duration-200 group-hover:scale-110" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
