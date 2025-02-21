import { PageLayout } from "@/components/layout/PageLayout";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
    return (
        <PageLayout
            title="Secure Checkout"
            description="Complete your purchase with confidence"
        >
            <div className="max-w-2xl mx-auto">
                <CheckoutForm />
            </div>
        </PageLayout>
    );
} 