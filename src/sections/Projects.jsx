import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects.js";

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

  const thresholds = [0.25, 0.5, 0.75, 1.0];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    const idx = thresholds.findIndex((th) => latest < th);
    setActiveIndex(idx === -1 ? projects.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  // Keyboard navigation / direct jump
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

            {/* Accessible Chapter Selectors */}
            <div className="flex items-center gap-3" role="tablist" aria-label="Project selector">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => scrollToChapter(idx)}
                  className={`px-2 py-0.5 text-xs transition-colors border ${
                    activeIndex === idx
                      ? "border-[#C74E36] text-[#F2F0E8] bg-[#C74E36]/10"
                      : "border-transparent text-[#9BA097] hover:text-[#F2F0E8]"
                  }`}
                  role="tab"
                  aria-selected={activeIndex === idx}
                  aria-label={`Jump to project ${proj.index}: ${proj.title}`}
                >
                  {proj.index}
                </button>
              ))}
              <span className="text-[#3F453D] ml-1">/</span>
              <span className="text-[#9BA097]">04</span>
            </div>
          </div>

          {/* Main Stage Grid: 36% Info Column / 64% Visual Column */}
          <div className="grid grid-cols-12 gap-10 lg:gap-14 my-auto items-center">
            {/* Left Column (36% -> 4 to 5 cols) */}
            <div className="col-span-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono text-xs text-[#C74E36] uppercase tracking-wider block mb-3">
                    {activeProject.category}
                  </span>

                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F0E8] mb-4">
                    {activeProject.title}
                  </h3>

                  <p className="text-base text-[#9BA097] leading-relaxed mb-6">
                    {activeProject.description}
                  </p>

                  {/* Technology Stack List */}
                  <div className="border-t border-b border-[#3F453D] py-3.5 mb-8">
                    <span className="block font-mono text-[10px] uppercase text-[#9BA097] mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F2F0E8]">
                      {activeProject.tech.map((t, i) => (
                        <span key={t} className="flex items-center gap-1.5">
                          {i > 0 && <span className="text-[#3F453D]">·</span>}
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-5 text-sm font-medium">
                    <Link
                      to={`/work/${activeProject.id}`}
                      className="inline-flex items-center gap-1.5 text-[#C74E36] hover:text-[#F2F0E8] transition-colors group underline underline-offset-4"
                    >
                      <span>Case study</span>
                      <span className="font-mono text-xs">↗</span>
                    </Link>

                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#F2F0E8] hover:text-[#C74E36] transition-colors group underline underline-offset-4"
                    >
                      <span>Live demo</span>
                      <span className="font-mono text-xs text-[#9BA097] group-hover:text-[#C74E36]">
                        ↗
                      </span>
                    </a>

                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#9BA097] hover:text-[#F2F0E8] transition-colors group underline underline-offset-4"
                    >
                      <span>GitHub</span>
                      <span className="font-mono text-xs text-[#9BA097] group-hover:text-[#F2F0E8]">
                        ↗
                      </span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column (64% -> 7 cols) */}
            <div className="col-span-7 flex flex-col items-center">
              <div className="w-full bg-[#1F221D] border border-[#3F453D] p-3 sm:p-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#272B25] border border-[#3F453D]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeProject.id}
                      src={activeProject.desktopImage}
                      alt={activeProject.title}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
              <span className="animate-bounce">↓</span>
            </div>
            <div className="w-48 h-1 bg-[#3F453D] relative overflow-hidden">
              <motion.div
                className="h-full bg-[#C74E36]"
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
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
