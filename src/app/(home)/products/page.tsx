import { GeneralShell } from "@/components/globals/layouts";
import { WhatWeDo } from "@/components/home";
import { ProductPage } from "@/components/products";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="relative size-full h-[calc(100vh-60vh)] overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/1494/2000/2000"
                    alt="About"
                    className="size-full object-cover brightness-50"
                    priority
                    width={2000}
                    height={2000}
                />

                <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-balance text-center text-5xl font-bold text-background">
                    Our Products
                </h1>
            </div>

            <GeneralShell>
                <WhatWeDo />
                <ProductPage />
            </GeneralShell>
        </>
    );
}
