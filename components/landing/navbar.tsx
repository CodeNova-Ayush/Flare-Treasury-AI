"use client";

import { GlowButton } from "@/components/shared/glow-button";
import { Hexagon, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all" />
                            <Hexagon className="w-8 h-8 text-primary relative z-10 animate-pulse" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight relative overflow-hidden">
                            <span className="relative z-10">FLARE <span className="text-primary">TREASURY AI</span></span>
                            <span className="absolute top-0 left-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {["Home", "Features", "Flare Technology", "AI Engine", "Roadmap"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full shadow-[0_0_8px_var(--primary)]" />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link href="/dashboard">
                            <GlowButton variant="primary" className="h-10 px-6 text-sm">
                                Dashboard Login
                            </GlowButton>
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-6 right-6 p-4 glass-panel rounded-2xl md:hidden flex flex-col gap-4 bg-black/90 backdrop-blur-xl border border-white/10"
                    >
                        {["Home", "Features", "Flare Technology", "AI Engine", "Roadmap"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                                className="text-lg font-medium text-center py-2 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                            <GlowButton className="w-full">Dashboard Login</GlowButton>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
