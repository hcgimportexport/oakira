import { ContactPage } from "@/components/contact";
import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { MapFrame } from "@/components/home";
import { Iframe } from "@/components/ui/iframe";

export default function Page() {
    return (
        <>
            <Header
                title="Contact Us"
                imageUrl="https://picsum.photos/seed/8498/2000/2000"
            />

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

                <MapFrame />
            </GeneralShell>
        </>
    );
}
