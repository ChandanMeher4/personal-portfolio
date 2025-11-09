import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiC,
  SiCplusplus,
  SiMongodb,
} from "react-icons/si";
import ParticlesBackground from "../components/particlesBackground";

const skillsRow1 = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript (ES6+)", icon: IoLogoJavascript, color: "#F7DF1E" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const skillsRow2 = [
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
];

const marqueeVariants = (isRow2) => ({
  animate: {
    x: isRow2 ? ["0%", "-100%"] : ["-100%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
});

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full relative overflow-hidden bg-black text-white flex flex-col items-center py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#1D2B53] via-[#4B3D8A] to-[#935D8C] opacity-15 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1D2B53] via-[#4B3D8A] to-[#935D8C] opacity-10 blur-[140px] animate-pulse delay-500"></div>
      </div>

      <motion.div
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
          My Technical Arsenal
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          A collection of the technologies and tools I use to bring ideas to
          life.
        </p>
      </motion.div>

      <div className="relative w-full max-w-6xl flex flex-col gap-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          variants={marqueeVariants(false)}
          animate="animate"
          whileHover={{ transition: { duration: 999 } }}
        >
          {[...skillsRow1, ...skillsRow1].map((skill, i) => (
            <SkillPill key={i} skill={skill} />
          ))}
        </motion.div>

        <motion.div
          className="flex gap-8 whitespace-nowrap"
          variants={marqueeVariants(true)}
          animate="animate"
          whileHover={{ transition: { duration: 999 } }}
        >
          {[...skillsRow2, ...skillsRow2].map((skill, i) => (
            <SkillPill key={i} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillPill = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      className="flex items-center gap-3 py-3 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg cursor-pointer"
      whileHover={{
        scale: 1.05,
        y: -5,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="text-3xl shrink-0" style={{ color: skill.color }} />
      <span className="text-lg font-medium text-gray-200">{skill.name}</span>
    </motion.div>
  );
};

export default Skills;
