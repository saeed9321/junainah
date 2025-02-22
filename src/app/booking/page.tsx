import { PageLayout } from "@/components/layout/PageLayout";
import { BookingCalendar } from "@/components/booking/BookingCalendar";

export default function BookingPage() {
    return (
        <PageLayout
        >
            <div className="min-h-screen px-4 pt-36 bg-gradient-to-b from-black/90 to-green-100">
                <BookingCalendar />
            </div>
        </PageLayout>
    );
} 