import { PageLayout } from "@/components/layout/PageLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <PageLayout
        >
            {/* <div className="mt-32 min-h-[calc(100vh-14rem)] flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100"> */}
            <div className="min-h-screen px-4 pt-24 bg-gradient-to-b flex items-center justify-center from-black/90 to-green-100 mx-auto">
                <div className="w-full max-w-md p-8 space-y-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-green-50">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                            Create Account
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Start your agricultural journey with us
                        </p>
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </PageLayout>
    );
} 