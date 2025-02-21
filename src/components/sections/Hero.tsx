'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        title: "FARMING COMPANY",
        subtitle: "Experience sustainable agriculture and authentic farm-to-table practices",
        image: "images/hero/farm-6.jpg"
    },
    {
        id: 2,
        title: "ORGANIC HARVEST",
        subtitle: "Discover the finest organic produce grown with care and expertise",
        image: "images/hero/farm-7.jpg"
    },
    {
        id: 3,
        title: "ECO FRIENDLY",
        subtitle: "Leading the way in sustainable and environmentally conscious farming",
        image: "images/hero/farm-9.jpg"
    }
];

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Transition */}
            {slides.map((slide, index) => (
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </motion.div>
            ))}

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 text-center space-y-8 px-4 max-w-5xl mx-auto"
            >
                <motion.h1
                    key={currentSlide} // Force re-render on slide change
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-6xl md:text-8xl font-bold text-white tracking-tight"
                >
                    {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                    key={`subtitle-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-white/90 max-w-2xl mx-auto"
                >
                    {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-8"
                >
                    <Button
                        asChild
                        className="h-14 px-12 text-lg bg-green-400 hover:bg-green-500 text-black rounded-full"
                    >
                        <Link href="/farms">
                            DISCOVER
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 rounded-full bg-white"
                    />
                </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
                {slides.map((_, i) => (
                    <motion.button
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                        className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-yellow-400' : 'bg-white/50'}`}
                        onClick={() => setCurrentSlide(i)}
                    />
                ))}
            </div>
        </section>
    );
} 