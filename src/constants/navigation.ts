import { NavigationLink } from "@/types";

export const navigationLinks: NavigationLink[] = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Us" },
	{ href: "/contact", label: "Contact Us" },
	{ href: "/farms", label: "Farms" },
	{ href: "/booking", label: "Tour Booking" },
	{ href: "/store", label: "Store" },
	{ href: "/dashboard", label: "Dashboard" },
];

export const authLinks: NavigationLink[] = [
	{ href: "/login", label: "Login", variant: "ghost" },
	{ href: "/register", label: "Register", variant: "default" },
];

export const footerLinks = [
	{ title: "Company", links: ["About Us", "Careers", "Contact Us"] },
	{ title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
	{ title: "Resources", links: ["Blog", "Help Center", "FAQs"] },
];
