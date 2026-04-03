import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

const origin = "95% 5%";

function OverlayMenu({ isOpen, onClose }) {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-[100px]" />

          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl p-2 rounded-full hover:bg-white/10 transition-all duration-300 z-10"
            aria-label="close menu"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <IoCloseSharp />
          </motion.button>

          {/* Nav items */}
          <ul className="relative z-10 space-y-4 text-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.15 + index * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="relative inline-block text-4xl sm:text-5xl font-bold text-white/80 hover:text-white transition-all duration-300 group py-2"
                >
                  <span className="relative z-10">{item}</span>
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C6FF] to-[#0072FF] group-hover:w-full transition-all duration-400 ease-out" />
                  {/* Number */}
                  <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-xs font-mono text-white/20 group-hover:text-cyan-500/50 transition-colors duration-300">
                    0{index + 1}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Bottom text */}
          <motion.p
            className="absolute bottom-8 text-white/20 text-sm font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            chandan.dev
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OverlayMenu;
