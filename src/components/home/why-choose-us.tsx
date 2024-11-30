"use client";

import { whyChooseUs } from "@/config/why-choose-us";
import { cn } from "@/lib/utils";
import { WhyChooseUs as WhyChooseUsType } from "@/lib/validations";
import { motion } from "framer-motion";
import Image from "next/image";

export function WhyChooseUs({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10 py-10", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-balance text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-semibold uppercase md:text-3xl"
                >
                    Why Choose Us
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-sm text-muted-foreground md:text-base"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus vitae laudantium distinctio praesentium tempore
                    totam perferendis. Qui maxime blanditiis amet ipsum nihil
                    unde cum id eveniet! Similique assumenda sed dolorum sit
                    inventore, porro est temporibus!
                </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {whyChooseUs.map((item, index) => (
                    <WhyChooseUsCard key={index} index={index} {...item} />
                ))}
            </div>
        </section>
    );
}

function WhyChooseUsCard({
    title,
    description,
    imageUrl,
    className,
    index,
    ...props
}: WhyChooseUsType & GenericProps & { index: number }) {
    return (
        <div
            className={cn("flex flex-col items-center gap-5", className)}
            {...props}
        >
            <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className="aspect-video w-full overflow-hidden"
            >
                <Image
                    src={imageUrl}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="size-full object-cover"
                />
            </motion.div>

            <div className="space-y-2 text-balance text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className="text-2xl font-semibold"
                >
                    {title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="text-muted-foreground"
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
}
