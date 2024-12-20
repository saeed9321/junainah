"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import type { Farm } from "../farms/types";

interface FarmCardProps {
  farm: Farm;
}

export function FarmCard({ farm }: FarmCardProps) {

  return (
    <Card className="overflow-hidden">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${farm.image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{farm.name}</h3>
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{farm.location}</span>
        </div>
        <p className="text-muted-foreground mb-4">{farm.description}</p>
        <Link href={`/farms/${farm.id}`}>
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
      </div>
    </Card>
  );
}