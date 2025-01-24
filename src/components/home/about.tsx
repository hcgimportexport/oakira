"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icons } from "../icons";
import { Button } from "../ui/button";

interface PageProps extends GenericProps {
    title: string;
}

export function About({ className, title, ...props }: PageProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:gap-20",
                className
            )}
            {...props}
        >
            <motion.div
                initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="aspect-[4/3] size-full basis-1/2"
            >
                <Image
                    src="https://picsum.photos/seed/45646/1000/1000"
                    alt={title}
                    width={1000}
                    height={1000}
                    className="size-full object-cover"
                />
            </motion.div>

            <div className="flex w-full basis-1/2 justify-center">
                <div className="space-y-5 md:space-y-10">
                    <motion.h2
                        initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-balance text-xl font-semibold uppercase md:text-3xl"
                    >
                        {title}
                    </motion.h2>

                    <div className="space-y-5 text-sm md:text-base">
                        <motion.p
                            initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            At HCG Group , we connect tea lovers worldwide with
                            the finest blends from top plantations. From the
                            robust flavors of Assam to the delicate notes of
                            Darjeeling, we specialize in sourcing and exporting
                            premium teas with a commitment to quality and
                            sustainability.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Our mission is to bridge the gap between growers and
                            consumers by promoting eco-friendly practices and
                            fair trade, ensuring every cup tells a story of
                            tradition and care. Whether you&apos;re a retailer,
                            distributor, or tea enthusiast, HCG is your trusted
                            partner for exceptional teas.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="font-semibold"
                        >
                            Sip the world with us.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        <Button size="lg" className="w-full md:w-auto">
                            <span>Learn More</span>
                            <Icons.ChevronRight />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
