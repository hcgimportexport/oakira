import { ContactPage } from "@/components/contact";
import { ContactForm } from "@/components/globals/forms";
import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { MapFrame } from "@/components/home";

export default function Page() {
    return (
        <>
            <Header
                title="Contact Us"
                imageUrl="https://picsum.photos/seed/8498/2000/2000"
            />

            <GeneralShell>
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="basis-1/2">
                        <ContactForm style="inverted" />
                    </div>

                    <ContactPage />
                </div>

                <MapFrame />
            </GeneralShell>
        </>
    );
}
