'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function TeamSection({ members }: {
    members: Array<{
        name: string;
        role: string;
        bio: string;
        image: string;
    }>;
}) {
    return (
        <section className="py-20 px-4 bg-emerald-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-64 bg-emerald-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold">{member.name}</h3>
                                <p className="text-emerald-600 mt-2">{member.role}</p>
                                <p className="text-gray-600 mt-4">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 