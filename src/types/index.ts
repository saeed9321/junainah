export interface NavigationLink {
	href: string;
	label: string;
	variant?: "primary" | "link" | "ghost" | "default";
}

export interface ButtonProps {
	href?: string;
	onClick?: () => void;
	children: React.ReactNode;
	variant?: "primary" | "link";
	className?: string;
}

export interface HamburgerIconProps {
	isOpen: boolean;
}

export interface FarmCardProps {
	imageUrl: string;
	title: string;
	description: string;
	location: string;
}

export interface Farm extends FarmCardProps {
	id: number;
}
