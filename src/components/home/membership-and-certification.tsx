"use client";

import { certification } from "@/config/certification";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function MemberShipAndCertification({
    className,
    ...props
}: GenericProps) {
    return (
        <>
            {/* Desktop Version */}
            <section
                className={cn("hidden space-y-16 py-20 lg:block", className)}
                {...props}
            >
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                    >
                        Our Credentials
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                        Membership &{" "}
                        <span className="text-accent">Certification</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <InfiniteMovingCards
                        items={certification}
                        direction="left"
                        className="max-w-full"
                    />
                </motion.div>
            </section>

            {/* Mobile Version */}
            <section
                className={cn("space-y-16 py-20 lg:hidden", className)}
                {...props}
            >
                <div className="mx-auto max-w-3xl space-y-4 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                    >
                        Our Credentials
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl font-bold md:text-4xl"
                    >
                        Membership &{" "}
                        <span className="text-accent">Certification</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                    >
                        <CarouselContent className="-ml-4">
                            {certification.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full pl-4 md:basis-1/2"
                                >
                                    <Link
                                        href={item.link}
                                        className="group block space-y-4 rounded-3xl bg-muted/50 p-8 text-center transition-colors duration-300 hover:bg-accent/10"
                                    >
                                        <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-xl">
                                            <Image
                                                width={200}
                                                height={200}
                                                src={item.logoUrl}
                                                alt={item.name}
                                                className="size-full object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        <h3 className="text-lg font-semibold">
                                            {item.name}
                                        </h3>

                                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                            <span>Learn More</span>
                                            <Icons.ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>
            </section>
        </>
    );
}
