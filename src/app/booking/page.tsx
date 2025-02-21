import { PageLayout } from "@/components/layout/PageLayout";
import { BookingCalendar } from "@/components/booking/BookingCalendar";

export default function BookingPage() {
    return (
        <PageLayout
            headerVariant="light"
        >
            <BookingCalendar />
        </PageLayout>
    );
} 