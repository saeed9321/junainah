"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

export function InfiniteMovingCards({
    children,
    className,
}: {
    children: ReactNode[];
    className?: string;
}) {
    const [start, setStart] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStart(prev => (prev + 1) % children.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [children.length]);

    return (
        <div className={cn("flex overflow-hidden", className)}>
            <div
                className="flex gap-4 transition-transform duration-1000"
                style={{ transform: `translateX(-${start * 100}%)` }}
            >
                {children}
            </div>
        </div>
    );
} 