"use client";

import { Users, TreePine } from "lucide-react";
import { Card } from "./ui/card";

const facts = [
    {
        Icon: Users,
        title: "Annual Visitors",
        value: "50,000+",
        description: "Tourists exploring Omani farms annually",
    },
    {
        Icon: Users,
        title: "Partner Farms",
        value: "100+",
        description: "Traditional and modern farms across Oman",
    },
    {
        Icon: TreePine,
        title: "Date Palm Trees",
        value: "1M+",
        description: "Contributing to Oman's agricultural heritage",
    },
];

export default function FactsSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map((fact, index) => {
                const IconComponent = fact.Icon;
                return (
                    <Card key={index} className="p-6 text-center">
                        <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h3 className="text-2xl font-bold mb-2">{fact.value}</h3>
                        <h4 className="text-lg font-semibold mb-2">{fact.title}</h4>
                        <p className="text-muted-foreground">{fact.description}</p>
                    </Card>
                );
            })}
        </div>
    );
}