"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Zap, Lock } from "lucide-react";

export function StructuralAnimation() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        The <span className="text-primary">Architecture</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A fully integrated system for trustless treasury management.
                    </p>
                </div>

                <div className="relative h-[600px] w-full border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                    {/* Central Core */}
                    <div className="relative z-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-48 h-48 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center"
                        >
                            <div className="w-32 h-32 rounded-full border border-primary/50 flex items-center justify-center bg-primary/5 backdrop-blur-md">
                                <Cpu className="w-12 h-12 text-primary" />
                            </div>
                        </motion.div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="text-xs font-bold text-primary bg-black/50 px-2 py-1 rounded">AI CORE</div>
                        </div>
                    </div>

                    {/* Orbiting Nodes */}
                    {[
                        { icon: Database, label: "FDC", color: "text-green-500", bg: "bg-green-500/20", x: 200, y: 0 },
                        { icon: Zap, label: "Smart Account", color: "text-yellow-500", bg: "bg-yellow-500/20", x: -200, y: 0 },
                        { icon: Lock, label: "FTSO", color: "text-purple-500", bg: "bg-purple-500/20", x: 0, y: 200 },
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2"
                            animate={{
                                x: [node.x, node.x * 0.8, node.x],
                                y: [node.y, node.y * 0.8, node.y],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i,
                            }}
                        >
                            <div className={`-translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2`}>
                                <div className={`w-16 h-16 rounded-xl ${node.bg} border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                                    <node.icon className={`w-8 h-8 ${node.color}`} />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs font-bold backdrop-blur-md">
                                    {node.label}
                                </div>
                            </div>

                            {/* Connecting Lines Removed */}
                        </motion.div>
                    ))}

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                </div>
            </div>
        </section>
    );
}
