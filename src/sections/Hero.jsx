import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile-pic.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[88svh] flex flex-col justify-between pt-10 sm:pt-14 pb-12 px-6 sm:px-8 lg:px-12 border-b border-[#D7D3C8]"
    >
      <div className="max-w-[1360px] w-full mx-auto my-auto">
        {/* Top Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[76px] font-bold text-[#20221E] leading-[1.04] tracking-[-0.03em]"
            >
              I build full-stack products, from the interface to the systems behind it.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-[#777970] max-w-2xl leading-relaxed"
            >
              A developer focused on building useful digital products with thoughtful interfaces,
              maintainable architectures, and reliable foundations.
            </motion.p>

            {/* Action Buttons: 2 Controls Only (Solid Red Rectangle & Outline/Text) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#C74E36] text-[#F2F0E8] font-medium text-sm hover:bg-[#B3412B] transition-colors rounded-none focus-visible:outline-[#20221E]"
              >
                Explore selected work ↘
              </a>

              <a
                href="/resume-full-stack(2).pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#20221E] text-[#20221E] font-medium text-sm hover:bg-[#20221E] hover:text-[#F2F0E8] transition-colors rounded-none"
              >
                Download résumé ↓
              </a>
            </motion.div>
          </div>

          {/* Right Column: Real Portrait (38-42% -> 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#E9E6DC] border border-[#D7D3C8] p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#D7D3C8]">
                <img
                  src={profilePic}
                  alt="Chandan Meher"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  loading="eager"
                />
              </div>

              {/* Photo Annotation Caption */}
              <div className="mt-3 pt-2 border-t border-[#D7D3C8] flex items-center justify-between font-mono text-[11px] text-[#777970]">
                <span>FIG. 01 — PORTRAIT</span>
                <span>CHANDAN MEHER</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Information Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
