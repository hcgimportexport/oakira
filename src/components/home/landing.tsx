"use client";

import { cn } from "@/lib/utils";
import { Banner } from "@/lib/validations";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface PageProps extends GenericProps {
    banners: Banner[];
}

export function Landing({ className, banners, ...props }: PageProps) {
    return (
        <section className={cn("", className)} {...props}>
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
                className="h-[calc(100vh-(6.8rem))] w-full overflow-hidden"
            >
                <CarouselContent className="ml-0">
                    {banners.map((item, index) => (
                        <CarouselItem key={index} className="h-full p-0">
                            <div className="group relative size-full overflow-hidden">
                                <motion.div
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 10 }}
                                    className="size-full"
                                >
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        width={2000}
                                        height={2000}
                                        className="size-full object-cover brightness-50 transition-transform group-hover:scale-110"
                                        priority={index === 0}
                                    />
                                </motion.div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 p-4 text-center text-background md:space-y-10">
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="rounded-full border border-background/20 bg-background/5 px-6 py-2 text-sm font-medium uppercase tracking-wider backdrop-blur-sm"
                                    >
                                        Welcome to HCG
                                    </motion.p>

                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2,
                                        }}
                                        className="max-w-3xl text-balance text-3xl font-bold md:text-5xl lg:text-7xl"
                                    >
                                        {item.title}
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4,
                                        }}
                                        className="max-w-2xl text-balance text-background/80 md:text-lg"
                                    >
                                        {item.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6,
                                        }}
                                    >
                                        <Button
                                            size="lg"
                                            className="group border-background/20 bg-background/5 backdrop-blur-sm hover:border-background/40 hover:bg-background/10 hover:text-background"
                                            variant="outline"
                                            asChild
                                        >
                                            <Link href="/about">
                                                <span>Discover More</span>
                                                <Icons.ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
