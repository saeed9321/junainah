'use client';

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { User, Mail, Lock } from "lucide-react";

export function RegisterForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        // Simulated registration
        document.cookie = `authToken=valid; max-age=3600; path=/`;
        window.location.href = '/dashboard';
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        {...register('firstName')}
                        placeholder="First name"
                        className="pl-10 text-lg py-6"
                        required
                    />
                </div>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        {...register('lastName')}
                        placeholder="Last name"
                        className="pl-10 text-lg py-6"
                        required
                    />
                </div>
            </div>

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

            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-lg h-12 rounded-xl"
            >
                Create Account
            </Button>

            <div className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                    href="/login"
                    className="font-semibold text-green-600 hover:text-green-700 hover:underline"
                >
                    Sign in here
                </Link>
            </div>
        </form>
    );
} 