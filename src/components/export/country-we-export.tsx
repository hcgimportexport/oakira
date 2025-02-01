"use client";

import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import { Icons } from "../icons";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const COUNTRIES = [
    {
        name: "United States",
        flag: "https://picsum.photos/seed/usa/800/500",
    },
    {
        name: "Germany",
        flag: "https://picsum.photos/seed/germany/800/500",
    },
    {
        name: "United Kingdom",
        flag: "https://picsum.photos/seed/uk/800/500",
    },
    {
        name: "France",
        flag: "https://picsum.photos/seed/france/800/500",
    },
    {
        name: "Netherlands",
        flag: "https://picsum.photos/seed/netherlands/800/500",
    },
    {
        name: "Canada",
        flag: "https://picsum.photos/seed/canada/800/500",
    },
    {
        name: "Italy",
        flag: "https://picsum.photos/seed/italy/800/500",
    },
];

export function CountryWeExport({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10 py-20", className)} {...props}>
            <div className="space-y-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                >
                    <Icons.ChevronRight className="size-4" />
                    Countries We Export
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-5xl text-2xl font-bold md:text-5xl"
                >
                    Exporting to over 18 countries worldwide, ensuring quality
                    and reliability.
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
                    <CarouselContent>
                        {COUNTRIES.map((country, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full md:basis-1/2 lg:basis-1/5"
                            >
                                <div className="p-1">
                                    <div className="overflow-hidden rounded-xl">
                                        <div className="group relative aspect-[4/3]">
                                            <Image
                                                src={country.flag}
                                                alt={country.name}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute inset-x-0 bottom-0 p-4">
                                                <p className="font-medium text-white">
                                                    {country.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </motion.div>
        </section>
    );
}
