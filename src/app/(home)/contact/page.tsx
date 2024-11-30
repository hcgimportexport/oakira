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

                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6721.492686158559!2d-2.308764056428255!3d53.44331882910834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487badd26089198b%3A0xc6768e719eedd45!2sStretford%20Mall!5e0!3m2!1sen!2sin!4v1730034800200!5m2!1sen!2sin"
                    className="w-full py-10"
                    height={500}
                    width={1000}
                />
            </GeneralShell>
        </>
    );
}
