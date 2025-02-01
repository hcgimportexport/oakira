import { BuildTogether } from "@/components/catalogue";
import { CountryWeExport, Growing } from "@/components/export";
import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { Inquiry } from "@/components/home";

export default function Page() {
    return (
        <>
            <Header
                title="Export"
                imageUrl="https://picsum.photos/seed/56994/2000/2000"
            />

            <GeneralShell>
                <Growing />
            </GeneralShell>

            <GeneralShell
                classNames={{
                    mainWrapper: "bg-muted",
                }}
            >
                <CountryWeExport />
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
