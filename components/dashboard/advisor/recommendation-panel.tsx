"use client";

import { FloatingCard } from "@/components/shared/floating-card";
import { GlowButton } from "@/components/shared/glow-button";
import { Bot, Zap, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const currentData = [
    { name: "BTC", value: 65, color: "oklch(0.7 0.2 190)" },
    { name: "Stable", value: 35, color: "oklch(0.6 0.2 300)" },
];

const recommendedData = [
    { name: "BTC", value: 70, color: "oklch(0.7 0.2 190)" },
    { name: "Stable", value: 30, color: "oklch(0.6 0.2 300)" },
];

export function RecommendationPanel() {
    const [isExecuting, setIsExecuting] = useState(false);
    const [isExecuted, setIsExecuted] = useState(false);

    const handleExecute = () => {
        setIsExecuting(true);
        setTimeout(() => {
            setIsExecuting(false);
            setIsExecuted(true);
        }, 3000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FloatingCard className="col-span-1 lg:col-span-2 p-8 border-l-4 border-l-primary">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center animate-pulse">
                        <Bot className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-display">AI Strategy Recommendation</h2>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-bold">
                                LOW RISK
                            </span>
                            <span>•</span>
                            <span>Confidence Score: 98%</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    <p className="text-lg leading-relaxed">
                        Based on recent <span className="text-primary font-medium">FTSO price signals</span> and low volatility indices, the AI recommends increasing Bitcoin exposure by <span className="text-accent font-bold">5%</span>.
                    </p>
                    <p className="text-muted-foreground">
                        This strategy capitalizes on the projected upward trend while maintaining a safe liquidity buffer in stablecoins. Smart Account execution will batch the swap and rebalancing into a single gasless transaction.
                    </p>
                </div>

                {!isExecuted ? (
                    <GlowButton
                        onClick={handleExecute}
                        isLoading={isExecuting}
                        className="w-full md:w-auto min-w-[200px]"
                        icon={<Zap className="w-4 h-4" />}
                    >
                        {isExecuting ? "Executing Strategy..." : "Execute Strategy (Gasless)"}
                    </GlowButton>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 flex items-center gap-3"
                    >
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Strategy Executed Successfully via Smart Account</span>
                    </motion.div>
                )}
            </FloatingCard>

            <FloatingCard delay={0.2} className="col-span-1">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                    Allocation Impact
                </h3>

                <div className="space-y-8">
                    <div>
                        <div className="text-xs text-muted-foreground mb-2 text-center">Current</div>
                        <div className="h-[120px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={currentData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={30}
                                        outerRadius={45}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {currentData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} style={{ opacity: 0.6 }} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <TrendingUp className="w-6 h-6 text-accent animate-bounce" />
                    </div>

                    <div>
                        <div className="text-xs text-accent mb-2 text-center font-bold">Recommended</div>
                        <div className="h-[120px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={recommendedData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={35}
                                        outerRadius={50}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {recommendedData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </FloatingCard>
        </div>
    );
}
