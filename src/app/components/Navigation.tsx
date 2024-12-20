"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/farms", label: "Farms" },
    { href: "/contact", label: "Contact" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                <span className="font-bold text-xl">OmanFarms</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname === link.href
                                ? "text-primary"
                                : "text-muted-foreground"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}