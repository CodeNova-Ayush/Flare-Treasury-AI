"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface FloatingCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
    noFloat?: boolean;
}

export function FloatingCard({
    children,
    className,
    delay = 0,
    noFloat = false,
    ...props
}: FloatingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]",
                !noFloat && "animate-float",
                className
            )}
            style={{ animationDelay: `${delay}s` }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
