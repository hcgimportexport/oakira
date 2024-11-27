import { ContactPage } from "@/components/contact";
import { GeneralShell } from "@/components/globals/layouts";
import { Iframe } from "@/components/ui/iframe";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="relative size-full h-[calc(100vh-60vh)] overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/8498/2000/2000"
                    alt="About"
                    className="size-full object-cover brightness-50"
                    priority
                    width={2000}
                    height={2000}
                />

                <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-balance text-center text-5xl font-bold text-background">
                    Contact Us
                </h1>
            </div>

            <GeneralShell>
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="basis-1/2 border">
                        <Iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLScEpYWHVdJfC05TDCOqejgiof3-UOXRGnvrVB1BuSwUzZjz9g/viewform?embedded=true"
                            className="min-h-96 w-full"
                        />
                    </div>

                    <ContactPage />
                </div>
            </GeneralShell>
        </>
    );
}
