import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { HiOutlineArrowUp } from "react-icons/hi2";

const socials = [
  { icon: FaGithub, link: "https://github.com/ChandanMeher4", label: "GitHub" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/chandan-meher-74ab1a2bb", label: "LinkedIn" },
  { icon: FaInstagram, link: "https://www.instagram.com/j_e.e_t_", label: "Instagram" },
];

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative w-full py-16 bg-black text-gray-500 overflow-hidden"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glows */}
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-600/3 blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-600/3 to-cyan-500/5 blur-[100px]" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Chandan Meher</h3>
            <p className="text-sm text-gray-600">Full-Stack Developer</p>
          </div>

          {/* Center: Quick links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Social links */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, link, label }) => (
              <motion.a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Chandan Meher. All rights reserved.
          </p>

          <p className="text-xs text-gray-700 flex items-center gap-1.5">
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500/60"
            >
              ❤️
            </motion.span>
            using React & Framer Motion
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <HiOutlineArrowUp className="text-sm" />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;