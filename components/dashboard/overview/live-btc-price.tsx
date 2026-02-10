"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { ArrowUpRight, Activity } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const mockData = [
    { value: 95000 }, { value: 95200 }, { value: 94800 }, { value: 95500 },
    { value: 96000 }, { value: 95800 }, { value: 96200 }, { value: 96500 },
];

export function LiveBTCPrice() {
    const [price, setPrice] = useState(96543.21);
    const [data, setData] = useState(mockData);

    useEffect(() => {
        const interval = setInterval(() => {
            const change = (Math.random() - 0.5) * 100;
            setPrice((p) => p + change);
            setData((d) => [...d.slice(1), { value: price + change }]);
        }, 2000);
        return () => clearInterval(interval);
    }, [price]);

    return (
        <FloatingCard delay={0.1} className="h-full min-h-[160px]">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Live BTC Price
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            Oracle: FTSO
                        </span>
                    </div>
                </div>
                <Activity className="text-primary h-5 w-5 animate-pulse" />
            </div>

            <div className="flex items-end justify-between">
                <div>
                    <div className="text-3xl font-bold glow-text">
                        ${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </div>
                    <div className="flex items-center text-accent text-sm mt-1">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        +2.4% (24h)
                    </div>
                </div>

                <div className="h-[50px] w-[100px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="var(--primary)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </FloatingCard>
    );
}
