"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export function Connect({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "flex flex-col-reverse items-center gap-10 py-20 md:flex-row md:gap-20",
                className
            )}
            {...props}
        >
            <div className="w-full basis-1/2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[5/4] overflow-hidden rounded-2xl"
                >
                    <Image
                        src="https://picsum.photos/seed/business/800/1000"
                        alt="Global Business Head"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
            </div>

            <div className="flex w-full basis-1/2 flex-col items-start gap-8">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider"
                >
                    Let&apos;s Talk
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    <span className="text-accent">Connect with Our</span>
                    <br />
                    Global Business Head
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-balance text-muted-foreground"
                >
                    As a Global Business Director with over 10 years of
                    experience, I specialize in helping tea importers overcome
                    challenges and achieve rapid business growth. I understand
                    the struggles importers face with low-quality mats from
                    other exporters. My commitment is to provide only the
                    highest quality products, ensuring durability and
                    performance. Additionally, I offer unparalleled support to
                    help you navigate the market and achieve sustained success.
                    Partner with us for excellence and growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button size="lg" className="group">
                        Schedule a Call
                        <Icons.Calendar className="ml-2 size-4 transition-transform duration-200 group-hover:scale-110" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
