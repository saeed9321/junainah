'use client';

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function BookingCalendar() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedFarm, setSelectedFarm] = useState<string>("");

    const farms = [
        { id: 1, name: "Green Valley Organic Farm" },
        { id: 2, name: "Mountain View Ranch" },
        { id: 3, name: "Sunset Orchard" },
    ];

    return (
        <div className="max-w-4xl mx-auto pt-44">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Select Farm</h3>
                    <div className="space-y-2">
                        {farms.map(farm => (
                            <Button
                                key={farm.id}
                                variant={selectedFarm === farm.name ? "default" : "outline"}
                                className="w-full text-left justify-start"
                                onClick={() => setSelectedFarm(farm.name)}
                            >
                                {farm.name}
                            </Button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Select Date</h3>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </div>
            </div>

            <div className="mt-8 text-center">
                <Button size="lg" className="px-8">
                    Continue Booking
                </Button>
            </div>
        </div>
    );
} 