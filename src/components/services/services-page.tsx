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
                    {services.map((service) => (
                        <ServiceCard service={service} key={service.title} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: Service }) {
    return (
        <div
            key={service.title}
            className="flex h-screen w-screen flex-col md:flex-row"
        >
            <div className="h-screen w-screen basis-1/2 overflow-hidden">
                <Image
                    src={service.imageUrl}
                    alt={service.title}
                    className="size-full object-cover"
                    width={1000}
                    height={1000}
                />
            </div>

            <div className="flex w-full basis-1/2 items-center justify-center p-10 md:p-20">
                <div className="w-full space-y-2">
                    <h4 className="text-4xl font-semibold">{service.title}</h4>
                    <p className="text-muted-foreground">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
