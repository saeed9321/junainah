"use client";

import { Search } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
// import { Card } from "./components/ui/card";
import FeaturedFarms from "./components/FeaturedFarms";
import FactsSection from "./components/facts/FactsSection";
import NewsletterSignup from "./components/NewsletterSignup";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Navigation />
            </div>
            <div className="relative w-full md:w-72">
              <Input
                type="search"
                placeholder="Search farms..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Discover the Beauty of Agricultural Tourism in Oman
            </h1>
            <p className="text-xl mb-8">
              Experience the rich agricultural heritage and sustainable farming
              practices of Oman through immersive farm tours and activities.
            </p>
            <Button size="lg" className="text-lg">
              Explore Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Agricultural Tourism in Oman
          </h2>
          <FactsSection />
        </div>
      </section>

      {/* Featured Farms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Farms</h2>
          <FeaturedFarms />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@omanfarms.com</p>
              <p>Phone: +968 1234 5678</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent">
                  Facebook
                </a>
                <a href="#" className="hover:text-accent">
                  Instagram
                </a>
                <a href="#" className="hover:text-accent">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}