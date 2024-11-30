"use client";

import { trustedPartner } from "@/config/trusted-partner";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
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
        <section className={cn("space-y-10 py-10", className)} {...props}>
            <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-balance text-center text-2xl font-semibold uppercase md:text-3xl"
            >
                &ldquo;Trusted Export Partner&rdquo;
            </motion.h2>

            <div className="flex flex-col justify-between gap-10 md:flex-row">
                <motion.div
                    initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="basis-1/2 space-y-5"
                >
                    <h3 className="text-balance text-center text-xl font-semibold">
                        Company Values
                    </h3>

                    <Carousel
                        setApi={setApi}
                        opts={carouselOptions}
                        plugins={[autoplayPlugin]}
                        orientation="vertical"
                    >
                        <CarouselContent className="h-[200px]">
                            {trustedPartner.company.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex h-full items-center justify-center text-balance border p-1 text-center">
                                        <span className="text-2xl font-semibold md:text-3xl">
                                            {item}
                                        </span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="basis-1/2 space-y-5"
                >
                    <h3 className="text-balance text-center text-xl font-semibold">
                        We Believe In
                    </h3>

                    <Carousel
                        setApi={setSecondApi}
                        opts={carouselOptions}
                        plugins={[autoplayPlugin]}
                        orientation="vertical"
                    >
                        <CarouselContent className="h-[200px]">
                            {trustedPartner.beliefs.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex h-full items-center justify-center text-balance border p-1 text-center">
                                        <span className="text-2xl font-semibold md:text-3xl">
                                            {item}
                                        </span>
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
