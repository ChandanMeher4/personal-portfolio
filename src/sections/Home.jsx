import React, { useMemo, useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground.jsx";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi2";
import avatar from "../assets/avatar.png";

const FloatingCode = ({ children, className, delay = 0 }) => (
  <motion.span
    className={`absolute text-white/[0.04] font-mono text-sm select-none pointer-events-none ${className}`}
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 0.04, 0.04, 0],
      y: [0, -30],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.span>
);

const Home = () => {
  const socials = [
    { icon: FaGithub, link: "https://github.com/ChandanMeher4", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/chandan-meher-74ab1a2bb", label: "LinkedIn" },
    { icon: FaInstagram, link: "https://www.instagram.com/j_e.e_t_", label: "Instagram" },
  ];

  const roles = useMemo(
    () => ["Full-Stack Developer", "Frontend Developer", "Web Developer", "Software Engineer", "Tech Enthusiast"],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = deleting ? 35 : 80;
    const pauseTime = 1500;
    let timeoutId;

    if (!deleting && subIndex < currentRole.length) {
      timeoutId = setTimeout(() => setSubIndex((prev) => prev + 1), typingSpeed);
    } else if (!deleting && subIndex === currentRole.length) {
      timeoutId = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && subIndex > 0) {
      timeoutId = setTimeout(() => setSubIndex((prev) => prev - 1), typingSpeed);
    } else if (deleting && subIndex === 0) {
      timeoutId = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }, pauseTime / 3);
    }

    return () => clearTimeout(timeoutId);
  }, [subIndex, deleting, index, roles]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-600/10 to-purple-600/10 blur-[150px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-500/15 blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-600/5 to-cyan-500/5 blur-[200px]" />
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingCode className="top-[15%] left-[8%]" delay={0}>const developer = true;</FloatingCode>
        <FloatingCode className="top-[25%] right-[12%]" delay={2}>return &lt;App /&gt;;</FloatingCode>
        <FloatingCode className="top-[60%] left-[15%]" delay={4}>async function build()</FloatingCode>
        <FloatingCode className="top-[70%] right-[8%]" delay={1}>{`{ creativity: ∞ }`}</FloatingCode>
        <FloatingCode className="top-[40%] left-[5%]" delay={3}>import React from 'react';</FloatingCode>
        <FloatingCode className="top-[85%] left-[25%]" delay={5}>npm run deploy</FloatingCode>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="flex flex-col justify-center h-full text-center lg:text-left relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">
            {/* Typing role */}
            <motion.div
              className="mb-3 flex items-center gap-2 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse" />
              <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                Available for work
              </span>
            </motion.div>

            <motion.div
              className="mb-4 text-xl sm:text-2xl md:text-3xl font-mono font-medium text-cyan-400 tracking-wide min-h-[1.5em]"
              variants={itemVariants}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <motion.span
                className="ml-0.5 text-cyan-400"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                |
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              variants={itemVariants}
            >
              <span className="text-gradient">Hello, I'm</span>
              <br />
              <span className="text-white">
                Chandan Meher
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              I craft sleek, functional, and meaningful web experiences.
              Blending design, code, and creativity to build applications that
              stand out.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-cyan-500/25 text-sm"
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px rgba(0, 198, 255, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="/resume-full-stack(2).pdf"
                download
                className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                My Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-10 flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {socials.map(({ icon: Icon, link, label }, i) => (
                <motion.a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Avatar */}
        <div className="relative hidden lg:flex flex-col justify-center items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow ring */}
            <motion.div
              className="absolute -inset-4 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #00C6FF, #0072FF, #7B2FFF, #935D8C, #00C6FF)",
                opacity: 0.3,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute -inset-3 rounded-full bg-black" />

            {/* Avatar image */}
            <motion.img
              src={avatar}
              alt="Chandan Meher Avatar"
              className="relative z-10 rounded-full w-72 h-72 lg:w-80 lg:h-80 object-cover"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Outer glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 z-20"
        style={{ transform: "translateX(-50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiOutlineChevronDown className="text-gray-500 text-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;