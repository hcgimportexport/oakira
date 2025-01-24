import { GeneralShell } from "@/components/globals/layouts";
import {
    About,
    Inquiry,
    Landing,
    MapFrame,
    MemberShipAndCertification,
    Products,
    WhatWeDo,
    WhyChooseUs,
} from "@/components/home";
import { banners } from "@/config/banner";

export default function Page() {
    return (
        <>
            <Landing banners={banners} />

            <GeneralShell
                classNames={{
                    mainWrapper: "bg-[#1e1e1e]",
                }}
            >
                <About title="About Us" className="text-background" />
            </GeneralShell>

            <GeneralShell>
                <WhatWeDo />
                <Products />
            </GeneralShell>

            <GeneralShell
                classNames={{
                    mainWrapper: "bg-muted",
                    innerWrapper: "p-0",
                }}
            >
                <MemberShipAndCertification />
            </GeneralShell>

            <GeneralShell>
                <WhyChooseUs />
                <MapFrame />
                <Inquiry />
            </GeneralShell>
        </>
    );
}
