import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScroll, useMotionValueEvent, motion, AnimatePresence, useSpring } from "framer-motion";
import { projects } from "../data/projects.js";
import { EASING, DURATION } from "../utils/motion.js";

const Projects = () => {
  const sceneRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Framer Motion native scroll listener
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for the scroll progress line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const thresholds = [0.25, 0.5, 0.75, 1.0];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    const idx = thresholds.findIndex((th) => latest < th);
    setActiveIndex(idx === -1 ? projects.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  // Accessible Chapter Jump
  const scrollToChapter = (index) => {
    if (!sceneRef.current) return;
    const sceneTop = sceneRef.current.offsetTop;
    const sceneHeight = sceneRef.current.offsetHeight;
    const chapterHeight = sceneHeight / projects.length;
    window.scrollTo({
      top: sceneTop + chapterHeight * index + 10,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="work"
      ref={sceneRef}
      className="relative bg-[#272B25] text-[#F2F0E8] border-b border-[#3F453D]"
      style={!isMobile ? { height: `${projects.length * 100}vh` } : undefined}
    >
      {/* ── Desktop Pinned Presentation (md+) ── */}
      <div className="hidden md:block sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="max-w-[1360px] h-full mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col justify-between">
          {/* Top Stage Header */}
          <div className="flex items-center justify-between border-b border-[#3F453D] pb-4 font-mono text-xs text-[#9BA097]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#C74E36] inline-block" />
              <span className="uppercase text-[#F2F0E8] font-medium tracking-wider">
                02 / Selected Work
              </span>
              <span className="text-[#3F453D]">|</span>
              <span>2026 Archive</span>
            </div>

            {/* Accessible Chapter Selectors with Animated Indicator */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Project selector">
              {projects.map((proj, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => scrollToChapter(idx)}
                    className="relative px-2.5 py-1 text-xs font-mono transition-colors"
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Jump to project ${proj.index}: ${proj.title}`}
                  >
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isSelected ? "text-[#F2F0E8] font-bold" : "text-[#9BA097] hover:text-[#F2F0E8]"
                      }`}
                    >
                      {proj.index}
                    </span>
                    {isSelected && (
                      <motion.span
                        layoutId="activeChapterPill"
                        className="absolute inset-0 border border-[#C74E36] bg-[#C74E36]/15"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
              <span className="text-[#3F453D] ml-1">/</span>
              <span className="text-[#9BA097]">04</span>
            </div>
          </div>

          {/* Main Stage Grid: 36% Info Column / 64% Visual Column */}
          <div className="grid grid-cols-12 gap-10 lg:gap-14 my-auto items-center">
            {/* Left Column (36% -> 5 cols) */}
            <div className="col-span-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: DURATION.project, ease: EASING }}
                >
                  {/* Category Label */}
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.04, ease: EASING }}
                    className="font-mono text-xs text-[#C74E36] uppercase tracking-wider block mb-3"
                  >
                    {activeProject.category}
                  </motion.span>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08, ease: EASING }}
                    className="text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F0E8] mb-4"
                  >
                    {activeProject.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.12, ease: EASING }}
                    className="text-base text-[#9BA097] leading-relaxed mb-6"
                  >
                    {activeProject.description}
                  </motion.p>

                  {/* Staggered Technology Stack List */}
                  <div className="border-t border-b border-[#3F453D] py-3.5 mb-8">
                    <span className="block font-mono text-[10px] uppercase text-[#9BA097] mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F2F0E8]">
                      {activeProject.tech.map((t, i) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: DURATION.quick,
                            delay: 0.16 + i * 0.03,
                            ease: EASING,
                          }}
                          className="flex items-center gap-1.5"
                        >
                          {i > 0 && <span className="text-[#3F453D]">·</span>}
                          <span>{t}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links with Arrow Micro-Interactions */}
                  <div className="flex items-center gap-6 text-sm font-medium">
                    <motion.div whileHover="hover">
                      <Link
                        to={`/work/${activeProject.id}`}
                        className="inline-flex items-center gap-1.5 text-[#C74E36] hover:text-[#F2F0E8] transition-colors underline underline-offset-4 group"
                      >
                        <span>Case study</span>
                        <motion.span
                          variants={{ hover: { x: 3, y: -2 } }}
                          transition={{ duration: DURATION.quick, ease: EASING }}
                          className="font-mono text-xs inline-block"
                        >
                          ↗
                        </motion.span>
                      </Link>
                    </motion.div>

                    <motion.div whileHover="hover">
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#F2F0E8] hover:text-[#C74E36] transition-colors underline underline-offset-4 group"
                      >
                        <span>Live demo</span>
                        <motion.span
                          variants={{ hover: { x: 3, y: -2 } }}
                          transition={{ duration: DURATION.quick, ease: EASING }}
                          className="font-mono text-xs text-[#9BA097] group-hover:text-[#C74E36] inline-block"
                        >
                          ↗
                        </motion.span>
                      </a>
                    </motion.div>

                    <motion.div whileHover="hover">
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#9BA097] hover:text-[#F2F0E8] transition-colors underline underline-offset-4 group"
                      >
                        <span>GitHub</span>
                        <motion.span
                          variants={{ hover: { x: 3, y: -2 } }}
                          transition={{ duration: DURATION.quick, ease: EASING }}
                          className="font-mono text-xs text-[#9BA097] group-hover:text-[#F2F0E8] inline-block"
                        >
                          ↗
                        </motion.span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Signature Controlled Crop & Scale Visual (64% -> 7 cols) */}
            <div className="col-span-7 flex flex-col items-center">
              <div className="w-full bg-[#1F221D] border border-[#3F453D] p-3 sm:p-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#272B25] border border-[#3F453D]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeProject.id}
                      src={activeProject.desktopImage}
                      alt={activeProject.title}
                      initial={{ opacity: 0, scale: 1.025, x: 6 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.99, x: -6 }}
                      transition={{ duration: DURATION.project, ease: EASING }}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>
                </div>

                {/* Technical Annotation Caption */}
                <div className="mt-3 pt-2.5 border-t border-[#3F453D] flex items-center justify-between font-mono text-[11px] text-[#9BA097]">
                  <span>FIG. {activeProject.index} — INTERFACE CAPTURE</span>
                  <span>{activeProject.title.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stage Progress Indicator */}
          <div className="border-t border-[#3F453D] pt-4 flex items-center justify-between font-mono text-xs text-[#9BA097]">
            <div className="flex items-center gap-2">
              <span>Scroll to navigate projects</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </div>
            <div className="w-48 h-1 bg-[#3F453D] relative overflow-hidden">
              <motion.div
                className="h-full bg-[#C74E36]"
                style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Natural Vertical Flow (< 768px) ── */}
      <div className="md:hidden px-6 py-16 space-y-16">
        <div className="border-b border-[#3F453D] pb-4 font-mono text-xs text-[#9BA097] flex items-center justify-between">
          <span className="text-[#F2F0E8] font-medium uppercase tracking-wider">
            02 / Selected Work
          </span>
          <span>4 Projects</span>
        </div>

        {projects.map((proj) => (
          <article
            key={proj.id}
            className="border border-[#3F453D] bg-[#1F221D] p-5 space-y-5"
          >
            <div className="flex items-center justify-between font-mono text-xs text-[#C74E36]">
              <span>{proj.category}</span>
              <span className="text-[#9BA097]">{proj.index} / 04</span>
            </div>

            <h3 className="text-3xl font-bold text-[#F2F0E8]">{proj.title}</h3>

            <div className="relative aspect-[16/10] overflow-hidden bg-[#272B25] border border-[#3F453D]">
              <img
                src={proj.desktopImage}
                alt={proj.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <p className="text-sm text-[#9BA097] leading-relaxed">
              {proj.description}
            </p>

            <div className="border-t border-b border-[#3F453D] py-3 text-xs font-mono text-[#F2F0E8] flex flex-wrap gap-2">
              {proj.tech.map((t) => (
                <span key={t} className="bg-[#272B25] px-2 py-1 border border-[#3F453D]">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm font-medium">
              <Link
                to={`/work/${proj.id}`}
                className="text-[#C74E36] hover:text-[#F2F0E8] underline"
              >
                Case study ↗
              </Link>
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2F0E8] hover:text-[#C74E36] underline"
              >
                Live demo ↗
              </a>
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9BA097] hover:text-[#F2F0E8] underline"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
