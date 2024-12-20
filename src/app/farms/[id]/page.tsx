"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, ArrowLeft } from "lucide-react";
import { farms } from "../data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function FarmDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const farm = farms.find((f) => f.id === params?.id);

  if (!farm) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link href="/farms">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Farms
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div
            className="h-[400px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${farm.image})` }}
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">{farm.name}</h1>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{farm.location}</span>
            </div>
            <p className="text-lg mb-6">{farm.details}</p>

            <Card className="p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Activities</h2>
              <ul className="list-disc list-inside space-y-2">
                {farm.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{farm.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{farm.contact.email}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}