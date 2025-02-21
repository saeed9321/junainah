'use client';

import { useState } from 'react';
import { HamburgerIcon } from '../ui/HamburgerIcon';
import { navigationLinks, authLinks } from '@/constants/navigation';
import { ButtonLink } from "@/components/ui/ButtonLink";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-600 p-2"
                aria-label="Toggle menu"
            >
                <HamburgerIcon isOpen={isOpen} />
            </button>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
                    <nav className="flex flex-col space-y-4">
                        {navigationLinks.map((link) => (
                            <ButtonLink
                                key={link.href}
                                href={link.href}
                                onClick={handleClose}
                            >
                                {link.label}
                            </ButtonLink>
                        ))}

                        <div className="pt-4 border-t border-gray-200">
                            {authLinks.map((link) => (
                                <ButtonLink
                                    key={link.href}
                                    href={link.href}
                                    variant={link.variant === 'primary' ? 'default' : 'link'}
                                    onClick={handleClose}
                                >
                                    {link.label}
                                </ButtonLink>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
} 