"use client";

import { products } from "@/config/products";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export function Products({ className, ...props }: GenericProps) {
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
                    Discover Our Range
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Our <span className="text-accent">Products</span>
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative md:px-12"
            >
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                >
                    <CarouselContent className="-ml-4">
                        {products.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 md:basis-2/3"
                            >
                                <div className="group space-y-8">
                                    <div className="overflow-hidden rounded-3xl">
                                        <div className="relative aspect-[16/9]">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                width={2000}
                                                height={1000}
                                                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                priority={index === 0}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-semibold md:text-3xl">
                                            {item.title}
                                        </h3>

                                        <div className="space-y-2 text-muted-foreground">
                                            {item.description.map((desc, i) => (
                                                <p
                                                    key={i}
                                                    className="text-balance"
                                                >
                                                    {desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:inline-block" />
                    <CarouselNext className="hidden md:inline-block" />
                </Carousel>
            </motion.div>
        </section>
    );
}
