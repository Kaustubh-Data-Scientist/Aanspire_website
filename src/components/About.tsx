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

                    {/* New Bento Box Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="grid grid-cols-2 gap-4 relative"
                    >
                        {/* Glow Behind Grid */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#20B2AA]/20 to-transparent blur-3xl -z-10 opacity-70"></div>

                        {/* Top Left Card - Premium Stat */}
                        <div className="col-span-1 aspect-square rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#20B2AA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-10 h-10 rounded-full bg-[#20B2AA]/10 flex items-center justify-center border border-[#20B2AA]/20">
                                <Building2 className="w-5 h-5 text-[#20B2AA]" />
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-1">10+</h4>
                                <p className="text-sm font-medium text-gray-400">Products Incubated</p>
                            </div>
                        </div>

                        {/* Top Right Card - Abstract Chart */}
                        <div className="col-span-1 aspect-square rounded-[2rem] bg-white/[0.02] border border-white/5 p-6 flex flex-col hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative group">
                            <h4 className="text-sm font-medium text-gray-400 mb-6 z-10">Network Growth</h4>
                            <div className="mt-auto flex items-end gap-2 h-24 z-10">
                                {[40, 60, 45, 80, 55, 100].map((height, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: "0%" }}
                                        whileInView={{ height: `${height}%` }}
                                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                                        className="w-full bg-gradient-to-t from-[#20B2AA]/80 to-[#20B2AA]/20 rounded-t-sm"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Bottom Full Card - Ecosystem Tagline */}
                        <div className="col-span-2 rounded-[2rem] bg-white/[0.03] border border-white/5 p-8 hover:-translate-y-2 transition-transform duration-500 flex items-center justify-between group overflow-hidden relative">
                            {/* Animated line moving across */}
                            <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[#20B2AA] to-transparent opacity-50"
                            />

                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">Centralized Power</h4>
                                <p className="text-sm text-gray-400">One parent hub, infinite possibilities.</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#20B2AA]/20 group-hover:border-[#20B2AA]/50 group-hover:text-[#20B2AA] transition-all duration-300">
                                <Globe2 className="w-5 h-5" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
