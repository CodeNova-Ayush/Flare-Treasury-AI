"use client";

import { motion } from "framer-motion";

export function WireframeAnimation({ className }: { className?: string }) {
    return (
        <div className={`relative w-full h-full ${className}`}>
            {/* Rotating Grid Cube */}
            <motion.div
                className="absolute inset-0 border border-primary/30 rounded-lg"
                animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <div className="absolute inset-0 border border-primary/10 rounded-lg transform translate-z-10" />
                <div className="absolute inset-0 border border-primary/10 rounded-lg transform -translate-z-10" />
            </motion.div>

            {/* Scanning Line */}
            <motion.div
                className="absolute inset-x-0 h-0.5 bg-primary/50 shadow-[0_0_10px_var(--primary)]"
                animate={{
                    top: ["0%", "100%", "0%"],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-secondary rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0,
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
}
