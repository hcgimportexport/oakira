import { Header } from "@/components/globals/headers";
import { ServicesPage } from "@/components/services";

export default function Page() {
    return (
        <>
            <Header
                title="Our Services"
                imageUrl="https://picsum.photos/seed/9899/2000/2000"
            />

            <ServicesPage />
        </>
    );
}
