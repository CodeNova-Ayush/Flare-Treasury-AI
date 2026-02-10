"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { GlowButton } from "@/components/shared/glow-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ShieldCheck, CheckCircle, XCircle, Loader2, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function VerificationForm() {
    const [txHash, setTxHash] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<null | {
        valid: boolean;
        confirmations: number;
        timestamp: string;
        amount: string;
    }>(null);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!txHash) return;

        setIsLoading(true);
        setResult(null);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setResult({
                valid: true,
                confirmations: 12,
                timestamp: new Date().toISOString(),
                amount: "2.5 BTC",
            });
        }, 2000);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <FloatingCard className="p-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold font-display tracking-tight">FDC Transaction Verification</h2>
                    <p className="text-muted-foreground mt-2">
                        Verify Bitcoin transactions securely using the Flare Data Connector.
                    </p>
                </div>

                <form onSubmit={handleVerify} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="txHash">Transaction Hash</Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="txHash"
                                placeholder="Enter BTC Transaction Hash..."
                                className="pl-10 h-12 font-mono text-sm"
                                value={txHash}
                                onChange={(e) => setTxHash(e.target.value)}
                            />
                        </div>
                    </div>

                    <GlowButton
                        type="submit"
                        className="w-full h-12 text-lg"
                        isLoading={isLoading}
                        disabled={!txHash}
                    >
                        Verify using FDC
                    </GlowButton>
                </form>

                <AnimatePresence>
                    {result && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-8 overflow-hidden"
                        >
                            <div className="rounded-xl border border-border bg-card/50 p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    {result.valid ? (
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                                            <XCircle className="w-6 h-6" />
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="text-lg font-bold">
                                            {result.valid ? "Transaction Verified" : "Verification Failed"}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {result.valid ? "Confirmed by FDC Consensus" : "Could not verify transaction"}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <div className="text-muted-foreground mb-1">Status</div>
                                        <div className="font-medium text-green-500">Valid</div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <div className="text-muted-foreground mb-1">Confirmations</div>
                                        <div className="font-medium font-mono">{result.confirmations}</div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <div className="text-muted-foreground mb-1">Amount</div>
                                        <div className="font-medium font-mono">{result.amount}</div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-muted/50">
                                        <div className="text-muted-foreground mb-1">Timestamp</div>
                                        <div className="font-medium font-mono text-xs truncate">
                                            {result.timestamp}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </FloatingCard>
        </div>
    );
}
