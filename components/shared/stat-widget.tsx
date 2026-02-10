import { FloatingCard } from "./floating-card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatWidgetProps {
    label: string;
    value: string;
    trend?: number;
    trendLabel?: string;
    icon?: React.ReactNode;
    delay?: number;
}

export function StatWidget({
    label,
    value,
    trend,
    trendLabel,
    icon,
    delay = 0,
}: StatWidgetProps) {
    const isPositive = trend && trend >= 0;

    return (
        <FloatingCard delay={delay} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-sm font-medium uppercase tracking-wider">{label}</span>
                {icon && <div className="text-primary">{icon}</div>}
            </div>
            <div className="text-3xl font-bold tracking-tight text-foreground glow-text">
                {value}
            </div>
            {trend !== undefined && (
                <div className="flex items-center gap-2 text-xs">
                    <span
                        className={cn(
                            "flex items-center font-medium",
                            isPositive ? "text-accent" : "text-destructive"
                        )}
                    >
                        {isPositive ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                        {Math.abs(trend)}%
                    </span>
                    <span className="text-muted-foreground">{trendLabel || "vs last 24h"}</span>
                </div>
            )}
        </FloatingCard>
    );
}
