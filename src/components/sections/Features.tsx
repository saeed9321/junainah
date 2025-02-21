'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function FeaturesGrid({ features }: {
    features: {
        title: string;
        description: string;
        icon: string;
        gradient: string;
    }[];
}) {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className="h-full border-0 bg-gradient-to-br shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="p-8">
                                <div className={`w-20 h-20 rounded-2xl mb-2 text-3xl flex items-center justify-center ${feature.gradient}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
} 