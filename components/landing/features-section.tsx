"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { ShieldCheck, Activity, Bot, Zap, Database, Globe, Cpu, Key } from "lucide-react";

const features = [
    {
        title: "FDC Payment Verification",
        description: "Trustless cross-chain verification for BTC & XRP using the Flare Data Connector consensus protocol.",
        icon: ShieldCheck,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
    },
    {
        title: "Real-Time Oracle Pricing",
        description: "Live BTC/USD pricing from 100+ decentralized providers via Flare Time Series Oracle (FTSO).",
        icon: Activity,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        title: "AI Treasury Engine",
        description: "Predictive risk scoring, automated allocations, and financial intelligence powered by ML models.",
        icon: Bot,
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
    {
        title: "Gasless Smart Execution",
        description: "Execute treasury actions with zero UX friction using Flare Smart Accounts and Paymasters.",
        icon: Zap,
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-32 relative bg-black">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Capabilities</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Built on the Flare Network for unrivaled data interoperability and security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FloatingCard
                            key={index}
                            delay={index * 0.1}
                            className={`h-full p-8 border hover:bg-white/5 transition-all duration-500 group ${feature.border}`}
                        >
                            <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
                                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <feature.icon className={`w-8 h-8 ${feature.color} relative z-10`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                                {feature.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <span className={feature.color}>EXPLORE</span>
                                <div className={`h-px flex-1 ${feature.bg.replace('/10', '/50')}`} />
                            </div>
                        </FloatingCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
