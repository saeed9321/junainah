"use client";

import { Card } from "@/components/ui/card";
import type { Fact } from "./data";

interface FactCardProps {
  fact: Fact;
}

export function FactCard({ fact }: FactCardProps) {
  const Icon = fact.icon;
  
  return (
    <Card className="p-6 text-center">
      <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
      <h3 className="text-2xl font-bold mb-2">{fact.value}</h3>
      <h4 className="text-lg font-semibold mb-2">{fact.title}</h4>
      <p className="text-muted-foreground">{fact.description}</p>
    </Card>
  );
}