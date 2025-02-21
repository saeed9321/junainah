'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function FarmDetails({ farmId }: { farmId: string }) {
    const router = useRouter();
    // In a real app, you'd fetch data based on farmId
    const farm = {
        id: farmId,
        name: "Green Valley Organic Farm",
        description: "A sustainable organic farm specializing in heirloom vegetables",
        pricePerDay: 150,
        features: ["Organic Certification", "Farm Stay Available", "Workshops"]
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-6"
                >
                    ← Back to Farms
                </Button>

                <h2 className="text-3xl font-bold mb-4">{farm.name}</h2>
                <p className="text-lg text-gray-600 mb-6">{farm.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Features</h3>
                        <ul className="space-y-2">
                            {farm.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Book Your Visit</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Daily Rate:</span>
                                <span className="text-xl font-bold">${farm.pricePerDay}</span>
                            </div>
                            <Button
                                className="w-full"
                                onClick={() => router.push(`/booking?farm=${farm.id}`)}
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 