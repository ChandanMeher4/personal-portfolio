import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  SiFramer,
  SiFirebase,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: 90 },
      { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E", level: 85 },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 88 },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 80 },
      { name: "Express", icon: SiExpress, color: "#FFFFFF", level: 78 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 75 },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 72 },
    ],
  },
  {
    title: "Tools & Languages",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", level: 85 },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF", level: 88 },
      { name: "Vite", icon: SiVite, color: "#646CFF", level: 82 },
      { name: "Python", icon: FaPython, color: "#3776AB", level: 70 },
      { name: "C", icon: SiC, color: "#A8B9CC", level: 65 },
      { name: "C++", icon: SiCplusplus, color: "#00599C", level: 68 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full relative overflow-hidden bg-black text-white flex flex-col items-center py-24 px-4"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/8 to-blue-600/5 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/5 to-cyan-500/8 blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-16 z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em] mb-4 block">
          What I work with
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">Technical Arsenal</span>
        </h2>
        <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
          Technologies and tools I use to bring ideas to life.
        </p>
        <motion.div
          className="mt-4 h-[2px] w-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Skills grid by category */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {categories.map((category, catIdx) => (
          <motion.div key={category.title} variants={itemVariants}>
            {/* Category label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-mono text-cyan-400/60 uppercase tracking-[0.2em]">
                {category.title}
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.06] to-transparent" />
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {category.skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  delay={catIdx * 0.1 + i * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill count badge */}
      <motion.div
        className="mt-14 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="glass rounded-full px-6 py-3 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-gray-400">
            <span className="text-white font-semibold">16+</span> technologies & growing
          </span>
        </div>
      </motion.div>
    </section>
  );
};

const SkillCard = ({ skill, delay }) => {
  const Icon = skill.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <div
        className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 h-full"
        style={{
          borderColor: isHovered ? `${skill.color}30` : undefined,
          backgroundColor: isHovered ? `${skill.color}06` : undefined,
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}12, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div className="relative z-10">
          <Icon
            className="text-3xl sm:text-4xl transition-all duration-300"
            style={{
              color: skill.color,
              filter: isHovered
                ? `drop-shadow(0 0 12px ${skill.color}60)`
                : "none",
            }}
          />
        </div>

        {/* Name */}
        <span className="relative z-10 text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center leading-tight">
          {skill.name}
        </span>

        {/* Proficiency bar — appears on hover */}
        <motion.div
          className="relative z-10 w-full h-1 bg-white/[0.06] rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? `${skill.level}%` : "0%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
