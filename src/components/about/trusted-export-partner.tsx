"use client";

import { trustedPartner } from "@/config/trusted-partner";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselOptions,
} from "../ui/carousel";

const carouselOptions: Partial<CarouselOptions> = {
    align: "start",
    loop: true,
};

const autoplayPlugin = Autoplay({ delay: 3000 });

export function TrustedExportPartner({ className, ...props }: GenericProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [secondApi, setSecondApi] = useState<CarouselApi>();
    const [, setCurrent] = useState(0);

    useEffect(() => {
        if (!api || !secondApi) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
            secondApi.scrollTo(api.selectedScrollSnap());
        };

        api.on("select", onSelect);
        secondApi.on("select", () => {
            setCurrent(secondApi.selectedScrollSnap());
            api.scrollTo(secondApi.selectedScrollSnap());
        });

        return () => {
            api.off("select", onSelect);
        };
    }, [api, secondApi]);

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
                    Our Values
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Trusted <span className="text-accent">Export Partner</span>
                </motion.h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-6"
                >
                    <h3 className="text-center text-xl font-semibold">
                        Company Values
                    </h3>

                    <Carousel
                        setApi={setApi}
                        opts={carouselOptions}
                        plugins={[autoplayPlugin]}
                        orientation="vertical"
                        className="h-[300px]"
                    >
                        <CarouselContent className="-mt-4 h-[300px]">
                            {trustedPartner.company.map((item, index) => (
                                <CarouselItem key={index} className="pt-4">
                                    <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-3xl bg-muted/50 p-8 text-center transition-colors duration-300 hover:bg-accent/10">
                                        <p className="text-balance text-2xl font-semibold md:text-3xl">
                                            {item}
                                        </p>

                                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-6"
                >
                    <h3 className="text-center text-xl font-semibold">
                        We Believe In
                    </h3>

                    <Carousel
                        setApi={setSecondApi}
                        opts={carouselOptions}
                        plugins={[autoplayPlugin]}
                        orientation="vertical"
                        className="h-[300px]"
                    >
                        <CarouselContent className="-mt-4 h-[300px]">
                            {trustedPartner.beliefs.map((item, index) => (
                                <CarouselItem key={index} className="pt-4">
                                    <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-3xl bg-muted/50 p-8 text-center transition-colors duration-300 hover:bg-accent/10">
                                        <p className="text-balance text-2xl font-semibold md:text-3xl">
                                            {item}
                                        </p>
                                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
}
