import { BuildTogether } from "@/components/catalogue";
import { Benefits, GrowWithUs } from "@/components/dealership";
import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { Inquiry, Products } from "@/components/home";

export default function Page() {
    return (
        <>
            <Header
                title="Dealership"
                imageUrl="https://picsum.photos/seed/deal/2000/2000"
            />

            <GeneralShell>
                <GrowWithUs />
            </GeneralShell>

            <GeneralShell>
                <Benefits />
                <Products />
            </GeneralShell>

            <GeneralShell
                classNames={{
                    mainWrapper: "bg-[#1e1e1e]",
                }}
            >
                <BuildTogether />
            </GeneralShell>

            <GeneralShell
                classNames={{
                    mainWrapper: "bg-muted",
                }}
            >
                <Inquiry />
            </GeneralShell>
        </>
    );
}
