"use client";

import { motion } from "framer-motion";

export function WireframeBot({ className }: { className?: string }) {
    return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <svg
                viewBox="0 0 200 300"
                className="w-full h-full drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                style={{ overflow: "visible" }}
            >
                {/* Head/Body Cylinder */}
                <motion.g
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Main Body Outline */}
                    <path
                        d="M60,60 L140,60 L140,180 L100,210 L60,180 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-500"
                    />
                    {/* Horizontal Grid Lines */}
                    <line x1="60" y1="90" x2="140" y2="90" stroke="currentColor" strokeWidth="1" className="text-green-500/50" />
                    <line x1="60" y1="120" x2="140" y2="120" stroke="currentColor" strokeWidth="1" className="text-green-500/50" />
                    <line x1="60" y1="150" x2="140" y2="150" stroke="currentColor" strokeWidth="1" className="text-green-500/50" />
                    <line x1="60" y1="180" x2="140" y2="180" stroke="currentColor" strokeWidth="1" className="text-green-500/50" />

                    {/* Vertical Grid Lines to simulate 3D */}
                    <path d="M80,60 L80,195" stroke="currentColor" strokeWidth="1" className="text-green-500/50" />
                    <path d="M100,60 L100,210" stroke="currentColor" strokeWidth="1" className="text-green-500/50" />
                    <path d="M120,60 L120,195" stroke="currentColor" strokeWidth="1" className="text-green-500/50" />

                    {/* Eye/Sensor */}
                    <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500" />
                    <circle cx="100" cy="100" r="5" fill="currentColor" className="text-green-400 animate-pulse" />

                    {/* Antenna */}
                    <line x1="80" y1="60" x2="80" y2="30" stroke="currentColor" strokeWidth="2" className="text-green-500" />
                    <line x1="80" y1="30" x2="80" y2="40" stroke="currentColor" strokeWidth="4" className="text-green-500" />
                </motion.g>

                {/* Legs */}
                <g transform="translate(100, 210)">
                    {/* Center Leg */}
                    <motion.path
                        d="M0,0 L0,60"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-green-500"
                        animate={{ height: [60, 50, 60] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Left Leg */}
                    <motion.path
                        d="M-10,-10 L-40,20 L-40,60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-green-500"
                        animate={{ d: ["M-10,-10 L-40,20 L-40,60", "M-10,-10 L-45,15 L-45,55", "M-10,-10 L-40,20 L-40,60"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Right Leg */}
                    <motion.path
                        d="M10,-10 L40,20 L40,60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-green-500"
                        animate={{ d: ["M10,-10 L40,20 L40,60", "M10,-10 L45,15 L45,55", "M10,-10 L40,20 L40,60"] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    />
                </g>
            </svg>
        </div>
    );
}
