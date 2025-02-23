import { BuildTogether } from "@/components/catalogue";
import { CountryWeExport, Growing } from "@/components/export";
import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { Inquiry, Testimonials } from "@/components/home";

export default function Page() {
    return (
        <>
            <Header
                title="Export"
                imageUrl="https://utfs.io/a/wjndgl4cy4/6fyUUFYtyiQeWVSBW0uvVMc0UZwGfObYaE45uQsHdKl36CDI"
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

            <GeneralShell>
                <Testimonials />
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
