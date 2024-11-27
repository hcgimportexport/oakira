"use client";

import { cn } from "@/lib/utils";
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
            <div className="aspect-[4/3] size-full basis-1/2">
                <Image
                    src="https://picsum.photos/seed/45646/1000/1000"
                    alt={title}
                    width={1000}
                    height={1000}
                    className="size-full object-cover"
                />
            </div>

            <div className="flex w-full basis-1/2 justify-center">
                <div className="space-y-5 md:space-y-10">
                    <h2 className="text-balance text-xl font-semibold uppercase md:text-3xl">
                        {title}
                    </h2>

                    <div className="space-y-5 text-sm md:text-base">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Maxime quidem vero aperiam veniam facere
                            officia fugiat temporibus voluptate! Numquam nihil
                            enim magnam architecto eos consequuntur cumque aut,
                            doloribus magni expedita cupiditate atque aliquid
                            similique deserunt.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugit quaerat illum dolorem suscipit eos ipsam
                            autem iure nam quibusdam ratione?
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Possimus iure velit explicabo incidunt natus
                            dolorem obcaecati adipisci voluptatum voluptatem
                            nihil eum ad voluptas perspiciatis officiis,
                            doloribus vitae saepe, itaque fugit numquam. Tenetur
                            quam voluptatibus quia beatae atque amet, laborum
                            qui.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus, corporis.
                        </p>
                    </div>

                    <Button size="lg" className="w-full md:w-auto">
                        <span>Learn More</span>
                        <Icons.ChevronRight />
                    </Button>
                </div>
            </div>
        </section>
    );
}
