'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NewsSection() {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold mb-6">Latest Updates</h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white hover:cursor-pointer border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-yellow-500 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3">{item.excerpt}</p>
                                <Button
                                    variant="link"
                                    className="text-yellow-500 hover:text-yellow-600 p-0 h-auto font-medium"
                                >
                                    Read More →
                                </Button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

const news = [
    {
        image: "/images/hero/farm-1.jpg",
        date: "March 15, 2024",
        title: "New Organic Certification Achievement",
        excerpt: "We're proud to announce our renewed organic certification..."
    },
    {
        image: "/images/hero/farm-2.jpg",
        date: "March 15, 2024",
        title: "New Organic Certification Achievement",
        excerpt: "We're proud to announce our renewed organic certification..."
    },
    {
        image: "/images/hero/farm-3.jpg",
        date: "March 15, 2024",
        title: "New Organic Certification Achievement",
        excerpt: "We're proud to announce our renewed organic certification..."
    },
    {
        image: "/images/hero/farm-4.jpg",
        date: "March 15, 2024",
        title: "New Organic Certification Achievement",
        excerpt: "We're proud to announce our renewed organic certification..."
    },
    {
        image: "/images/hero/farm-5.jpg",
        date: "March 15, 2024",
        title: "New Organic Certification Achievement",
        excerpt: "We're proud to announce our renewed organic certification..."
    },
    {
        image: "/images/hero/farm-6.jpg",
        date: "March 15, 2024",
        title: "New Organic Certification Achievement",
        excerpt: "We're proud to announce our renewed organic certification..."
    },





]; 