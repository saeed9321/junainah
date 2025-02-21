import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RecentBookings() {
    const bookings = [
        { id: 1, farm: "Green Valley Organic Farm", date: "2024-03-15", guests: 4 },
        { id: 2, farm: "Mountain View Ranch", date: "2024-04-02", guests: 2 },
    ];

    return (
        <Card className="p-6">
            <div className="space-y-4">
                {bookings.map(booking => (
                    <div key={booking.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-medium">{booking.farm}</h3>
                                <p className="text-sm text-gray-500">
                                    {new Date(booking.date).toLocaleDateString()} • {booking.guests} guests
                                </p>
                            </div>
                            <Link href={`/dashboard/bookings/${booking.id}`}>
                                <Button variant="outline">View Details</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
} 