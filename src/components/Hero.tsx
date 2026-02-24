"use client";

import { motion, useScroll, useTransform, TargetAndTransition } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Scroll animations
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    // Floating elements animation
    const floatingAnimation: TargetAndTransition = {
        y: ["-10px", "10px"],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        },
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f12] to-[#121c22] pt-20"
        >
            {/* Background Grid & Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#20B2AA] opacity-20 blur-[100px]"></div>
            </div>

            {/* Floating 3D Elements Placeholder */}
            <motion.div
                animate={floatingAnimation}
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#20B2AA]/40 to-[#20B2AA]/0 border border-[#20B2AA]/20 backdrop-blur-md z-10 hidden lg:block"
                style={{ transformStyle: "preserve-3d", rotateX: 20, rotateY: 30 }}
            />
            <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, duration: 8, delay: 1 } }}
                className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-bl from-[#20B2AA]/30 to-transparent border border-[#20B2AA]/20 backdrop-blur-md z-10 hidden lg:block"
            />

            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-20 max-w-5xl mx-auto px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse"></span>
                    <span className="text-sm font-medium text-gray-300">Shaping the Future of Tech</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                >
                    Building Digital Products <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B2AA] to-emerald-400">
                        That Power Industries
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Aanspire is a technology parent company creating scalable, elegant solutions in sports, infrastructure, and automation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#products" className="group relative px-8 py-4 rounded-full bg-[#20B2AA] text-white font-medium text-base hover:bg-[#1a908a] transition-all flex items-center gap-2 overflow-hidden shadow-[0_0_40px_-10px_#20B2AA]">
                        <span className="relative z-10">Explore Products</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>

                    <a href="mailto:contact@aanspire.com" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-base hover:bg-white/10 transition-all backdrop-blur-md flex items-center gap-2">
                        Contact Us
                        <ChevronRight className="w-4 h-4 opacity-70" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
