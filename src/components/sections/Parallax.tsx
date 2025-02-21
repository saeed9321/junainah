'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ParallaxSection({
    bgImage,
    overlay,
    content
}: {
    bgImage: string;
    overlay: string;
    content: {
        title: string;
        description: string;
        cta: { label: string; onClick: () => void };
    };
}) {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-l ${overlay}`} />

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative z-10 max-w-2xl ml-auto pr-4 md:pr-16"
            >
                <h2 className="text-5xl font-bold text-gray-200 mb-6">
                    {content.title}
                </h2>
                <p className="text-xl text-gray-100 mb-8">
                    {content.description}
                </p>
                <Button
                    variant="outline"
                    className="text-lg px-8 py-6 rounded-full border-2 border-emerald-100 bg-white/90 backdrop-blur-sm hover:bg-white/80"
                    onClick={content.cta.onClick}
                >
                    {content.cta.label}
                </Button>
            </motion.div>
        </section>
    );
} 