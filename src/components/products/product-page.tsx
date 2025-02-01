"use client";

import { products } from "@/config/products";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/validations";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export function ProductPage({ className, ...props }: GenericProps) {
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
                    Our Catalogue
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Premium <span className="text-accent">Products</span>
                </motion.h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} index={index} />
                ))}
            </div>
        </section>
    );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="group overflow-hidden rounded-3xl bg-muted/50 transition-colors duration-300 hover:bg-accent/10"
            >
                <div className="overflow-hidden">
                    <div className="relative aspect-[16/9]">
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={2000}
                            height={1000}
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 p-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{product.title}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                            {product.description[0]}
                        </p>
                    </div>

                    <div>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-accent/10 text-accent transition-transform duration-300 hover:scale-110 hover:bg-accent/20"
                            onClick={() => setIsOpen(true)}
                        >
                            <Icons.Eye className="size-5" />
                        </Button>
                    </div>
                </div>
            </motion.div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-3xl overflow-hidden rounded-3xl p-0">
                    <div className="relative aspect-video">
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    <div className="space-y-6 p-8">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">
                                {product.title}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-4">
                            {product.description.map((desc, i) => (
                                <p key={i} className="text-muted-foreground">
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
