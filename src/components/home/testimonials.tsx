"use client";

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

const TESTIMONIAL_IMAGES = [
    "6fyUUFYtyiQeD8UNM59yGerT5v6JiVqkOs9KmQ3IxUn0ucHX",
    "6fyUUFYtyiQew57sftquMfOGFKh6rCXLYyjIZv3npaRdkDtm",
    "6fyUUFYtyiQetkVuITLWMrUO6GJv1j8XVQ2wy4Atxdebhku5",
    "6fyUUFYtyiQeC4DUjetgLYnod0jIbOZwQDcXxEp9JyqiUtSf",
    "6fyUUFYtyiQeKBCHmr0KoRSQA7OdZ1PNcshmfiFHJvCVGkLg",
    "6fyUUFYtyiQe9BsK8NZrNLoYBZ4MhQmyunAVGUJ9sfc8XPbC",
    "6fyUUFYtyiQeeKLN4H28JoXFn9Cwm5MDpEiVzxLHRbQBjTvI",
    "6fyUUFYtyiQelDrdltIxCuqPdka9IE8gVvcZ4fOG6XMiJz2F",
    "6fyUUFYtyiQezjeFRvcTw4PJiALdSKyqt16pB7svZIUgVYz9",
].map((id) => `https://utfs.io/a/wjndgl4cy4/${id}`);

export function Testimonials({ className, ...props }: GenericProps) {
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
                    Client Testimonials
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    What Our <span className="text-accent">Clients</span> Say
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-balance text-muted-foreground md:text-lg"
                >
                    Real feedback from our valued customers across the globe
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative md:px-12"
            >
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                >
                    <CarouselContent className="-ml-4">
                        {TESTIMONIAL_IMAGES.map((image, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                            >
                                <div className="group overflow-hidden rounded-3xl border bg-card p-2 shadow-sm transition-colors hover:border-accent/50">
                                    <div className="relative aspect-[1/2] overflow-hidden rounded-2xl bg-muted">
                                        <Image
                                            src={image}
                                            alt={`Client Testimonial ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </motion.div>
        </section>
    );
}
