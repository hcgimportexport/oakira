import { GeneralShell } from "@/components/globals/layouts";
import {
    About,
    Inquiry,
    Landing,
    MemberShipAndCertification,
    Products,
    WhatWeDo,
    WhyChooseUs,
} from "@/components/home";
import { Iframe } from "@/components/ui/iframe";
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
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6721.492686158559!2d-2.308764056428255!3d53.44331882910834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487badd26089198b%3A0xc6768e719eedd45!2sStretford%20Mall!5e0!3m2!1sen!2sin!4v1730034800200!5m2!1sen!2sin"
                    className="w-full"
                    height={500}
                    width={1000}
                />
                <Inquiry />
            </GeneralShell>
        </>
    );
}
