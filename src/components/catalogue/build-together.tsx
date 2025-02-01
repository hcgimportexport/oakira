"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export function BuildTogether({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden py-20 text-background md:py-32",
                className
            )}
            {...props}
        >
            <div className="relative z-10 flex flex-col items-center gap-8 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border border-background/20 bg-background/5 px-6 py-2 text-sm font-medium uppercase tracking-wider backdrop-blur-sm"
                >
                    Collaborate for Success
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl text-balance text-4xl font-bold md:text-7xl"
                >
                    Let&apos;s Build{" "}
                    <span className="bg-accent bg-clip-text text-transparent">
                        The Next Big Thing
                    </span>{" "}
                    Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-3xl text-balance text-background/80"
                >
                    Join forces with us to create innovative solutions and drive
                    industry excellence. Your vision, combined with our
                    expertise, can transform possibilities into reality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button
                        size="lg"
                        variant="outline"
                        className="group border-background/20 bg-background/5 backdrop-blur-sm hover:border-background/40 hover:bg-background/10 hover:text-background"
                    >
                        Keep In Touch
                        <Icons.ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
