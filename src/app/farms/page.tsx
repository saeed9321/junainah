'use client';
import { motion } from 'framer-motion';
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';
import Image from 'next/image';


interface Farm {
    name: string;
    category: string;
    image: string;
    stats?: string;
}

const farms: Farm[] = [
    {
        name: "Green Valley Dairy",
        category: "Dairy Farm",
        image: "/images/hero/farm-1.jpg",
    },
    {
        name: "Sunrise Orchards",
        category: "Fruit Farm",
        image: "/images/hero/farm-2.jpg",
    },
    // Add more farms as needed
];

const categories = ["All", "Dairy Farm", "Fruit Farm", "Vegetable Farm", "Livestock"];

export default function FarmsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredFarms = farms.filter(farm => {
        const matchesSearch = farm.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || farm.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <PageLayout headerVariant="default">
            <div className="min-h-screen px-4 pt-36 bg-gradient-to-b from-black/90 to-green-100">
                {/* Search and Filter Section */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="space-y-8 mb-8"
                >
                    <Input
                        type="search"
                        placeholder="Search farms..."
                        className="mx-auto bg-white border border-green-900 rounded-2xl md:max-w-4xl h-12 shadow-lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant={selectedCategory === category ? "default" : "secondary"}
                                className="cursor-pointer text-md py-2 px-4 rounded-2xl shadow-md border border-green-700"
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>
                </motion.div>


                {/* Farms Grid */}
                <motion.div
                    className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {filteredFarms.map((farm, index) => (
                        <motion.div
                            key={farm.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border border-green-700 shadow-lg">
                                <CardContent className="p-0">
                                    <div className="aspect-square relative">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={farm.image}
                                            alt={farm.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">{farm.name}</h3>
                                        <Badge variant="secondary" className="mt-2">
                                            {farm.category}
                                        </Badge>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </PageLayout>
    );
} 