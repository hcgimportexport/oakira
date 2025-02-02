"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { Icons } from "../icons";
import { Iframe } from "../ui/iframe";

export function MapFrame({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-16 py-20", className)} {...props}>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                >
                    Our Location
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Visit Our <span className="text-accent">Office</span>
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
            >
                <div className="group relative overflow-hidden rounded-3xl bg-muted/50 shadow-lg transition-all duration-300 hover:bg-accent/5 hover:shadow-xl">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6721.492686158559!2d-2.308764056428255!3d53.44331882910834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487badd26089198b%3A0xc6768e719eedd45!2sStretford%20Mall!5e0!3m2!1sen!2sin!4v1730034800200!5m2!1sen!2sin"
                        height={500}
                        className="grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="absolute inset-x-0 -bottom-6 z-10 flex justify-center">
                    <Link
                        href="https://maps.app.goo.gl/uZrvMjTUa428AwWh7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:scale-105"
                    >
                        <Icons.Navigation className="size-4" />
                        <span>Get Directions</span>
                        <Icons.ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
