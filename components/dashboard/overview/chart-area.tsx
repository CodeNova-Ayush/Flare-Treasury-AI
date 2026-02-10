"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { cn } from "@/lib/utils";

const data = [
    { name: "00:00", btc: 94000, treasury: 14000000 },
    { name: "04:00", btc: 94500, treasury: 14100000 },
    { name: "08:00", btc: 93800, treasury: 13950000 },
    { name: "12:00", btc: 95200, treasury: 14250000 },
    { name: "16:00", btc: 96100, treasury: 14400000 },
    { name: "20:00", btc: 95800, treasury: 14350000 },
    { name: "24:00", btc: 96500, treasury: 14500000 },
];

export function ChartArea() {
    const [activeTab, setActiveTab] = useState<"price" | "allocation">("price");

    return (
        <FloatingCard delay={0.4} className="col-span-1 lg:col-span-3 min-h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-foreground uppercase tracking-wider">
                    Market Overview
                </h3>
                <div className="flex p-1 bg-muted/50 rounded-lg">
                    <button
                        onClick={() => setActiveTab("price")}
                        className={cn(
                            "px-4 py-1.5 text-sm font-medium rounded-md transition-all",
                            activeTab === "price"
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        BTC Price (FTSO)
                    </button>
                    <button
                        onClick={() => setActiveTab("allocation")}
                        className={cn(
                            "px-4 py-1.5 text-sm font-medium rounded-md transition-all",
                            activeTab === "allocation"
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Treasury Allocation
                    </button>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorTreasury" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--secondary)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="var(--secondary)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis
                            dataKey="name"
                            stroke="var(--muted-foreground)"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="var(--muted-foreground)"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value.toLocaleString()}`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "var(--card)",
                                borderColor: "var(--border)",
                                borderRadius: "8px",
                                color: "var(--foreground)",
                            }}
                            itemStyle={{ color: "var(--foreground)" }}
                        />
                        <Area
                            type="monotone"
                            dataKey={activeTab === "price" ? "btc" : "treasury"}
                            stroke={activeTab === "price" ? "var(--primary)" : "var(--secondary)"}
                            fillOpacity={1}
                            fill={`url(#${activeTab === "price" ? "colorBtc" : "colorTreasury"})`}
                            strokeWidth={3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </FloatingCard>
    );
}
