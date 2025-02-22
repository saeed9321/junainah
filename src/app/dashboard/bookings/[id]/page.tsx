import { PageLayout } from "@/components/layout/PageLayout";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";

export default function BookingDetailsPage({ params }: { params: { id: string } }) {
    // In real app, fetch booking data using params.id
    const booking = {
        id: params.id,
        farm: "Green Valley Organic Farm",
        date: "2024-03-15",
        guests: 4,
        status: "Confirmed",
        total: 600
    };

    return (
        <PageLayout
            headerVariant="light"
        >

            <div className="mt-36 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="space-y-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold">{booking.farm}</h2>
                            <p className="text-gray-600 mt-2">Booking ID: #{booking.id}</p>
                        </div>
                        <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {booking.status}
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Date</h3>
                                <p>{new Date(booking.date).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Number of Guests</h3>
                                <p>{booking.guests} people</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Total Price</h3>
                                <p className="text-2xl font-bold text-green-600">
                                    ${booking.total}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link href="/dashboard" className="inline-block mt-6">
                        <Button variant="outline">
                            ← Back to Dashboard
                        </Button>
                    </Link>
                </div>
            </div>
        </PageLayout>
    );
} 