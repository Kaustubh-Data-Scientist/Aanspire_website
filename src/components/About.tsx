"use client";

import { motion } from "framer-motion";
import { Building2, Globe2, Cpu } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 bg-[#05080a] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20B2AA]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 text-[#20B2AA] font-medium mb-6 tracking-wide text-sm">
                            <span className="w-8 h-px bg-[#20B2AA]"></span>
                            ABOUT AANSPIRE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            The Engine Behind <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                                Next-Gen Platforms
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Aanspire is not just a company; it's an ecosystem. As a parent technology framework,
                            we incubate, build, and scale innovative digital products that redefine industries.
                            From sports management to complex auction engines, we deliver excellence through code.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Building2 className="w-5 h-5 text-[#20B2AA]" />, title: "Parent Ecosystem", desc: "Centralized innovation hub for multiple tech products." },
                                { icon: <Globe2 className="w-5 h-5 text-[#20B2AA]" />, title: "Scalable Infrastructure", desc: "Enterprise-grade architecture ready for millions of users." },
                                { icon: <Cpu className="w-5 h-5 text-[#20B2AA]" />, title: "Automation First", desc: "Intelligent systems reducing manual friction." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
                            {/* Glassmorphism overlays */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#20B2AA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Abstract UI representation */}
                            <div className="h-full w-full rounded-2xl border border-white/5 bg-[#0a0f12]/80 backdrop-blur-sm p-6 flex flex-col gap-4 relative z-10 translate-y-8 group-hover:translate-y-4 transition-transform duration-700">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <div className="w-20 h-4 rounded-full bg-white/10 animate-pulse"></div>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                </div>
                                <div className="space-y-3 mt-4">
                                    <div className="w-full h-8 rounded-lg bg-white/5"></div>
                                    <div className="w-3/4 h-8 rounded-lg bg-white/5"></div>
                                    <div className="w-5/6 h-8 rounded-lg bg-white/5"></div>
                                </div>
                                <div className="mt-auto flex gap-4">
                                    <div className="w-1/2 h-24 rounded-xl bg-gradient-to-br from-[#20B2AA]/20 to-transparent border border-[#20B2AA]/20"></div>
                                    <div className="w-1/2 h-24 rounded-xl bg-white/5 border border-white/5"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
                        >
                            <div className="text-4xl font-bold text-white mb-1">10+</div>
                            <div className="text-sm font-medium text-[#20B2AA]">Products in Pipeline</div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
