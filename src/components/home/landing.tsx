"use client";

import { cn } from "@/lib/utils";
import { Banner } from "@/lib/validations";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
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
                className="h-[calc(100vh-20vh)] w-full"
            >
                <CarouselContent className="ml-0">
                    {banners.map((item, index) => (
                        <CarouselItem key={index} className="h-full p-0">
                            <div className="relative size-full">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={2000}
                                    height={2000}
                                    className="size-full object-cover brightness-50"
                                    priority={index === 0}
                                />

                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5 p-4 text-center text-background md:space-y-10">
                                    <h1 className="max-w-3xl text-balance text-3xl font-bold uppercase md:text-5xl lg:text-7xl">
                                        {item.title}
                                    </h1>

                                    <p className="max-w-xl text-balance text-background/80 md:text-lg lg:max-w-3xl lg:text-2xl">
                                        {item.description}
                                    </p>

                                    <Button
                                        size="lg"
                                        className="bg-accent font-semibold uppercase text-accent-foreground hover:bg-accent/90 md:mt-0 md:py-5"
                                        asChild
                                    >
                                        <Link href="/about">Discover More</Link>
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
