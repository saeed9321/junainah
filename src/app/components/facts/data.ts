import { Users, TreePine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Fact {
	icon: LucideIcon;
	title: string;
	value: string;
	description: string;
}

export const facts: Fact[] = [
	{
		icon: Users,
		title: "Annual Visitors",
		value: "50,000+",
		description: "Tourists exploring Omani farms annually",
	},
	{
		icon: Users,
		title: "Partner Farms",
		value: "100+",
		description: "Traditional and modern farms across Oman",
	},
	{
		icon: TreePine,
		title: "Date Palm Trees",
		value: "1M+",
		description: "Contributing to Oman's agricultural heritage",
	},
];
