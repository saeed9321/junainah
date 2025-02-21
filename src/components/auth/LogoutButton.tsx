'use client';

import { Button } from "@/components/ui/button";

export function LogoutButton() {
    const handleLogout = () => {
        document.cookie = 'authToken=; max-age=0; path=/';
        window.location.href = '/';
    };

    return (
        <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-red-600 hover:text-red-700"
        >
            Log Out
        </Button>
    );
} 