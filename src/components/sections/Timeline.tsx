'use client';
import { motion } from 'framer-motion';

export function Timeline({ milestones }: {
    milestones: Array<{
        year: string;
        title: string;
        description: string;
    }>;
}) {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
                <div className="relative pl-8 border-l-2 border-emerald-100">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative mb-12 pl-8"
                        >
                            <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[25px] top-4 border-4 border-white" />
                            <span className="text-emerald-600 font-bold">{milestone.year}</span>
                            <h3 className="text-2xl font-bold mt-2">{milestone.title}</h3>
                            <p className="text-gray-600 mt-2">{milestone.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 