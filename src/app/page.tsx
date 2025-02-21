'use client';

import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from '@/components/sections/Hero';
import { BestFarms } from "@/components/sections/BestFarms";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { FeaturesGrid } from '@/components/sections/Features';
import { ParallaxSection } from '@/components/sections/Parallax';


export default function Home() {
  return (
    <PageLayout >
      <HeroSection />

      <FeaturesGrid
        features={[
          {
            title: "Sustainable Farming",
            description: "Eco-friendly agricultural practices",
            icon: '🌱',
            gradient: 'from-emerald-100 to-green-50'
          },
          {
            title: "Handcrafted Goods",
            description: "Artisanal farm-to-table products",
            icon: '🍞',
            gradient: 'from-amber-100 to-orange-50'
          },
          {
            title: "Educational Tours",
            description: "Learn modern agriculture",
            icon: '👩🌾',
            gradient: 'from-sky-100 to-blue-50'
          }
        ]}
      />

      <ParallaxSection
        bgImage="/images/farms/farm-2.jpg"
        overlay="from-black/90 to-transparent"
        content={{
          title: "Innovative Farming Solutions",
          description: "Blending tradition with cutting-edge technology",
          cta: { label: "Explore Innovations", onClick: () => { } }
        }}
      />

      <BestFarms />
      <FeedbackSection />
      <NewsSection />
    </PageLayout>
  );
}
