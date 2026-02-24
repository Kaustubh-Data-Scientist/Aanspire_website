"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Network } from "lucide-react";

export default function Vision() {
    return (
        <section id="vision" className="py-32 bg-[#05080a] relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#20B2AA]/5 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-1000"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 rounded-full border border-[#20B2AA]/20 bg-[#20B2AA]/5 text-[#20B2AA] text-sm font-medium mb-8 flex items-center gap-2 shadow-[0_0_20px_rgba(32,178,170,0.1)]"
                    >
                        <Zap className="w-4 h-4" />
                        V I S I O N 2 0 3 0
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
                    >
                        Defining The Next Era <br className="hidden md:block" />
                        of Digital Integration
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg sm:text-xl leading-relaxed"
                    >
                        We are continuously pushing the boundaries of what's possible, investing heavily in distributed systems, intelligent infrastructure, and resilient architectures.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Network className="w-6 h-6" />,
                            title: "Unified Ecosystem",
                            desc: "Connecting disparate platforms into a single, cohesive intelligence layer."
                        },
                        {
                            icon: <Zap className="w-6 h-6" />,
                            title: "Hyper Scalability",
                            desc: "Engineering applications capable of supporting exponential user growth."
                        },
                        {
                            icon: <Shield className="w-6 h-6" />,
                            title: "Rock-solid Security",
                            desc: "Implementing military-grade encryption and privacy-first data handling."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors relative group"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#20B2AA]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#20B2AA]/20 to-transparent border border-[#20B2AA]/20 flex items-center justify-center text-[#20B2AA] mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
