"use client";

import { products } from "@/config/products";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/validations";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export function ProductPage({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10", className)} {...props}>
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </section>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="border">
                <div className="aspect-[16/5] size-full overflow-hidden">
                    <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={2000}
                        height={2000}
                        className="size-full object-cover brightness-50"
                    />
                </div>

                <div className="flex items-center justify-between gap-2 p-5">
                    <h3 className="text-2xl font-bold">{product.title}</h3>

                    <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                        onClick={() => setIsOpen(true)}
                    >
                        <Icons.Info className="size-4" />
                    </Button>
                </div>
            </div>

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
