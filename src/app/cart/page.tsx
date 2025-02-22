import { PageLayout } from "@/components/layout/PageLayout";
import { CartDisplay } from "@/components/store/CartDisplay";

export default function CartPage() {
    return (
        <PageLayout
        >
            {/* <div className="max-w-4xl mx-auto mt-32"> */}
            <div className="min-h-screen px-4 pt-24 bg-gradient-to-b flex items-center justify-center from-black/90 to-green-100 mx-auto">
                <CartDisplay />
            </div>
        </PageLayout>
    );
} 