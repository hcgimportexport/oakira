"use client";

import { services } from "@/config/services";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/validations";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ElementRef, useRef } from "react";

export function ServicesPage({ className, ...props }: GenericProps) {
    const targetRef = useRef<ElementRef<"section"> | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

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
        <div
            key={service.title}
            className="flex h-screen w-screen flex-col md:flex-row"
        >
            <motion.div
                initial={
                    index === 0
                        ? { opacity: 0, x: -20, filter: "blur(2px)" }
                        : {}
                }
                whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-screen w-screen basis-1/2 overflow-hidden"
            >
                <Image
                    src={service.imageUrl}
                    alt={service.title}
                    className="size-full object-cover"
                    width={1000}
                    height={1000}
                />
            </motion.div>

            <div className="flex w-full basis-1/2 items-center justify-center p-10 md:p-20">
                <div className="w-full space-y-2">
                    <motion.h4
                        initial={
                            index === 0
                                ? { opacity: 0, x: 20, filter: "blur(2px)" }
                                : {}
                        }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl font-semibold"
                    >
                        {service.title}
                    </motion.h4>
                    <motion.p
                        initial={
                            index === 0
                                ? { opacity: 0, x: 20, filter: "blur(2px)" }
                                : {}
                        }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-muted-foreground"
                    >
                        {service.description}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
