import Link from "next/link";
import { buttonVariants } from "./button";
import { type VariantProps } from "class-variance-authority";

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function ButtonLink({ href, children, variant, size, className, onClick }: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className={buttonVariants({ variant, size, className })}
            onClick={onClick}
        >
            {children}
        </Link>
    );
} 