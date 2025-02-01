"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface PageProps {
    title: string;
    imageUrl: string;
}

export function Header({ title, imageUrl }: PageProps) {
    return (
        <div className="relative h-[50vh] w-full overflow-hidden">
            {/* Background Image with Zoom Effect */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
            >
                <Image
                    src={imageUrl}
                    alt={title}
                    className="size-full object-cover"
                    priority
                    width={2000}
                    height={2000}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
            </motion.div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border border-background/20 bg-background/5 px-6 py-2 text-sm font-medium uppercase tracking-wider text-background backdrop-blur-sm"
                >
                    Discover More
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-balance text-center text-4xl font-bold text-background md:text-5xl lg:text-7xl"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
                />
            </div>
        </div>
    );
}
