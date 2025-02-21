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
                        src="https://utfs.io/a/wjndgl4cy4/6fyUUFYtyiQeBq3MjaEUkR3rjH7EFh4MzWxKoIObiC5ySTPg"
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
                            We are leading in premium tea products.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-balance text-lg"
                        >
                            Oakira is a trusted brand known for making and
                            exporting high-quality tea. We offer a wide range of
                            teas, including Black tea, Green tea, Oolong tea and
                            White tea.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-balance text-lg"
                        >
                            Each of our teas is carefully selected to provide
                            great taste and quality, using the best ingredients.
                            We&apos;re dedicated to bringing you the best tea
                            experience, enjoyed by tea lovers everywhere.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="text-xl font-semibold"
                        >
                            We Curate The Finest Teas For Every Taste.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
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
