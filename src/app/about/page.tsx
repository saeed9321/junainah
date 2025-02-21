'use client';
import { motion } from 'framer-motion';
import { StoryCard } from '@/components/about/StoryCard';
import { TeamMember } from '@/components/about/TeamMember';
import Image from 'next/image';
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <PageLayout headerVariant="default">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[60vh] flex items-end pb-20"
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-black/80" />
                </div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10 container mx-auto px-4"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-white max-w-2xl">
                        Cultivating Connections Between Land and People
                    </h1>
                </motion.div>
            </motion.section>

            <div className="container mx-auto px-4 py-20">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-light text-center mb-16 text-gray-600"
                >
                    Our Journey Through the Seasons
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className="grid md:grid-cols-3 gap-12"
                >
                    <StoryCard
                        year="2010"
                        title="Roots in the Valley"
                        image="/images/farms/farm-1.jpg"
                        content="Founded with just 5 acres of family land"
                    />
                    <StoryCard
                        year="2015"
                        title="First Harvest"
                        image="/images/farms/farm-2.jpg"
                        content="Achieved organic certification"
                    />
                    <StoryCard
                        year="2023"
                        title="Community Growth"
                        image="/images/farms/farm-3.jpg"
                        content="Expanded to 500+ acres with local partners"
                    />
                </motion.div>
            </div>

            <section className="bg-emerald-50 py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Card>
                        <CardContent className="p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-serif text-gray-800">
                                        Earth First Philosophy
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We believe in farming that nourishes both people and planet...
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="relative h-96 rounded-2xl overflow-hidden"
                                >
                                    <Image
                                        src="/about-philosophy.jpg"
                                        alt="Farm philosophy"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl text-center mb-16 font-light"
                >
                    The Hands That Nurture
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    className="grid md:grid-cols-4 gap-8"
                >
                    <TeamMember
                        name="Maria Sanchez"
                        role="Lead Agriculturist"
                        image="/images/hero/farm-4.jpg"
                    />
                    <TeamMember
                        name="James Wilson"
                        role="Sustainability Expert"
                        image="/images/hero/farm-5.jpg"
                    />
                    <TeamMember
                        name="Maria Sanchez"
                        role="Lead Agriculturist"
                        image="/images/hero/farm-8.jpg"
                    />
                    <TeamMember
                        name="James Wilson"
                        role="Sustainability Expert"
                        image="/images/hero/farm-9.jpg"
                    />
                </motion.div>
            </section>
        </PageLayout>
    );
} 