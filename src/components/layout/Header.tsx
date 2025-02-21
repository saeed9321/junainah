'use client';

import Link from "next/link";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { navigationLinks } from "@/constants/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import Image from "next/image";
import { useEffect, useState } from 'react';

export function Header({ headerVariant = 'default' }: { headerVariant?: 'default' | 'light' }) {
    const { totalItems } = useCart();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Show header only at the top of the page
            setIsVisible(window.scrollY < 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`absolute top-0 z-50`}>
            <div className={`fixed left-1/2 -translate-x-1/2 w-[96%] max-w-7xl backdrop-blur-lg shadow-2xl rounded-full px-4 py-3 z-50 border border-white/20 transition-all duration-300 ${isVisible ? 'top-5' : '-top-20'
                } ${headerVariant === 'light' ? 'bg-white/90 backdrop-blur-sm' : ''}`}>
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-green-700">
                        <Image src="/logo.png" alt="Logo" height={50} width={50} style={{ scale: 3 }} className="ml-10" />
                    </Link>

                    <nav className="hidden md:flex space-x-6">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={` hover:text-green-600 transition-colors ${headerVariant === 'light' ? 'text-gray-800' : 'text-gray-200'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <SearchButton headerVariant={headerVariant} />
                        <Link href="/cart" className="relative">
                            <ShoppingCart className={`h-5 w-5 ${headerVariant === 'light' ? 'text-gray-800' : 'text-gray-200'}`} />
                            {totalItems > 0 && (
                                <span className={`absolute -top-2 -right-2 bg-green-600 rounded-full h-5 w-5 flex items-center justify-center text-xs ${headerVariant === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <div className="hidden md:flex space-x-2">
                            <ButtonLink href="/login" variant="ghost">
                                Login
                            </ButtonLink>
                            <ButtonLink href="/register" variant="default">
                                Register
                            </ButtonLink>
                        </div>
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}

function SearchButton({ headerVariant = 'default' }: { headerVariant?: 'default' | 'light' }) {
    return (
        <button className={` hover:text-green-600 transition-colors ${headerVariant === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </button>
    );
} 