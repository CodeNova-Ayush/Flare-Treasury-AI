"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { StatWidget } from "@/components/shared/stat-widget";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "BTC", value: 65, color: "oklch(0.7 0.2 190)" }, // Cyan
    { name: "Stable", value: 35, color: "oklch(0.6 0.2 300)" }, // Purple
];

export function TreasuryStatusCard() {
    return (
        <FloatingCard className="col-span-1 md:col-span-2 lg:col-span-1 h-full min-h-[200px]">
            <div className="flex flex-col h-full justify-between">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                        Total Treasury Value
                    </h3>
                    <div className="text-4xl font-bold glow-text mb-2">$14,205,890.00</div>
                    <div className="flex items-center gap-2 text-sm text-accent">
                        <span>+12.5%</span>
                        <span className="text-muted-foreground">vs last month</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="h-[80px] w-[80px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={25}
                                    outerRadius={35}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">BTC: 65%</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            <span className="text-muted-foreground">Stable: 35%</span>
                        </div>
                    </div>
                </div>
            </div>
        </FloatingCard>
    );
}
