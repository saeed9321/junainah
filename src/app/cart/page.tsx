import { PageLayout } from "@/components/layout/PageLayout";
import { CartDisplay } from "@/components/store/CartDisplay";

export default function CartPage() {
    return (
        <PageLayout
            title="Your Shopping Cart"
            description="Review your selected items before checkout"
        >
            <div className="max-w-4xl mx-auto">
                <CartDisplay />
            </div>
        </PageLayout>
    );
} 