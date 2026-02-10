import { FloatingCard } from "@/components/shared/floating-card";
import { ShieldCheck, CheckCircle } from "lucide-react";

export function VerifiedPayments() {
    return (
        <FloatingCard delay={0.2} className="h-full min-h-[160px]">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Verified Payments
                </h3>
                <ShieldCheck className="text-accent h-5 w-5" />
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <div className="text-3xl font-bold glow-text">1,248</div>
                    <div className="text-sm text-muted-foreground mt-1">
                        Total Verified via FDC
                    </div>
                </div>

                <div className="p-3 rounded-lg bg-card/50 border border-border flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <div className="flex-1 overflow-hidden">
                        <div className="text-xs text-muted-foreground">Last Verified TX</div>
                        <div className="text-xs font-mono text-primary truncate">
                            0x7f...3a9b
                        </div>
                    </div>
                </div>
            </div>
        </FloatingCard>
    );
}
