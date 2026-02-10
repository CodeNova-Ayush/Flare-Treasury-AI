"use client";

import { GlowButton } from "@/components/shared/glow-button";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Database, Zap, Lock, Cpu } from "lucide-react";
import Link from "next/link";

function ArchitectureInBox() {
    const nodes = [
        { icon: Database, label: "FDC", color: "text-green-400", bg: "bg-green-400/20", x: 120, y: 0 },
        { icon: Zap, label: "Smart Account", color: "text-yellow-400", bg: "bg-yellow-400/20", x: -120, y: 0 },
        { icon: Lock, label: "FTSO", color: "text-purple-400", bg: "bg-purple-400/20", x: 0, y: 120 },
    ];

    return (
        <div className="relative w-[420px] bg-black/70 border border-primary/30 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.15)] backdrop-blur-xl p-6">

            {/* TOP BAR */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-xs text-primary/70">FLARE_OS_V2.0</div>
            </div>

            {/* FAKE TEXT LINES */}
            <div className="space-y-3 mb-4">
                <div className="h-2 w-3/4 bg-white/10 rounded" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
            </div>

            {/* MAIN SCREEN */}
            <div className="relative w-full h-48 border border-primary/30 rounded-xl bg-primary/5 overflow-hidden">

                {/* CENTER ALL CONTENT PERFECTLY */}
                <div className="absolute inset-0 flex items-center justify-center">

                    {/* Center AI CORE */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center"
                    >
                        <Cpu className="w-8 h-8 text-primary" />
                    </motion.div>

                    {/* Orbiting Nodes */}
                    {nodes.map((node, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2"
                            animate={{
                                x: [node.x, node.x * 0.85, node.x],
                                y: [node.y, node.y * 0.85, node.y],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.4,
                            }}
                        >
                            <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                                <div className={`w-10 h-10 rounded-xl ${node.bg} border border-white/10 flex items-center justify-center`}>
                                    <node.icon className={`w-6 h-6 ${node.color}`} />
                                </div>
                                <div className="px-2 py-0.5 rounded-full bg-black/40 border border-white/10 text-[10px] font-bold">
                                    {node.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[20%] animate-scan" />
            </div>

            {/* BOTTOM STATUS */}
            <div className="flex justify-between items-center mt-6 text-xs">
                <span className="text-muted-foreground">
                    System Status: <span className="text-green-500 font-semibold">ONLINE</span>
                </span>
                <span className="font-mono text-primary">FTSO: CONNECTED</span>
            </div>
        </div>
    );
}

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0,
                    }}
                    animate={{
                        y: [null, Math.random() * -100 + "%"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Live on Flare Network
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                        AI-Driven <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary animate-gradient bg-300%">
                            Treasury Automation
                        </span>
                        <br />
                        <span className="text-3xl md:text-4xl text-white/80 font-normal">on the Flare Network.</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed border-l-2 border-primary/50 pl-4">
                        Verify payments. Analyze markets. Automate treasury. Powered by decentralized data and intelligent execution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/dashboard">
                            <GlowButton className="h-14 px-8 text-lg w-full sm:w-auto" icon={<ArrowRight className="w-5 h-5" />}>
                                Launch Dashboard
                            </GlowButton>
                        </Link>
                        <GlowButton variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto" icon={<FileText className="w-5 h-5" />}>
                            Explore Documentation
                        </GlowButton>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex items-center justify-center h-[500px]"
                >
                    <ArchitectureInBox />
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
