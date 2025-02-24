"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ContactForm } from "../globals/forms";

export function Inquiry({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center gap-16 py-20 md:flex-row md:gap-20",
                className
            )}
            {...props}
        >
            <div className="flex w-full basis-1/2 flex-col items-start gap-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                >
                    Let&apos;s talk about your needs
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Inquire Now For{" "}
                    <span className="text-accent">Personalized Assistance</span>
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full basis-1/2"
            >
                <ContactForm style="normal" />
            </motion.div>
        </section>
    );
}
