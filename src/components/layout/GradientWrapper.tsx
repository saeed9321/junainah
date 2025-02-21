import '@/styles/gradients.css';

export function GradientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/80 to-green-100/90 gradient-mesh" />

            {/* Enhanced Gradient Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(34,197,94,0.15),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_-20%_50%,rgba(16,185,129,0.15),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_120%_50%,rgba(52,211,153,0.15),transparent)]" />

            {/* Animated Gradient Orbs */}
            <div className="absolute -top-24 left-0 w-[500px] h-[500px] bg-gradient-to-br from-green-300/30 to-emerald-300/30 rounded-full blur-3xl gradient-orb gradient-orb-float" />
            <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-gradient-to-bl from-green-200/30 to-emerald-200/30 rounded-full blur-3xl gradient-orb gradient-orb-rotate" />
            <div className="absolute top-2/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-300/30 to-green-200/30 rounded-full blur-3xl gradient-orb" />

            {/* Shimmer Layer */}
            <div className="absolute inset-0 gradient-shine" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
} 