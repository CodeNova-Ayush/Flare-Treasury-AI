"use client";

import { NeonDivider } from "@/components/shared/neon-divider";
import { Check } from "lucide-react";

const benefits = [
    "Automated Portfolio Rebalancing",
    "Zero-Trust Verification",
    "Gasless Transaction Execution",
    "Real-Time Market Intelligence",
    "Institutional-Grade Security",
    "Cross-Chain Interoperability",
];

export function ProductOverview() {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                        Why <span className="text-primary">Decentralized</span> Treasury?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Traditional treasury management is slow, opaque, and reliant on centralized intermediaries. Flare Treasury AI replaces trust with cryptographic truth.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-primary" />
                                </div>
                                <span className="font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full" />
                    <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">System Metrics</h3>
                        <NeonDivider />
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Uptime</span>
                                <span className="font-mono text-green-500">99.99%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Assets Secured</span>
                                <span className="font-mono text-primary">$4.2B+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Active Smart Accounts</span>
                                <span className="font-mono text-secondary">12,405</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">FTSO Feeds</span>
                                <span className="font-mono text-accent">100+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
