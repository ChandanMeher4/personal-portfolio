import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

const origin = "50% 8%";

function OverlayMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="close menu"
          >
            <IoCloseSharp />
          </button>
          <ul className="space-y-6 text-center ">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={onClose}
                    className="
                      text-4xl text-white font-semibold 
                      transition-colors 
                      hover:bg-linear-to-r hover:from-[#00C6FF] hover:to-[#0072FF] 
                      hover:bg-clip-text hover:text-transparent
                    "
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OverlayMenu;
