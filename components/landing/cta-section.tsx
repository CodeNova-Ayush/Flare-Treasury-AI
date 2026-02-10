"use client";

import { GlowButton } from "@/components/shared/glow-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent)]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-block mb-8 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                    <div className="relative px-4 py-1 rounded-full border border-primary/30 bg-black/50 backdrop-blur-sm text-sm font-mono text-primary">
                        READY TO DEPLOY
                    </div>
                </div>

                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                    Your Treasury. <br />
                    <span className="text-white">Automated.</span> <span className="text-primary">Intelligent.</span> <span className="text-secondary">Borderless.</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Join the future of decentralized finance with the most advanced treasury management system on the Flare Network.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/dashboard">
                        <GlowButton className="h-16 px-10 text-xl" icon={<ArrowRight className="w-6 h-6" />}>
                            Launch Flare Treasury AI
                        </GlowButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}
