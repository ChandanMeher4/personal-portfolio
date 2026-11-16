import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EASING, DURATION } from "../utils/motion.js";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 — Chapter Not Found | Chandan Meher";

    let metaRobots = document.querySelector('meta[name="robots"]');
    let created = false;
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
      created = true;
    }
    metaRobots.setAttribute("content", "noindex, nofollow");

    return () => {
      document.title = "Chandan Meher — Software Engineer | The Working Index";
      if (created && metaRobots.parentNode) {
        metaRobots.parentNode.removeChild(metaRobots);
      } else if (metaRobots) {
        metaRobots.setAttribute("content", "index, follow");
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F0E8] text-[#20221E] flex flex-col selection:bg-[#20221E] selection:text-[#F2F0E8]">
      {/* Top Editorial Monogram Header */}
      <header className="sticky top-0 z-40 w-full h-[76px] bg-[#F2F0E8] border-b border-[#D7D3C8]">
        <div className="max-w-[1360px] h-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-baseline gap-2 font-mono text-base font-semibold text-[#20221E] hover:text-[#C74E36] transition-colors"
          >
            <span>CM.</span>
            <span className="text-xs font-normal text-[#777970] group-hover:text-[#20221E] transition-colors">
              / 404 Error
            </span>
          </Link>

          <Link
            to="/"
            className="text-xs font-mono text-[#777970] hover:text-[#C74E36] flex items-center gap-1 transition-colors"
          >
            <span>← Return to Index</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Editorial Container */}
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32 flex flex-col justify-center">
        {/* Identifier Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.standard, ease: EASING }}
          className="flex items-center gap-2 font-mono text-xs text-[#C74E36] uppercase tracking-wider mb-6 pb-4 border-b border-[#D7D3C8]"
        >
          <span className="w-1.5 h-1.5 bg-[#C74E36] inline-block" />
          <span>Error 404 / Missing Index Record</span>
        </motion.div>

        {/* Big Headline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.entrance, delay: 0.08, ease: EASING }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#20221E] leading-[1.05] mb-4">
            Chapter not found in active index.
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#777970] italic leading-snug max-w-2xl">
            The requested location does not exist in this catalog or has been moved to another volume.
          </p>
        </motion.div>

        {/* Technical Diagnostics Sheet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.entrance, delay: 0.16, ease: EASING }}
          className="bg-[#E9E6DC] border border-[#D7D3C8] p-6 mb-12 max-w-xl font-mono text-xs text-[#777970] space-y-2"
        >
          <div className="flex justify-between border-b border-[#D7D3C8] pb-2">
            <span>STATUS_CODE</span>
            <span className="text-[#C74E36] font-semibold">404 NOT_FOUND</span>
          </div>
          <div className="flex justify-between border-b border-[#D7D3C8] pb-2">
            <span>INDEX_SCOPE</span>
            <span className="text-[#20221E]">The Working Index (2026 Edition)</span>
          </div>
          <div className="flex justify-between">
            <span>RECOMMENDED_ACTION</span>
            <span className="text-[#20221E]">Navigate back to the primary directory</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.entrance, delay: 0.24, ease: EASING }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            to="/"
            className="px-6 py-3.5 bg-[#C74E36] text-[#F2F0E8] text-sm font-medium hover:bg-[#B3412B] transition-colors rounded-none inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>← Return to Home Index</span>
          </Link>

          <Link
            to="/#work"
            className="px-6 py-3.5 border border-[#20221E] text-[#20221E] text-sm font-medium hover:bg-[#20221E] hover:text-[#F2F0E8] transition-colors rounded-none inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>Browse Selected Work ↘</span>
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#F2F0E8] border-t border-[#D7D3C8] py-8 px-6 sm:px-8 text-center font-mono text-xs text-[#777970]">
        <span>Chandan Meher · Software Engineering · The Working Index 2026</span>
      </footer>
    </div>
  );
};

export default NotFound;
