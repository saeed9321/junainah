import Link from "next/link";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer({ className = "" }: { className?: string }) {
    return (
        <footer className={`${className} bg-emerald-800 text-white py-12`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Junainah</h3>
                        <p className="text-gray-400">
                            Experience nature&apos;s finest with our curated farm stays and tours.
                        </p>
                    </div>
                    <FooterLinks />
                    <LegalLinks />
                    <div>
                        <h4 className="font-bold mb-4">Follow Us</h4>
                        <SocialLinks />
                    </div>
                </div>
                <div className=" mt-2 pt-2 text-center text-gray-400">
                    <p>© 2025 Junainah. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function FooterLinks() {
    const links = [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/farms", label: "Farms" },
        { href: "/booking", label: "Book a Tour" },
    ];

    return (
        <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-gray-400 hover:text-white">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function LegalLinks() {
    return (
        <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
                <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white">
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white">
                        Terms of Service
                    </Link>
                </li>
            </ul>
        </div>
    );
} 