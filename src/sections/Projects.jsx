import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import foundrDesktop from "../assets/foundr-desktop.png";
import foundrMobile from "../assets/foundr-mobile.png";
import mergeMindDesktop from "../assets/mergemind-desktop.png";
import mergeMindMobile from "../assets/mergemind-mobile.png";
import awazDesktop from "../assets/awaz-desktop.png";
import awazMobile from "../assets/awaz-mobile.png";
import echoeDesktop from "../assets/echoe-desktop.png";
import echoeMobile from "../assets/echoe-mobile.png";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    setIsMobile(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);
  return isMobile;
};

const techColors = {
  "Next.js": "#ffffff",
  "TypeScript": "#3178C6",
  "LLM APIs": "#10B981",
  "Node.js": "#339933",
  "React": "#61DAFB",
  "Express": "#ffffff",
  "Firebase": "#FFCA28",
  "Tailwind CSS": "#06B6D4",
};

const Projects = () => {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Foundr",
        link: "https://foundr-gamma.vercel.app/",
        github: "https://github.com/ChandanMeher4/foundr",
        bgColor: "#0a0a14",
        accentColor: "#00C6FF",
        image: isMobile ? foundrMobile : foundrDesktop,
        description:
          "An investment simulation platform with a real-time funding tracker and LLM-powered risk assessments and ROI projections.",
        tech: ["Next.js", "TypeScript", "LLM APIs"],
      },
      {
        title: "MergeMind",
        link: "https://merge-mind-one.vercel.app/",
        github: "https://github.com/ChandanMeher4/mergemind",
        bgColor: "#0a0d12",
        accentColor: "#7B2FFF",
        image: isMobile ? mergeMindMobile : mergeMindDesktop,
        description:
          "A Node.js tool that parses Git diffs and uses LLM APIs to generate inline, context-aware code review feedback for PR workflows.",
        tech: ["Node.js", "LLM APIs"],
      },
      {
        title: "Awaz",
        link: "https://awaz-gamma.vercel.app/login",
        github: "https://github.com/ChandanMeher4/Awaz",
        bgColor: "#0d0a14",
        accentColor: "#935D8C",
        image: isMobile ? awazMobile : awazDesktop,
        description:
          "A full-stack student grievance platform with separate student and admin portals, RBAC, and a RESTful API for submission and resolution tracking.",
        tech: ["React", "Node.js", "Express", "Firebase"],
      },
      {
        title: "Echoe",
        link: "https://echoe-chat-app.netlify.app/",
        github: "https://github.com/ChandanMeher4/Echoe-Chat-App",
        bgColor: "#080d16",
        accentColor: "#0072FF",
        image: isMobile ? echoeMobile : echoeDesktop,
        description:
          "A real-time messaging app with Firebase Firestore listeners, a scalable NoSQL schema, and a fully responsive UI across mobile and desktop.",
        tech: ["React", "Firebase", "Tailwind CSS"],
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });
  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idex = thresholds.findIndex((threshold) => latest < threshold);
    setActiveIndex(idex === -1 ? projects.length - 1 : idex);
  });
  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      className="relative text-white"
      ref={sceneRef}
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 0.6s ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse at center, ${activeProject.accentColor}08 0%, transparent 70%)`,
          }}
        />

        {/* Section header */}
        <div className={`z-20 text-center ${isMobile ? "mt-0" : "mt-2"}`}>
          <span className="text-xs font-mono text-cyan-400/60 uppercase tracking-[0.3em] block mb-2">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
            My Work
          </h2>
        </div>

        {/* Project counter */}
        <div className="absolute top-24 right-6 sm:right-10 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-sm"
            >
              <span className="text-white font-bold text-lg">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-600 mx-1">/</span>
              <span className="text-gray-600">
                {String(projects.length).padStart(2, "0")}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side progress dots */}
        <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-3">
          {projects.map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: i === activeIndex ? activeProject.accentColor : "rgba(255,255,255,0.15)",
                boxShadow: i === activeIndex ? `0 0 10px ${activeProject.accentColor}50` : "none",
              }}
              animate={{
                scale: i === activeIndex ? 1.3 : 1,
              }}
            />
          ))}
        </div>

        {/* Project content */}
        <div
          className={`relative w-full flex flex-1 items-center justify-center ${
            isMobile ? "-mt-4" : ""
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                activeIndex === index
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0 sm:z-10"
              }`}
              style={{
                width: "85%",
                maxWidth: "1100px",
              }}
            >
              {/* Project title */}
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.h3
                    key={`${project.title}-title`}
                    initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-[clamp(2rem,6vw,4.5rem)] text-white/90 font-bold block text-center sm:absolute sm:-top-16 sm:left-0 lg:left-[-3%] sm:mb-0 ${
                      isMobile ? "-mt-20" : ""
                    }`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {project.title}
                    <span style={{ color: project.accentColor }}>.</span>
                  </motion.h3>
                )}
              </AnimatePresence>

              {/* Project image */}
              <div
                className={`relative w-full overflow-hidden bg-black/30 backdrop-blur-sm border border-white/[0.06]
                  ${isMobile ? "mb-6 rounded-lg" : "mb-8 sm:mb-10 rounded-2xl"}
                  h-[50vh] sm:h-[55vh]`}
                style={{ zIndex: 10 }}
              >
                {/* Image shimmer overlay */}
                <div className="absolute inset-0 z-20 shimmer pointer-events-none opacity-0 group-hover:opacity-100" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project description + links */}
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={`${project.title}-desc`}
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 ${
                      isMobile ? "text-center items-center" : ""
                    }`}
                  >
                    <div className={`max-w-lg ${isMobile ? "mx-auto text-center" : ""}`}>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-3 ${
                          isMobile ? "justify-center" : "justify-start"
                        }`}
                      >
                        {project.tech.map((techName) => (
                          <span
                            key={techName}
                            className="flex items-center gap-1.5 text-xs font-medium text-white/70 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: techColors[techName] || "#fff" }}
                            />
                            {techName}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className={`flex gap-3 shrink-0 ${isMobile ? "mx-auto" : ""}`}>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold rounded-full bg-white/[0.08] text-white/90 border border-white/[0.1] backdrop-blur-sm text-sm hover:bg-white/15 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`visit ${project.title}`}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold rounded-full bg-white/[0.04] text-white/60 border border-white/[0.06] text-sm hover:text-white hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`github ${project.title}`}
                      >
                        <FaGithub />
                        Code
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
