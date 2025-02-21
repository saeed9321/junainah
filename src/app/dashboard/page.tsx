import { PageLayout } from "@/components/layout/PageLayout";
import { RecentBookings } from "@/components/dashboard/RecentBookings";

export default function DashboardPage() {
    return (
        <PageLayout
            title="Your Dashboard"
            description="Manage your bookings and account settings"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4">Recent Bookings</h2>
                        <RecentBookings />
                    </div>
                    <div className="md:col-span-1">
                        <div className="border rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Membership Status</h3>
                                    <p className="text-green-600">Premium Member</p>
                                </div>
                                <div>
                                    <h3 className="font-medium">Loyalty Points</h3>
                                    <p className="text-green-600">1,250 Points</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
} 