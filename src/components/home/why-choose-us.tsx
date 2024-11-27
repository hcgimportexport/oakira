"use client";

import { whyChooseUs } from "@/config/why-choose-us";
import { cn } from "@/lib/utils";
import { WhyChooseUs as WhyChooseUsType } from "@/lib/validations";
import Image from "next/image";

export function WhyChooseUs({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10 py-10", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-balance text-center">
                <h2 className="text-2xl font-semibold uppercase md:text-3xl">
                    Why Choose Us
                </h2>
                <p className="text-sm text-muted-foreground md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus vitae laudantium distinctio praesentium tempore
                    totam perferendis. Qui maxime blanditiis amet ipsum nihil
                    unde cum id eveniet! Similique assumenda sed dolorum sit
                    inventore, porro est temporibus!
                </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {whyChooseUs.map((item, index) => (
                    <WhyChooseUsCard key={index} {...item} />
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
    ...props
}: WhyChooseUsType & GenericProps) {
    return (
        <div
            className={cn("flex flex-col items-center gap-5", className)}
            {...props}
        >
            <div className="aspect-video w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="size-full object-cover"
                />
            </div>

            <div className="space-y-2 text-balance text-center">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}
