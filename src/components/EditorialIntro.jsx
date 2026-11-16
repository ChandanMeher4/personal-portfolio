import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASING } from "../utils/motion.js";

const EditorialIntro = ({ onComplete }) => {
  const [stage, setStage] = useState("arrival"); // 'arrival' (0-400ms) -> 'reveal' (400-1500ms) -> 'opening' (1500-2200ms) -> 'done'

  useEffect(() => {
    // Check reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      onComplete();
      return;
    }

    // Sequence timing: calm, readable editorial pace (~2.2s total)
    const revealTimer = setTimeout(() => setStage("reveal"), 400);
    const openingTimer = setTimeout(() => setStage("opening"), 1500);
    const doneTimer = setTimeout(() => {
      setStage("done");
      onComplete();
    }, 2200);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setStage("done");
        onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(openingTimer);
      clearTimeout(doneTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          key="editorial-cover"
          initial={{ opacity: 1, y: "0%" }}
          animate={
            stage === "opening"
              ? { y: "-100%", opacity: 0.98 }
              : { y: "0%", opacity: 1 }
          }
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: EASING }}
          className="fixed inset-0 z-50 bg-[#F2F0E8] text-[#20221E] flex flex-col justify-between p-6 sm:p-12 border-b-2 border-[#20221E] shadow-2xl pointer-events-auto select-none overflow-hidden"
          role="dialog"
          aria-label="Editorial Publication Cover Reveal"
        >
          {/* Frame 01: The Arrival (0–400ms) */}
          <div className="flex items-center justify-between border-b border-[#D7D3C8] pb-4">
            <div className="flex items-baseline gap-3">
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASING }}
                className="font-mono text-base font-bold text-[#20221E]"
              >
                CM.
              </motion.span>
              <span className="text-[#D7D3C8] font-mono text-xs">/</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: EASING }}
                className="font-mono text-xs text-[#777970] uppercase tracking-wider"
              >
                Portfolio Edition 2026
              </motion.span>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block font-mono text-xs text-[#777970]">
                Chandan Meher
              </span>
              <button
                type="button"
                onClick={() => {
                  setStage("done");
                  onComplete();
                }}
                className="font-mono text-[11px] uppercase tracking-wider text-[#777970] hover:text-[#C74E36] px-2.5 py-1 border border-[#D7D3C8] hover:border-[#C74E36] transition-colors cursor-pointer"
                aria-label="Skip opening animation"
              >
                Skip [Esc]
              </button>
            </div>
          </div>

          {/* Frame 02: The Reveal (400–1500ms) */}
          <div className="max-w-3xl my-auto py-8">
            {/* Red Registration Line */}
            <div className="w-full h-[2px] bg-[#D7D3C8] mb-6 relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={stage !== "arrival" ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: EASING }}
                className="absolute inset-0 bg-[#C74E36] origin-left"
              />
            </div>

            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={stage !== "arrival" ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4, delay: 0.15, ease: EASING }}
              className="font-mono text-xs text-[#C74E36] uppercase tracking-widest block mb-4"
            >
              Software Engineering · Bengaluru, India
            </motion.span>

            {/* Clipped Headline Mask */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={stage !== "arrival" ? { y: "0%" } : { y: "105%" }}
                transition={{ duration: 0.65, delay: 0.2, ease: EASING }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#20221E] leading-tight"
              >
                I build full-stack products, from the interface to the systems behind it.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={stage !== "arrival" ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASING }}
              className="font-editorial text-xl sm:text-2xl text-[#777970] italic mt-4"
            >
              Software engineering, thoughtfully built.
            </motion.p>
          </div>

          {/* Bottom Colophon Bar */}
          <div className="border-t border-[#D7D3C8] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-[#777970]">
            <div>
              <span>First Edition · Selected Work · Capabilities · Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C74E36] inline-block" />
              <span>Editorial Cover Reveal</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditorialIntro;
