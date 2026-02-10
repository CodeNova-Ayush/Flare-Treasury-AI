import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";

interface PriceTickerProps {
    symbol: string;
    price: number;
    change24h: number;
    className?: string;
}

export function PriceTicker({ symbol, price, change24h, className }: PriceTickerProps) {
    const isPositive = change24h >= 0;

    return (
        <div className={cn("flex items-center gap-3 px-4 py-2 rounded-full glass-panel", className)}>
            <span className="font-bold text-primary">{symbol}</span>
            <span className="font-mono text-foreground">${price.toLocaleString()}</span>
            <span
                className={cn(
                    "flex items-center text-xs font-medium",
                    isPositive ? "text-accent" : "text-destructive"
                )}
            >
                {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                {Math.abs(change24h)}%
            </span>
        </div>
    );
}
