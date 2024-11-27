"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/lib/validations";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const products: Product[] = [
    {
        title: "Premium Tea Collection",
        description: [
            "HCG IMPORT EXPORT is a distinguished merchant import-export company specializing in the global trade of tea. We pride ourselves on sourcing and delivering exceptional quality teas from the world’s most renowned tea-producing regions.",
            "With a keen focus on quality, sustainability, and customer satisfaction, we meticulously select our tea suppliers based on their commitment to ethical practices and superior craftsmanship. Our extensive network of tea estates and growers enables us to offer a diverse range of teas, including black, green, oolong, white, and herbal varieties",
        ],
        imageUrl: "https://picsum.photos/seed/5146/2000/2000",
    },
    {
        title: "Pure Natural Honey",
        description: [
            "HCG IMPORT EXPORT is a leading supplier of premium quality honey sourced from the world’s most pristine regions. Our honey is raw, unprocessed, and free from additives, ensuring that you receive all the natural goodness and health benefits that honey has to offer.",
            "We work closely with our beekeepers to ensure that our honey is ethically sourced and sustainably harvested. Our range of honey includes a variety of floral types, each with its own unique flavor profile and health benefits.",
        ],
        imageUrl: "https://picsum.photos/seed/54646/2000/2000",
    },
    {
        title: "Fresh Exotic Fruits",
        description: [
            "HCG IMPORT EXPORT is a trusted supplier of fresh exotic fruits sourced from the world’s most fertile and pristine regions. Our fruits are handpicked at the peak of ripeness to ensure maximum flavor and nutritional value.",
            "We work closely with our growers to ensure that our fruits are grown using sustainable farming practices that protect the environment and support local communities. Our range of exotic fruits includes a variety of tropical and subtropical fruits, each with its own unique flavor and health benefits.",
        ],
        imageUrl: "https://picsum.photos/seed/986/2000/2000",
    },
];

export function ProductPage({ className, ...props }: GenericProps) {
    return (
        <div className={cn("", className)} {...props}>
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
                                    <h3 className="text-balance text-xl font-bold uppercase md:text-3xl">
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
        </div>
    );
}
