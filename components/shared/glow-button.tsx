"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "danger" | "outline";
    isLoading?: boolean;
    icon?: React.ReactNode;
}

export function GlowButton({
    children,
    className,
    variant = "primary",
    isLoading,
    icon,
    ...props
}: GlowButtonProps) {
    const variants = {
        primary: "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] border-transparent",
        secondary: "bg-secondary text-secondary-foreground shadow-[0_0_15px_rgba(180,0,255,0.3)] hover:shadow-[0_0_25px_rgba(180,0,255,0.5)] border-transparent",
        danger: "bg-destructive text-destructive-foreground shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] border-transparent",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary/10 shadow-[0_0_10px_rgba(0,255,255,0.1)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
                variants[variant],
                className
            )}
            disabled={isLoading || (props.disabled as boolean)}
            {...props}
        >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {!isLoading && icon && <span className="mr-1">{icon}</span>}
            {children}
        </motion.button>
    );
}
