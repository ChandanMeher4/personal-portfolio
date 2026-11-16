import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/experience.js";
import { EASING, DURATION } from "../utils/motion.js";

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="experience"
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
              05 — Professional Track
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#20221E]">
              Experience & Contributions
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: DURATION.entrance, delay: 0.1, ease: EASING }}
            className="max-w-md text-sm sm:text-base text-[#777970] leading-relaxed"
          >
            A chronological record of engineering internships, collaborative contributions, and
            open-source work with verifiable responsibilities.
          </motion.p>
        </div>

        {/* Editorial Timeline with Progressive Vertical Line Reveal */}
        <div className="relative ml-2 sm:ml-4 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.9, ease: EASING }}
            className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D7D3C8] origin-top"
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{
                duration: DURATION.entrance,
                delay: 0.15 + idx * 0.1,
                ease: EASING,
              }}
              className="relative group"
            >
              {/* Timeline Red Marker with Hover Reaction */}
              <motion.span
                whileHover={{ scale: 1.25 }}
                transition={{ duration: DURATION.quick, ease: EASING }}
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 bg-[#F2F0E8] border-2 border-[#C74E36] rounded-none group-hover:bg-[#C74E36] transition-colors cursor-pointer"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                {/* Meta Column (Date & Location, 4 Cols) */}
                <div className="lg:col-span-4 font-mono text-xs">
                  <span className="text-[#C74E36] font-medium block">{exp.period}</span>
                  <span className="text-[#20221E] font-semibold text-sm mt-1 block">
                    {exp.organization}
                  </span>
                  <span className="text-[#777970] block mt-0.5">{exp.location}</span>
                </div>

                {/* Content Column (Role, Description, Highlights, 8 Cols) */}
                <div className="lg:col-span-8">
                  <h3 className="text-xl font-bold text-[#20221E] mb-3 group-hover:text-[#20221E] transition-colors">
                    {exp.role}
                  </h3>

                  <p className="text-sm sm:text-base text-[#777970] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 border-t border-[#D7D3C8] pt-3 font-mono text-xs text-[#20221E]">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#C74E36] select-none">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
