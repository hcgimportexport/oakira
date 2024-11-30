"use client";

import { products } from "@/config/products";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/validations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export function ProductPage({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10", className)} {...props}>
            {products.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
            ))}
        </section>
    );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border"
            >
                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                    className="aspect-[16/5] size-full overflow-hidden"
                >
                    <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={2000}
                        height={2000}
                        className="size-full object-cover brightness-50"
                    />
                </motion.div>

                <div className="flex items-center justify-between gap-2 p-5">
                    <motion.h3
                        initial={{ opacity: 0, x: -20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                        className="text-lg font-bold md:text-2xl"
                    >
                        {product.title}
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    >
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full"
                            onClick={() => setIsOpen(true)}
                        >
                            <Icons.Info className="size-4" />
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{product.title}</DialogTitle>
                    </DialogHeader>

                    <div className="aspect-[16/5] size-full overflow-hidden">
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={2000}
                            height={2000}
                            className="size-full object-cover brightness-50"
                        />
                    </div>

                    <div className="space-y-2 text-sm">
                        {product.description.map((description, index) => (
                            <p key={index}>{description}</p>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
