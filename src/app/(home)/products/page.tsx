import { Header } from "@/components/globals/headers";
import { GeneralShell } from "@/components/globals/layouts";
import { ProductPage } from "@/components/products";

export default function Page() {
    return (
        <>
            <Header
                title="Our Products"
                imageUrl="https://picsum.photos/seed/1494/2000/2000"
            />

            <GeneralShell>
                <ProductPage />
            </GeneralShell>
        </>
    );
}
