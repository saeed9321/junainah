"use client";

import { FactCard } from "./FactCard";
import { facts } from "./data";

export default function FactsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {facts.map((fact, index) => (
        <FactCard key={index} fact={fact} />
      ))}
    </div>
  );
}