import { FloatingCard } from "@/components/shared/floating-card";
import { GlowButton } from "@/components/shared/glow-button";
import { AlertTriangle, Bot } from "lucide-react";
import Link from "next/link";

export function AIRiskLevel() {
    return (
        <FloatingCard delay={0.3} className="h-full min-h-[160px] border-l-4 border-l-green-500">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    AI Risk Level
                </h3>
                <Bot className="text-primary h-5 w-5" />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 border border-green-500/30 font-bold text-sm">
                        LOW RISK
                    </span>
                    <span className="text-xs text-muted-foreground">Score: 92/100</span>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed">
                    Portfolio is balanced. AI recommends increasing BTC allocation by 2% due to positive FTSO signals.
                </p>

                <Link href="/advisor" className="w-full">
                    <GlowButton variant="outline" className="w-full text-xs py-2 h-8">
                        Open AI Advisor
                    </GlowButton>
                </Link>
            </div>
        </FloatingCard>
    );
}
