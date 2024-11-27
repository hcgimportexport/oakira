"use client";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";

export function WhatWeDo({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-10 py-10", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-balance text-center">
                <h2 className="text-2xl font-semibold uppercase md:text-3xl">
                    What We Do
                </h2>
                <p className="text-sm text-muted-foreground md:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Qui, cumque rerum voluptatem, ab sint facilis numquam
                    temporibus eius corrupti, expedita amet perferendis quia
                    suscipit excepturi. Eos, laudantium repellat temporibus
                    mollitia provident nihil cumque corporis quisquam.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                <WhatWeDoCard
                    icon="Leaf"
                    title="Import"
                    description="Bringing the world to your doorstep, we import a diverse range of high-quality goods from trusted suppliers across the globe"
                />
                <WhatWeDoCard
                    icon="Heart"
                    title="Export"
                    description="Exporting quality products to destinations worldwide, connecting businesses to global markets seamlessly"
                />
                <WhatWeDoCard
                    icon="Footprints"
                    title="Sourcing"
                    description="Scouring the globe to identify high-quality products at competitive prices, leveraging our extensive network of suppliers and manufacturers"
                />
            </div>
        </section>
    );
}

function WhatWeDoCard({
    icon,
    title,
    description,
}: {
    icon: keyof typeof Icons;
    title: string;
    description: string;
}) {
    const Icon = Icons[icon];

    return (
        <div className="flex h-full flex-col items-center justify-center space-y-4 bg-muted p-6 py-10 text-center">
            <div className="text-primary">
                <Icon className="size-8" />
            </div>

            <div className="space-y-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}
