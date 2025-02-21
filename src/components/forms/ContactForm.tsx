'use client';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactForm() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-3xl mx-auto p-8 border shadow-lg bg-muted text-green-800 rounded-xl"
        >
            <div className="grid md:grid-cols-1 gap-12">
                {/* Left side - Header content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h2 className="text-5xl font-bold">
                            Get in touch with an expert.
                        </h2>

                    </motion.div>
                </div>

                {/* Right side - Form */}
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <Input
                        type="text"
                        placeholder="Name"
                        className="bg-white text-black"
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        className="bg-white text-black"
                        required
                    />

                    <Input
                        type="tel"
                        placeholder="Phone number"
                        className="bg-white text-black"
                        required
                    />


                    <Button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full"
                    >
                        Submit form
                    </Button>

                    <p className="text-sm text-gray-700">
                        By submitting this form, you agree to receive promotional messages from us about our
                        products and services. You can unsubscribe at any time by clicking on the link at the
                        bottom of our emails.
                    </p>
                </motion.form>
            </div>

            {/* Move close button to top-right of container */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-8 right-8 text-gray-400 hover:text-white"
            >
                <X className="w-6 h-6" />
            </motion.button>
        </motion.div>
    );
} 