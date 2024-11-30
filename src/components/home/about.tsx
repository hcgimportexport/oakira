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
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Maxime quidem vero aperiam veniam facere
                            officia fugiat temporibus voluptate! Numquam nihil
                            enim magnam architecto eos consequuntur cumque aut,
                            doloribus magni expedita cupiditate atque aliquid
                            similique deserunt.
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugit quaerat illum dolorem suscipit eos ipsam
                            autem iure nam quibusdam ratione?
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
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Possimus iure velit explicabo incidunt natus
                            dolorem obcaecati adipisci voluptatum voluptatem
                            nihil eum ad voluptas perspiciatis officiis,
                            doloribus vitae saepe, itaque fugit numquam. Tenetur
                            quam voluptatibus quia beatae atque amet, laborum
                            qui.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus, corporis.
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
                        transition={{ duration: 0.5, delay: 1.6 }}
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
