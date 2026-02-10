"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Activity, Zap, BarChart2 } from "lucide-react";

const priceData = [
    { time: "00:00", price: 94200 },
    { time: "04:00", price: 94800 },
    { time: "08:00", price: 93500 },
    { time: "12:00", price: 95500 },
    { time: "16:00", price: 96200 },
    { time: "20:00", price: 95800 },
    { time: "24:00", price: 96543 },
];

const volatilityData = [
    { time: "00:00", vol: 12 },
    { time: "04:00", vol: 18 },
    { time: "08:00", vol: 25 },
    { time: "12:00", vol: 15 },
    { time: "16:00", vol: 10 },
    { time: "20:00", vol: 8 },
    { time: "24:00", vol: 14 },
];

export function MarketCharts() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FloatingCard className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <Activity className="text-primary h-5 w-5" />
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            FTSO Oracle Price
                        </h3>
                    </div>
                    <div className="text-3xl font-bold glow-text">$96,543.21</div>
                    <div className="text-sm text-green-500 mt-1">+2.4% (24h)</div>
                </FloatingCard>

                <FloatingCard delay={0.1} className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <Zap className="text-accent h-5 w-5" />
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Volatility Index
                        </h3>
                    </div>
                    <div className="text-3xl font-bold text-foreground">14.2</div>
                    <div className="text-sm text-muted-foreground mt-1">Low Volatility</div>
                </FloatingCard>

                <FloatingCard delay={0.2} className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <BarChart2 className="text-secondary h-5 w-5" />
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Oracle Confidence
                        </h3>
                    </div>
                    <div className="text-3xl font-bold text-foreground">99.8%</div>
                    <div className="text-sm text-muted-foreground mt-1">High Consensus</div>
                </FloatingCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <FloatingCard delay={0.3} className="col-span-1 lg:col-span-2 min-h-[400px]">
                    <h3 className="text-lg font-medium text-foreground uppercase tracking-wider mb-6">
                        BTC/USD Price Action (24h)
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={priceData}>
                                <defs>
                                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis domain={['auto', 'auto']} stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val.toLocaleString()}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "8px" }}
                                    itemStyle={{ color: "var(--foreground)" }}
                                />
                                <Area type="monotone" dataKey="price" stroke="var(--primary)" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </FloatingCard>

                <FloatingCard delay={0.4} className="col-span-1 min-h-[400px]">
                    <h3 className="text-lg font-medium text-foreground uppercase tracking-wider mb-6">
                        Volatility Trend
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={volatilityData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    cursor={{ fill: 'var(--muted)' }}
                                    contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "8px" }}
                                    itemStyle={{ color: "var(--foreground)" }}
                                />
                                <Bar dataKey="vol" fill="var(--accent)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </FloatingCard>
            </div>
        </div>
    );
}
