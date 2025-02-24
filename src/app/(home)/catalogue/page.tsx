import { BuildTogether, Catalogue, Connect } from "@/components/catalogue";
import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { Inquiry } from "@/components/home";

export default function Page() {
    return (
        <>
            <Header
                title="E-Catalogue"
                imageUrl="https://utfs.io/a/wjndgl4cy4/6fyUUFYtyiQeOyDmUzQke6vKJxL2HVnXaSZ9m1WAdhEB3Mbt"
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
