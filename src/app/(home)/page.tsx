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

            <GeneralShell>
                <About title="About Us" />
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
