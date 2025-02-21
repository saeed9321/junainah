import { PageLayout } from "@/components/layout/PageLayout";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
    return (
        <PageLayout headerVariant="default">
            <div className="min-h-screen bg-gradient-to-b from-black/90 to-green-100 pt-44">
                <ContactForm />
            </div>
        </PageLayout>
    );
} 