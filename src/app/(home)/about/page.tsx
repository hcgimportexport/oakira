import {
    CoreBeliefs,
    OurMission,
    TrustedExportPartner,
} from "@/components/about";
import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { About, Inquiry, MemberShipAndCertification } from "@/components/home";

export default function Page() {
    return (
        <>
            <Header
                title="About Us"
                imageUrl="https://picsum.photos/seed/68766/2000/2000"
            />

            <GeneralShell>
                <About title="Who Are We" />
            </GeneralShell>

            <GeneralShell
                classNames={{
                    mainWrapper: "bg-muted",
                    innerWrapper: "p-0",
                }}
            >
                <OurMission />
            </GeneralShell>

            <GeneralShell>
                <TrustedExportPartner />
                <CoreBeliefs />
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
                <Inquiry />
            </GeneralShell>
        </>
    );
}
