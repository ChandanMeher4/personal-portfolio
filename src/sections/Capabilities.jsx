import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { capabilities, foundations, certifications } from "../data/capabilities.js";
import { EASING, DURATION } from "../utils/motion.js";

const Capabilities = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-b border-[#D7D3C8] bg-[#F2F0E8] text-[#20221E]"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="border-b border-[#D7D3C8] pb-6 mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: DURATION.entrance, ease: EASING }}
          >
            <span className="font-mono text-xs text-[#C74E36] uppercase tracking-wider block mb-3">
              03 / Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#20221E]">
              The tools are only part of the process.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: DURATION.entrance, delay: 0.1, ease: EASING }}
            className="max-w-md text-sm sm:text-base text-[#777970] leading-relaxed"
          >
            Technologies organised by engineering domain, paired with practical project evidence
            rather than arbitrary proficiency scores.
          </motion.p>
        </div>

        {/* 4 Structured Capability Groups (Horizontal Rows) */}
        <div className="divide-y divide-[#D7D3C8] border-t border-b border-[#D7D3C8]">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: DURATION.entrance,
                delay: 0.15 + idx * 0.08,
                ease: EASING,
              }}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 hover:bg-[#E9E6DC]/40 transition-colors px-2 sm:px-4 group cursor-default"
            >
              {/* Index & Category Title (4 cols) */}
              <div className="md:col-span-4 flex items-start gap-4">
                <span className="font-mono text-xs text-[#777970] group-hover:text-[#C74E36] transition-colors pt-1 font-semibold">
                  {cap.index}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#20221E] group-hover:text-[#20221E] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#777970] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>

              {/* Technologies List (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-center">
                <span className="font-mono text-[10px] uppercase text-[#777970] mb-2 tracking-wider">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs sm:text-sm font-mono text-[#20221E]">
                  {cap.stack.map((item, i) => (
                    <span key={item} className="flex items-center gap-2">
                      {i > 0 && <span className="text-[#D7D3C8]">/</span>}
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Evidence (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-center border-t md:border-t-0 border-[#D7D3C8] pt-4 md:pt-0">
                <span className="font-mono text-[10px] uppercase text-[#777970] mb-2 tracking-wider">
                  Implementation Evidence
                </span>
                <p className="text-xs sm:text-sm text-[#777970] leading-relaxed font-sans">
                  {cap.evidence}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Foundations & Certifications Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: DURATION.entrance, delay: 0.5, ease: EASING }}
          className="mt-12 sm:mt-16 space-y-6"
        >
          <div className="bg-[#E9E6DC] border border-[#D7D3C8] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#C74E36] tracking-wider block mb-1">
                  Foundation Languages
                </span>
                <h4 className="text-lg font-bold text-[#20221E]">
                  Programming Foundations
                </h4>
                <p className="text-xs sm:text-sm text-[#777970] mt-1">
                  Core computational principles, memory architecture, and object modeling.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
                {foundations.map((lang) => (
                  <div key={lang.name} className="border-l border-[#D7D3C8] pl-4">
                    <span className="font-bold text-[#20221E] block mb-1">
                      {lang.name}
                    </span>
                    <span className="text-[#777970] text-[11px] leading-tight block">
                      {lang.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Credentials Bar */}
          <div className="bg-[#E9E6DC]/60 border border-[#D7D3C8] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#C74E36] inline-block" />
              <span className="text-[#20221E] font-semibold uppercase tracking-wider text-[11px]">
                Professional Credential
              </span>
              <span className="text-[#777970]">|</span>
              <span className="text-[#20221E]">{certifications[0].title}</span>
            </div>
            <span className="text-[#777970] text-[11px]">
              ISSUED BY META · 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
