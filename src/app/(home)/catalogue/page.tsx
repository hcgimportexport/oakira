import { BuildTogether, Catalogue, Connect } from "@/components/catalogue";
import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { Inquiry } from "@/components/home";

export default function Page() {
    return (
        <>
            <Header
                title="E-Catalogue"
                imageUrl="https://picsum.photos/seed/494/2000/2000"
            />

            <GeneralShell>
                <Catalogue title="Download Catalogue" />
            </GeneralShell>

            <GeneralShell
                classNames={{
                    mainWrapper: "bg-[#1e1e1e]",
                }}
            >
                <BuildTogether />
            </GeneralShell>

            <GeneralShell>
                <Connect />
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
