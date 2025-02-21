'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CtaSection({
    title,
    text,
    cta
}: {
    title: string;
    text: string;
    cta: { label: string; href: string };
}) {
    return (
        <section className="py-20 px-4 bg-emerald-600">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-bold text-white">{title}</h2>
                    <p className="text-xl text-emerald-50">{text}</p>
                    <Button
                        asChild
                        className="mx-auto text-lg px-8 py-6 rounded-full bg-white text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                        <a href={cta.href}>{cta.label}</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
} 