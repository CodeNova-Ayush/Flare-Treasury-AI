"use client";

import { cn } from "@/lib/utils";

export function NeonDivider({ className }: { className?: string }) {
    return (
        <div className={cn("relative h-px w-full my-8", className)}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm opacity-50" />
        </div>
    );
}
