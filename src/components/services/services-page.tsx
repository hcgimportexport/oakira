"use client";

import { services } from "@/config/services";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/validations";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ElementRef, useRef } from "react";
import { Icons } from "../icons";

export function ServicesPage({ className, ...props }: GenericProps) {
    const targetRef = useRef<ElementRef<"section"> | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const eq = -(-100 / services.length + 100);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `${eq}%`]);

    return (
        <section
            className={cn(
                "relative flex h-[2000vh] justify-end py-0",
                className
            )}
            ref={targetRef}
            {...props}
        >
            <div className="sticky top-0 flex h-screen w-full max-w-full items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex snap-x snap-mandatory"
                >
                    {services.map((service, i) => (
                        <ServiceCard
                            service={service}
                            key={service.title}
                            index={i}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 p-8 md:flex-row md:gap-16 md:p-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group h-[50vh] w-full basis-1/2 overflow-hidden rounded-3xl md:h-[60vh]"
            >
                <div className="relative size-full">
                    <Image
                        src={service.imageUrl}
                        alt={service.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
            </motion.div>

            <div className="flex w-full basis-1/2 items-center">
                <div className="flex flex-col items-start gap-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                    >
                        Service {String(index + 1).padStart(2, "0")}
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                        {service.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-balance text-lg text-muted-foreground"
                    >
                        {service.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="group flex items-center gap-4 text-muted-foreground"
                    >
                        <div className="rounded-full bg-accent/10 p-3">
                            <Icons.ArrowRight className="size-6 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                        <span className="text-sm font-medium">
                            Scroll to explore more
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
