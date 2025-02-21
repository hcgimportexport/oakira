"use client";

import { whyChooseUs } from "@/config/why-choose-us";
import { cn } from "@/lib/utils";
import { WhyChooseUs as WhyChooseUsType } from "@/lib/validations";
import { motion } from "motion/react";
import Image from "next/image";

export function WhyChooseUs({ className, ...props }: GenericProps) {
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
                    Why Choose Us
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Excellence in <span className="text-accent">Every Cup</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-balance text-muted-foreground md:text-lg"
                >
                    At Oakira Tea, we bring years of expertise in sourcing and
                    crafting the finest teas, ensuring exceptional quality and
                    flavor in every cup. Our commitment to tradition and
                    innovation allows us to offer unique blends tailored to
                    diverse tastes. With globally recognized certifications for
                    authenticity and sustainability, we prioritize ethical
                    sourcing and environmental responsibility.
                </motion.p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
                {whyChooseUs.map((item, index) => (
                    <WhyChooseUsCard key={index} index={index} {...item} />
                ))}
            </div>
        </section>
    );
}

function WhyChooseUsCard({
    title,
    description,
    imageUrl,
    className,
    index,
}: WhyChooseUsType & GenericProps & { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
            className={cn(
                "group space-y-6 rounded-3xl bg-muted/50 p-8 transition-colors duration-300 hover:bg-accent/10",
                className
            )}
        >
            <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-video">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" />
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-balance text-muted-foreground">
                    {description}
                </p>
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
    );
}
