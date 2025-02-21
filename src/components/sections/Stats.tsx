'use client';
import { motion } from 'framer-motion';

export function StatsSection({ stats }: {
    stats: Array<{
        number: string;
        label: string;
    }>;
}) {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-center p-6"
                        >
                            <div className="text-4xl font-bold text-emerald-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 text-lg">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 