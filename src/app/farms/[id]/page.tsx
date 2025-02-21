import { PageLayout } from "@/components/layout/PageLayout";
import { FarmDetails } from "@/components/farms/FarmDetails";

export default function FarmPage({ params }: { params: { id: string } }) {
    return (
        <PageLayout
            title="Farm Details"
            description="Explore this farm's unique offerings"
        >
            <FarmDetails farmId={params.id} />
        </PageLayout>
    );
} 