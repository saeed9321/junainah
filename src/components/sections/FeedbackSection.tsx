'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

export function FeedbackSection() {
    return (
        <section className="py-32 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold mb-6">What Our Visitors Say</h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {testimonial.comment}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Travel Blogger",
        image: "/testimonials/1.jpg",
        comment: "An unforgettable experience! The farm tour was both educational and relaxing. Can't wait to come back next season!"
    },
    {
        name: "John Doe",
        role: "Travel Blogger",
        image: "/testimonials/2.jpg",
        comment: "An unforgettable experience! The farm tour was both educational and relaxing. Can't wait to come back next season!"
    },

    {
        name: "John Doe",
        role: "Travel Blogger",
        image: "/testimonials/2.jpg",
        comment: "An unforgettable experience! The farm tour was both educational and relaxing. Can't wait to come back next season!"
    },

    // ... other testimonials
]; 