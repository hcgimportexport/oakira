import { GeneralShell } from "@/components/globals/layouts";
import {
    About,
    Landing,
    MemberShipAndCertification,
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
                <WhyChooseUs />
                <MemberShipAndCertification />
            </GeneralShell>
        </>
    );
}
