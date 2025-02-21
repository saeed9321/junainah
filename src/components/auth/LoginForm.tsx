'use client';

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export function LoginForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        // Simulated authentication
        document.cookie = `authToken=valid; max-age=3600; path=/`;
        window.location.href = '/dashboard';
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        type="email"
                        {...register('email')}
                        placeholder="Email address"
                        className="pl-10 text-lg py-6"
                        required
                    />
                </div>

                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        type="password"
                        {...register('password')}
                        placeholder="Password"
                        className="pl-10 text-lg py-6"
                        required
                    />
                </div>
            </div>

            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-lg h-12 rounded-xl"
            >
                Sign In
            </Button>

            <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                    href="/register"
                    className="font-semibold text-green-600 hover:text-green-700 hover:underline"
                >
                    Create account
                </Link>
            </div>
        </form>
    );
} 