"use client";

import { Card } from "@/components/ui/card";
import { Sprout, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "Sustainable Farming",
    description: "Supporting eco-friendly agricultural practices across Oman",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Empowering local farmers and preserving traditional methods",
  },
  {
    icon: Globe,
    title: "Cultural Exchange",
    description: "Bridging cultures through agricultural tourism experiences",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Welcome to OmanFarms, your gateway to experiencing the rich agricultural heritage of Oman. We connect tourists with local farmers, offering unique experiences that showcase traditional farming methods and modern sustainable practices.
          </p>
          <p className="text-lg mb-6">
            Our mission is to promote agricultural tourism while supporting local communities and preserving Omans farming traditions for future generations.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6">
                <Icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}