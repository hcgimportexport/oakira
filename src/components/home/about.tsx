"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";
import { Button } from "../ui/button";

interface PageProps extends GenericProps {
    title: string;
}

export function About({ className, title, ...props }: PageProps) {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.3]);

    return (
        <section
            className={cn(
                "flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:gap-20",
                className
            )}
            {...props}
        >
            <div className="group aspect-[4/3] size-full basis-1/2 overflow-hidden rounded-3xl">
                <motion.div style={{ scale }} className="relative size-full">
                    <Image
                        src="https://picsum.photos/seed/45646/1000/1000"
                        alt={title}
                        width={1000}
                        height={1000}
                        className="size-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
            </div>

            <div className="flex w-full basis-1/2 justify-center">
                <div className="flex flex-col items-start gap-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider"
                    >
                        {title}
                    </motion.p>

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-balance text-lg"
                        >
                            At HCG Group, we connect tea lovers worldwide with
                            the finest blends from top plantations. From the
                            robust flavors of Assam to the delicate notes of
                            Darjeeling, we specialize in sourcing and exporting
                            premium teas with a commitment to quality and
                            sustainability.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-balance text-lg"
                        >
                            Our mission is to bridge the gap between growers and
                            consumers by promoting eco-friendly practices and
                            fair trade, ensuring every cup tells a story of
                            tradition and care. Whether you&apos;re a retailer,
                            distributor, or tea enthusiast, HCG is your trusted
                            partner for exceptional teas.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-xl font-semibold"
                        >
                            Sip the world with us.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Button
                            size="lg"
                            variant={pathname === "/" ? "default" : "outline"}
                            className={cn(
                                "group",
                                pathname === "/"
                                    ? "bg-background text-foreground hover:bg-background/90"
                                    : "border-foreground/20 bg-foreground/5 backdrop-blur-sm hover:border-foreground/40 hover:bg-foreground/10"
                            )}
                        >
                            <span>Learn More</span>
                            <Icons.ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
