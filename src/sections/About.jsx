import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profilePic from "../assets/profile-pic.jpeg";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stats = [
    { label: "Projects Built", value: "4+", icon: "🚀" },
    { label: "Technologies", value: "10+", icon: "⚡" },
    { label: "Focus Area", value: "Frontend", icon: "🎨" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center relative text-white overflow-hidden bg-black py-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/8 to-blue-600/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/5 to-cyan-500/8 blur-[150px]" />
        <div className="absolute inset-0 dot-grid opacity-50" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em] mb-4 block">
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">About Me</span>
          </h2>
          <motion.div
            className="mt-4 h-[2px] w-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Main content — two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Profile card */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative glass-strong rounded-2xl p-6 text-center">
                {/* Profile image */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <motion.div
                    className="absolute -inset-1 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, #00C6FF, #0072FF, #7B2FFF, #00C6FF)",
                      opacity: 0.5,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-0 rounded-full bg-black" />
                  <img
                    src={profilePic}
                    alt="Chandan Meher"
                    className="relative z-10 w-full h-full object-cover rounded-full"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">Chandan Meher</h3>
                <p className="mt-1 text-sm font-mono text-cyan-400">Full-Stack Developer</p>
                <p className="mt-1 text-xs text-gray-500">B.Tech (CSE) Student</p>

                {/* Mini stats */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center p-2">
                      <div className="text-lg mb-1">{stat.icon}</div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 flex gap-3">
                  <motion.a
                    href="#projects"
                    className="flex-1 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-xl text-center"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="flex-1 py-2.5 text-sm font-semibold text-white border border-white/10 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                I'm a Frontend developer with a strong focus on creating
                efficient, user-centered web applications. I enjoy solving
                real-world problems through clean design and thoughtful development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
                Driven by curiosity and attention to detail, I aim to build
                reliable, high-performing solutions that deliver both functionality
                and great user experience. My toolkit spans React, Vite, JavaScript,
                and Tailwind CSS — bringing ideas from concept to production.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4" variants={containerVariants}>
              {[
                { label: "Experience", value: "B.Tech CSE Student", sub: "Passionate learner" },
                { label: "Speciality", value: "Frontend Dev", sub: "React & Tailwind" },
                { label: "Focus", value: "Performance", sub: "Design & UX" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-xl p-4 group hover:bg-white/[0.06] transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                >
                  <div className="text-xs text-cyan-400/70 font-mono uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-base font-semibold text-white">{item.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
