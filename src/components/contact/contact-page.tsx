"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icons } from "../icons";

export function ContactPage({ className, ...props }: GenericProps) {
    return (
        <div className={cn("basis-1/2 space-y-10", className)} {...props}>
            <div className="space-y-5">
                <motion.h3
                    initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl font-semibold uppercase md:text-3xl"
                >
                    Talk to Us
                </motion.h3>

                <div className="flex items-center gap-5">
                    <motion.div
                        initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="rounded-full border p-3"
                    >
                        <Icons.Mail className="size-4 md:size-7" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <p className="uppercase md:text-xl">Email</p>

                        <Link
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-sm text-muted-foreground md:text-base"
                        >
                            {siteConfig.contact.email}
                        </Link>
                    </motion.div>
                </div>

                <div className="flex items-center gap-5">
                    <motion.div
                        initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="rounded-full border p-3"
                    >
                        <Icons.MapPin className="size-4 md:size-7" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <p className="uppercase md:text-xl">Address</p>

                        <p className="text-sm text-muted-foreground md:text-base">
                            {siteConfig.contact.location}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="space-y-5">
                <motion.h3
                    initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-xl font-semibold uppercase md:text-3xl"
                >
                    Follow Us
                </motion.h3>

                {siteConfig.links &&
                    !!Object.entries(siteConfig.links).length && (
                        <div className="flex gap-4">
                            {Object.entries(siteConfig.links).map(
                                ([name, href], i) => {
                                    const Icon =
                                        Icons[name as keyof typeof Icons];

                                    return (
                                        <motion.button
                                            initial={{
                                                opacity: 0,
                                                x: 20,
                                                filter: "blur(2px)",
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                filter: "blur(0px)",
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 1.4 + i * 0.2,
                                            }}
                                            key={name}
                                            className="flex size-10 items-center justify-center rounded-full border text-muted-foreground"
                                        >
                                            <Link href={href}>
                                                <Icon className="size-4 md:size-5" />
                                            </Link>
                                        </motion.button>
                                    );
                                }
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
}
