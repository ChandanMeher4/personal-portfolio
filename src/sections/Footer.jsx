import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const socials = [
  { icon: FaGithub, link: "https://github.com/ChandanMeher4" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/chandan-meher-74ab1a2bb" },
  { icon: FaInstagram, link: "https://www.instagram.com/j_e.e_t_" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="footer"
      className="relative w-full py-12 bg-black text-gray-400 overflow-hidden"
    >
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#1D2B53] to-[#4B3D8A] opacity-10 blur-[100px]"></div>
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] opacity-5 blur-[100px]"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {currentYear} Chandan Meher. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            Crafted with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        
        <div className="flex gap-6 text-2xl">
          {socials.map(({ icon: Icon, link }, i) => (
            <motion.a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00C6FF] transition-all duration-300"
              whileHover={{ scale: 1.2, y: -5, transition: { duration: 0.2 } }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;