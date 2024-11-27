"use client";

import { products } from "@/config/products";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function Products({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10 py-10", className)} {...props}>
            <h2 className="text-balance text-center text-2xl font-semibold uppercase md:text-3xl">
                Our Products
            </h2>

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
                <CarouselContent className="flex flex-row gap-5">
                    {products.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="space-y-5">
                                <div className="aspect-square size-full md:aspect-[16/5]">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        width={2000}
                                        height={2000}
                                        className="size-full object-cover brightness-50"
                                        priority={index === 0}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-balance text-xl font-semibold uppercase md:text-3xl">
                                        {item.title}
                                    </h3>

                                    <div className="space-y-2">
                                        {item.description.map((x, i) => (
                                            <p
                                                className="text-sm md:text-base"
                                                key={i}
                                            >
                                                {x}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
