import { Hexagon, Twitter, Github, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 relative overflow-hidden pt-20 pb-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <Hexagon className="w-8 h-8 text-primary group-hover:rotate-90 transition-transform duration-500" />
                            <span className="font-display font-bold text-2xl tracking-tight">
                                FLARE <span className="text-primary">TREASURY AI</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm text-lg leading-relaxed mb-8">
                            The next generation of treasury management. Automated, secure, and powered by the Flare Network.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all hover:scale-110 border border-white/10 hover:border-primary/50">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all hover:scale-110 border border-white/10 hover:border-primary/50">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all hover:scale-110 border border-white/10 hover:border-primary/50">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-foreground text-lg">Platform</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><Link href="/dashboard" className="hover:text-primary transition-colors flex items-center gap-2 group">Dashboard <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/market" className="hover:text-primary transition-colors flex items-center gap-2 group">Market Data <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/advisor" className="hover:text-primary transition-colors flex items-center gap-2 group">AI Advisor <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/verify" className="hover:text-primary transition-colors flex items-center gap-2 group">Verification <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-foreground text-lg">Resources</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Security Audit</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground">
                        © 2025 Flare Treasury AI. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-xs font-medium text-primary hover:bg-primary/10 transition-colors cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Powered by Flare Network
                    </div>
                </div>
            </div>
        </footer>
    );
}
