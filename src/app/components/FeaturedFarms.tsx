"use client";

// import { Card } from "./ui/card";
// import { Button } from "./ui/button";
import { farms } from '../farms/data'
import { FarmCard } from "./FarmCard";

export default function FeaturedFarms() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {farms.map((farm, index) => (
                <FarmCard key={index} farm={farm} />
                // <Card key={index} className="overflow-hidden">
                //     <div
                //         className="h-48 bg-cover bg-center"
                //         style={{ backgroundImage: `url(${farm.image})` }}
                //     />
                //     <div className="p-6">
                //         <h3 className="text-xl font-semibold mb-2">{farm.name}</h3>
                //         <p className="text-muted-foreground mb-4">{farm.description}</p>
                //         <Button variant="outline" className="w-full">
                //             Learn More
                //         </Button>
                //     </div>
                // </Card>
            ))}
        </div>
    );
}