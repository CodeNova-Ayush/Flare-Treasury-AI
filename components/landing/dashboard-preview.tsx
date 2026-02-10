"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { GlowButton } from "@/components/shared/glow-button";
import { ArrowRight, Activity, ShieldCheck, Bot, TrendingUp } from "lucide-react";
import Link from "next/link";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    { value: 40000 }, { value: 35000 }, { value: 55000 }, { value: 45000 },
    { value: 60000 }, { value: 50000 }, { value: 75000 }, { value: 65000 },
    { value: 85000 }, { value: 80000 }, { value: 95000 }, { value: 96543 },
];

export function DashboardPreview() {
    return (
        <section id="preview" className="py-24 relative bg-black">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <FloatingCard className="p-6 border-primary/20 bg-[#0A0A0A] backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">flare-treasury-ai.exe</div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-2 mb-2 text-primary">
                                    <Activity className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase">BTC Price (FTSO)</span>
                                </div>
                                <div className="text-2xl font-bold glow-text font-mono">$96,543.21</div>
                                <div className="text-xs text-green-500 flex items-center gap-1 mt-1">
                                    <TrendingUp className="w-3 h-3" /> +2.4%
                                </div>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-2 mb-2 text-green-500">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase">Verified TXs</span>
                                </div>
                                <div className="text-2xl font-bold font-mono">1,248</div>
                                <div className="text-xs text-muted-foreground mt-1">Last: 2m ago</div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="h-[250px] w-full mb-6 rounded-lg overflow-hidden bg-white/5 border border-white/10 relative">
                            <div className="absolute top-4 left-4 z-10">
                                <div className="text-xs font-bold text-muted-foreground">BTC/USD Price Action</div>
                            </div>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorPreview" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis hide />
                                    <YAxis hide domain={['dataMin', 'dataMax']} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
                                        itemStyle={{ color: '#00F0FF' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#00F0FF"
                                        fill="url(#colorPreview)"
                                        strokeWidth={2}
                                        animationDuration={2000}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* AI Insight */}
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/10 border border-secondary/20 relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary animate-pulse" />
                            <Bot className="w-8 h-8 text-secondary" />
                            <div>
                                <div className="text-sm font-bold text-secondary mb-1">AI Risk Assessment</div>
                                <div className="text-xs text-muted-foreground">Portfolio balanced. Recommended action: <span className="text-white">Rebalance +5% BTC</span> to maintain target allocation.</div>
                            </div>
                        </div>
                    </FloatingCard>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Real-Time <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                            Market Intelligence
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Experience the power of the Flare Time Series Oracle (FTSO) directly in your dashboard. Get sub-second price updates and decentralized data validation without trusting a centralized exchange.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {["Decentralized Oracle Feeds", "AI-Driven Risk Scoring", "Gasless Smart Account Actions"].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                                <span className="text-foreground/90">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Link href="/dashboard">
                        <GlowButton variant="secondary" className="h-12 px-8" icon={<ArrowRight className="w-4 h-4" />}>
                            Explore Dashboard
                        </GlowButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}
