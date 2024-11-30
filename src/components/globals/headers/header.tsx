"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageProps {
    title: string;
    imageUrl: string;
}

export function Header({ title, imageUrl }: PageProps) {
    return (
        <div className="relative size-full h-[calc(100vh-60vh)] overflow-hidden">
            <Image
                src={imageUrl}
                alt="About"
                className="size-full object-cover brightness-50"
                priority
                width={2000}
                height={2000}
            />

            <motion.h1
                initial={{
                    opacity: 0,
                    filter: "blur(2px)",
                }}
                animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                }}
                className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-balance text-center text-5xl font-bold text-background"
            >
                {title}
            </motion.h1>
        </div>
    );
}
