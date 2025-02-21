'use client';

import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({
    children,
    headerVariant = 'default',
    footerClassName = "",
    contentClassName = "",

}: {
    children: React.ReactNode;
    headerVariant?: 'default' | 'light';
    footerClassName?: string;
    contentClassName?: string;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header headerVariant={headerVariant} />
            <main className={`flex-1 ${contentClassName}`}>{children}</main>
            <Footer className={footerClassName} />
        </div>
    );
} 