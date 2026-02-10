"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { GlowButton } from "@/components/shared/glow-button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Wallet, Shield, Key, Zap, LogOut } from "lucide-react";
import { useState } from "react";

export function SettingsPanel() {
    const [gaslessEnabled, setGaslessEnabled] = useState(true);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FloatingCard className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <Wallet className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Connected Wallet</h3>
                            <p className="text-sm text-muted-foreground">Manage your connection</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted/50 border border-border flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-mono text-sm">0x71C...9A23</span>
                            </div>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                Connected
                            </span>
                        </div>
                        <GlowButton variant="outline" className="w-full" icon={<LogOut className="w-4 h-4" />}>
                            Disconnect Wallet
                        </GlowButton>
                    </div>
                </FloatingCard>

                <FloatingCard delay={0.1} className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Smart Account</h3>
                            <p className="text-sm text-muted-foreground">Account Abstraction settings</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Gasless Execution</Label>
                                <p className="text-sm text-muted-foreground">
                                    Pay gas fees using treasury tokens
                                </p>
                            </div>
                            <Switch
                                checked={gaslessEnabled}
                                onCheckedChange={setGaslessEnabled}
                            />
                        </div>

                        <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                            <div className="flex items-center gap-2 mb-2 text-secondary">
                                <Zap className="w-4 h-4" />
                                <span className="text-sm font-bold">Paymaster Active</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Your transactions are being sponsored by the Flare Treasury Paymaster.
                            </p>
                        </div>
                    </div>
                </FloatingCard>
            </div>

            <FloatingCard delay={0.2} className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                        <Key className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Session Keys</h3>
                        <p className="text-sm text-muted-foreground">Manage automated permissions</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-card border border-border">
                            <div className="text-sm font-medium mb-1">AI Advisor Agent</div>
                            <div className="text-xs text-muted-foreground mb-3">
                                Permitted: Swap, Rebalance
                            </div>
                            <div className="text-xs text-green-500 flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                Active (Expires in 24h)
                            </div>
                        </div>

                        <div className="p-4 rounded-lg bg-card border border-border">
                            <div className="text-sm font-medium mb-1">Auto-Compounder</div>
                            <div className="text-xs text-muted-foreground mb-3">
                                Permitted: Claim, Stake
                            </div>
                            <div className="text-xs text-green-500 flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                Active (Expires in 7d)
                            </div>
                        </div>

                        <div className="p-4 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary cursor-pointer transition-colors">
                            + Add New Session Key
                        </div>
                    </div>
                </div>
            </FloatingCard>
        </div>
    );
}
