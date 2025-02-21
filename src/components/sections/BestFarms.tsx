'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export function BestFarms() {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold mb-6">Featured Farms</h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {farms.map((farm, index) => (
                        <motion.div
                            key={farm.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-[400px] rounded-lg overflow-hidden"
                        >
                            <Image
                                src={farm.imageUrl}
                                alt={farm.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-3">{farm.title}</h3>
                                <p className="text-white/80 mb-6 line-clamp-2">{farm.description}</p>
                                <div className="flex items-center gap-2 text-yellow-400 mb-4">
                                    <MapPin className="w-5 h-5" />
                                    <span>{farm.location}</span>
                                </div>
                                <Button
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                                >
                                    View Details
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const farms = [
    {
        id: 1,
        imageUrl: "/images/farms/farm-1.jpg",
        title: "Green Valley Farm",
        description: "Experience organic farming at its finest with our guided tours and hands-on activities.",
        location: "Muscat, Oman"
    },
    {
        id: 2,
        imageUrl: "/images/farms/farm-2.jpg",
        title: "Desert Oasis Farm",
        description: "Discover innovative desert farming techniques and sustainable agriculture in arid conditions.",
        location: "Nizwa, Oman"
    },
    {
        id: 3,
        imageUrl: "/images/farms/farm-3.jpg",
        title: "Mountain View Farm",
        description: "Traditional farming meets modern practices in our beautiful mountain-side agricultural haven.",
        location: "Jabal Akhdar, Oman"
    }
]; 