"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Cpu, Activity, BarChart, Zap } from "lucide-react";
import { useRef } from "react";

const steps = [
    {
        id: "01",
        title: "User sends BTC transaction",
        description:
            "Initiate a payment on the Bitcoin network as you normally would. The transaction is broadcasted to the mempool.",
        icon: CheckCircle,
    },
    {
        id: "02",
        title: "FDC verifies it trustlessly",
        description:
            "Flare Data Connector attestors observe the transaction and reach consensus on its validity without centralized intermediaries.",
        icon: Cpu,
    },
    {
        id: "03",
        title: "FTSO provides real-time pricing",
        description:
            "Live BTC/USD rates are fetched from decentralized providers to calculate the exact treasury value at the moment of execution.",
        icon: Activity,
    },
    {
        id: "04",
        title: "AI analyzes treasury posture",
        description:
            "Our AI engine evaluates the new state against your risk parameters and strategy goals, generating an optimal action plan.",
        icon: BarChart,
    },
    {
        id: "05",
        title: "Smart Account executes strategy",
        description:
            "Automated rebalancing, swapping, or staking occurs in a single gasless transaction via Flare Smart Accounts.",
        icon: Zap,
    },
];

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="how-it-works"
            ref={containerRef}
            className="py-32 bg-black relative overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_80%,transparent)]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        How It <span className="text-secondary">Works</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        From Bitcoin transaction to automated Flare execution in 5 steps.
                    </p>
                </div>

                {/* CENTERED TIMELINE */}
                <div className="relative space-y-24 mx-auto max-w-2xl">
                    {/* Vertical line */}
                    <div className="absolute left-[32px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex gap-8"
                        >
                            {/* Icon */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)] relative group cursor-pointer">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <step.icon className="w-6 h-6 text-primary" />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-black text-xs font-bold flex items-center justify-center border border-white">
                                        {step.id}
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="pt-2">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

