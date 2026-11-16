import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile-pic.jpeg";
import { EASING, DURATION } from "../utils/motion.js";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[88svh] flex flex-col justify-between pt-10 sm:pt-14 pb-12 px-6 sm:px-8 lg:px-12 border-b border-[#D7D3C8]"
    >
      <div className="max-w-[1360px] w-full mx-auto my-auto">
        {/* Top Metadata Strip — 0ms Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.entrance, ease: EASING }}
          className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] sm:text-xs text-[#777970] uppercase tracking-wider mb-8 sm:mb-12 border-b border-[#D7D3C8] pb-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C74E36] rounded-none inline-block" />
            <span>Chandan Meher / Personal Index</span>
          </div>
          <div>
            <span>01 — Intro / Software Engineering · Bengaluru, India</span>
          </div>
        </motion.div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (58-62% -> 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Signature Clipped Text Reveal — 100ms */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.1, ease: EASING }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-[76px] font-bold text-[#20221E] leading-[1.04] tracking-[-0.03em]"
              >
                I build full-stack products, from the interface to the systems behind it.
              </motion.h1>
            </div>

            {/* Supporting Description — 220ms */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.entrance, delay: 0.22, ease: EASING }}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-[#777970] max-w-2xl leading-relaxed"
            >
              A developer focused on building useful digital products with thoughtful interfaces,
              maintainable architectures, and reliable foundations.
            </motion.p>

            {/* Action Buttons — 320ms */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.entrance, delay: 0.32, ease: EASING }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary CTA with Interactive Arrow Micro-Movement */}
              <motion.a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C74E36] text-[#F2F0E8] font-medium text-sm rounded-none focus-visible:outline-[#20221E] group"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={{
                  hover: { backgroundColor: "#B3412B" },
                }}
                transition={{ duration: DURATION.quick, ease: EASING }}
              >
                <span>Explore selected work</span>
                <motion.span
                  variants={{
                    hover: { x: 3, y: 2 },
                  }}
                  transition={{ duration: DURATION.quick, ease: EASING }}
                  className="font-mono inline-block text-xs"
                >
                  ↘
                </motion.span>
              </motion.a>

              {/* Secondary Outline Action */}
              <motion.a
                href="/resume.pdf"
                download="Chandan_Meher_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 border border-[#20221E] text-[#20221E] font-medium text-sm rounded-none group"
                whileHover={{ backgroundColor: "#20221E", color: "#F2F0E8" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: DURATION.quick, ease: EASING }}
              >
                <span>Download résumé</span>
                <span className="font-mono text-xs">↓</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Real Portrait (38-42% -> 5 Cols) — 180ms Controlled Crop Reveal */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: EASING }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#E9E6DC] border border-[#D7D3C8] p-3"
            >
              {/* Fixed Mask Container with Controlled Crop Transition */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#D7D3C8]">
                <motion.img
                  src={profilePic}
                  alt="Chandan Meher"
                  initial={{ scale: 1.05, y: 8, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.22, ease: EASING }}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  loading="eager"
                />
              </div>

              {/* Photo Annotation Caption */}
              <div className="mt-3 pt-2 border-t border-[#D7D3C8] flex items-center justify-between font-mono text-[11px] text-[#777970]">
                <span>FIG. 01 — PORTRAIT</span>
                <span>CHANDAN MEHER</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Information Strip — 400ms Progressive Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASING }}
          className="mt-14 sm:mt-16 pt-6 border-t border-[#D7D3C8] grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-[#777970]"
        >
          <div>
            <span className="block text-[10px] text-[#20221E] uppercase font-semibold mb-1">
              Discipline
            </span>
            <span>B.E. CS · CGPA: 9.2/10</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#20221E] uppercase font-semibold mb-1">
              Institution
            </span>
            <span>DSCE, Bengaluru (2028)</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#20221E] uppercase font-semibold mb-1">
              Status
            </span>
            <span className="text-[#20221E] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C74E36] inline-block" />
              Open to Internships
            </span>
          </div>
          <div>
            <span className="block text-[10px] text-[#20221E] uppercase font-semibold mb-1">
              Core Focus
            </span>
            <span>Full-Stack & Applied AI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
