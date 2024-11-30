"use client";

import { certification } from "@/config/certification";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function MemberShipAndCertification({
    className,
    ...props
}: GenericProps) {
    return (
        <>
            <section
                className={cn(
                    "hidden items-center gap-10 py-10 lg:flex",
                    className
                )}
                {...props}
            >
                <motion.h4
                    initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg font-semibold"
                >
                    Membership & Certification
                </motion.h4>

                <InfiniteMovingCards items={certification} direction="left" />
            </section>

            <section
                className={cn("space-y-10 p-10 lg:hidden", className)}
                {...props}
            >
                <h2 className="text-balance text-center text-2xl font-semibold uppercase md:text-3xl">
                    Membership & Certification
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
                    <CarouselContent className="flex flex-row gap-4">
                        {certification.map((item, index) => (
                            <CarouselItem key={index} className="text-center">
                                <Link href={item.link} className="space-y-4">
                                    <div className="h-80">
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={item.logoUrl}
                                            alt={item.name}
                                            className="size-full object-cover"
                                        />
                                    </div>

                                    <h3 className="text-lg font-semibold uppercase">
                                        {item.name}
                                    </h3>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>
        </>
    );
}
