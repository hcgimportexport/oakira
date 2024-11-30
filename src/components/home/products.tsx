"use client";

import { products } from "@/config/products";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function Products({ className, ...props }: GenericProps) {
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
                Our Products
            </motion.h2>

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
                                <motion.div
                                    initial={
                                        index === 0
                                            ? {
                                                  opacity: 0,
                                                  y: 20,
                                                  filter: "blur(2px)",
                                              }
                                            : {}
                                    }
                                    whileInView={
                                        index === 0
                                            ? {
                                                  opacity: 1,
                                                  y: 0,
                                                  filter: "blur(0px)",
                                              }
                                            : {}
                                    }
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="aspect-square size-full md:aspect-[16/5]"
                                >
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        width={2000}
                                        height={2000}
                                        className="size-full object-cover brightness-50"
                                        priority={index === 0}
                                    />
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.h3
                                        initial={
                                            index === 0
                                                ? {
                                                      opacity: 0,
                                                      y: 20,
                                                      filter: "blur(2px)",
                                                  }
                                                : {}
                                        }
                                        whileInView={
                                            index === 0
                                                ? {
                                                      opacity: 1,
                                                      y: 0,
                                                      filter: "blur(0px)",
                                                  }
                                                : {}
                                        }
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6,
                                        }}
                                        className="text-balance text-xl font-semibold uppercase md:text-3xl"
                                    >
                                        {item.title}
                                    </motion.h3>

                                    <div className="space-y-2">
                                        {item.description.map((x, i) => (
                                            <motion.p
                                                initial={
                                                    index === 0
                                                        ? {
                                                              opacity: 0,
                                                              y: 20,
                                                              filter: "blur(2px)",
                                                          }
                                                        : {}
                                                }
                                                whileInView={
                                                    index === 0
                                                        ? {
                                                              opacity: 1,
                                                              y: 0,
                                                              filter: "blur(0px)",
                                                          }
                                                        : {}
                                                }
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.8 + i * 0.2,
                                                }}
                                                className="text-sm md:text-base"
                                                key={i}
                                            >
                                                {x}
                                            </motion.p>
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
