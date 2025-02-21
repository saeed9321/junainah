'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-600 p-2"
                aria-label="Toggle menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
                    <nav className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/farms"
                            className="text-gray-700 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Farms
                        </Link>
                        <Link
                            href="/booking"
                            className="text-gray-700 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Tour Booking
                        </Link>
                        <Link
                            href="/store"
                            className="text-gray-700 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Store
                        </Link>
                        <div className="pt-4 border-t border-gray-200">
                            <Link
                                href="/login"
                                className="block w-full text-center text-gray-700 hover:text-green-600 mb-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Register
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
} 