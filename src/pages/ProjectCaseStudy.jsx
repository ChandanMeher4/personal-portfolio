import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";
import { EASING, DURATION } from "../utils/motion.js";

const ProjectCaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  // Scroll to top and set dynamic project title, canonical, and social metadata
  useEffect(() => {
    window.scrollTo(0, 0);

    const HOME_URL = "https://personal-portfolio-0906.netlify.app/";
    const HOME_TITLE = "Chandan Meher — Software Engineer | The Working Index";
    const HOME_DESC =
      "Portfolio and engineering archive of Chandan Meher — Computer Science student at DSCE building full-stack products, developer tooling, and applied AI systems.";
    const HOME_OG_DESC =
      "Engineering portfolio and project archive: Foundr, MergeMind, Awaz, Echoe. B.E. CS at DSCE, ModelSuite.ai, GSSoC Top 1.1%.";

    if (project) {
      const cleanTitle = project.title.replace(".", "");
      const projectUrl = `https://personal-portfolio-0906.netlify.app/work/${project.id}`;
      const pageTitle = `${cleanTitle} — Engineering Case Study | Chandan Meher`;
      const pageDesc = `${cleanTitle}: ${project.description}`;

      // Dynamic document title
      document.title = pageTitle;

      // Dynamic Canonical URL (Prevents homepage canonical inheritance)
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) {
        canonicalEl.setAttribute("href", projectUrl);
      }

      // Meta Description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", pageDesc);

      // Open Graph Tags
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", projectUrl);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", pageTitle);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", pageDesc);

      // Twitter Card Tags
      const twUrl = document.querySelector('meta[name="twitter:url"]');
      if (twUrl) twUrl.setAttribute("content", projectUrl);

      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", pageTitle);

      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", pageDesc);
    }

    return () => {
      document.title = HOME_TITLE;

      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.setAttribute("href", HOME_URL);

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", HOME_DESC);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", HOME_URL);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", HOME_TITLE);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", HOME_OG_DESC);

      const twUrl = document.querySelector('meta[name="twitter:url"]');
      if (twUrl) twUrl.setAttribute("content", HOME_URL);

      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", HOME_TITLE);

      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", HOME_OG_DESC);
    };
  }, [id, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F2F0E8] text-[#20221E] flex flex-col items-center justify-center p-6">
        <span className="font-mono text-xs text-[#C74E36] uppercase tracking-wider mb-2">
          404 / Archive Missing
        </span>
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-sm text-[#777970] mb-6">
          The requested engineering case study does not exist in the active index.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#C74E36] text-[#F2F0E8] text-sm font-medium hover:bg-[#B3412B] transition-colors"
        >
          ← Return to Index
        </Link>
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const { caseStudy } = project;

  return (
    <div className="min-h-screen bg-[#F2F0E8] text-[#20221E] flex flex-col selection:bg-[#20221E] selection:text-[#F2F0E8]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full h-[76px] bg-[#F2F0E8] border-b border-[#D7D3C8]">
        <div className="max-w-[1360px] h-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-baseline gap-2 font-mono text-base font-semibold text-[#20221E] hover:text-[#C74E36] transition-colors"
          >
            <span>CM.</span>
            <span className="text-xs font-normal text-[#777970] group-hover:text-[#20221E] transition-colors">
              / Case Study
            </span>
          </Link>

          <Link
            to="/#work"
            className="text-xs font-mono text-[#777970] hover:text-[#C74E36] flex items-center gap-1 transition-colors"
          >
            <span>← Return to Index</span>
          </Link>
        </div>
      </header>

      {/* Main Case Study Content */}
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        {/* Breadcrumb & Identifier */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.standard, ease: EASING }}
          className="flex items-center gap-2 font-mono text-xs text-[#777970] uppercase tracking-wider mb-6 pb-4 border-b border-[#D7D3C8]"
        >
          <span>Project Archive</span>
          <span>/</span>
          <span className="text-[#C74E36]">Chapter {project.index}</span>
          <span>/</span>
          <span className="text-[#20221E]">{project.title.replace(".", "")}</span>
        </motion.div>

        {/* Title & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.entrance, delay: 0.08, ease: EASING }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#20221E] leading-[1.05] mb-4">
            {project.title}
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-[#777970] italic leading-snug">
            {project.tagline}
          </p>
        </motion.div>

        {/* Metadata Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.entrance, delay: 0.16, ease: EASING }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-t border-b border-[#D7D3C8] mb-12 font-mono text-xs"
        >
          <div>
            <span className="block text-[10px] text-[#777970] uppercase tracking-wider mb-1">
              Category
            </span>
            <span className="text-[#20221E] font-medium">{project.category.split(" / ")[1]}</span>
          </div>

          <div>
            <span className="block text-[10px] text-[#777970] uppercase tracking-wider mb-1">
              Core Stack
            </span>
            <span className="text-[#20221E] font-medium">{project.tech.join(" · ")}</span>
          </div>

          <div>
            <span className="block text-[10px] text-[#777970] uppercase tracking-wider mb-1">
              Live Deployment
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C74E36] hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>Visit application</span>
              <span>↗</span>
            </a>
          </div>

          <div>
            <span className="block text-[10px] text-[#777970] uppercase tracking-wider mb-1">
              Source Repository
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20221E] hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>GitHub repository</span>
              <span>↗</span>
            </a>
          </div>
        </motion.div>

        {/* Hero Visual with Controlled Crop Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASING }}
          className="bg-[#E9E6DC] border border-[#D7D3C8] p-4 sm:p-6 mb-16"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-[#272B25] border border-[#D7D3C8]">
            <motion.img
              src={project.desktopImage}
              alt={project.title}
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASING }}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-3 pt-2 border-t border-[#D7D3C8] flex items-center justify-between font-mono text-[11px] text-[#777970]">
            <span>FIG. 01 — FULL APPLICATION SCREENSHOT</span>
            <span>{project.title.toUpperCase()}</span>
          </div>
        </motion.div>

        {/* 6 Structured Engineering Chapters with In-View Reveals */}
        <div className="space-y-12 sm:space-y-16">
          {/* 01: The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: DURATION.entrance, ease: EASING }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 border-t border-[#D7D3C8] pt-8"
          >
            <div className="md:col-span-4 font-mono text-xs text-[#C74E36] uppercase tracking-wider">
              01 — The Problem
            </div>
            <div className="md:col-span-8 text-base sm:text-lg text-[#20221E] leading-relaxed">
              <p>{caseStudy.problem}</p>
            </div>
          </motion.section>

          {/* 02: Constraints */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: DURATION.entrance, ease: EASING }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 border-t border-[#D7D3C8] pt-8"
          >
            <div className="md:col-span-4 font-mono text-xs text-[#C74E36] uppercase tracking-wider">
              02 — Constraints & Scope
            </div>
            <div className="md:col-span-8 text-base sm:text-lg text-[#20221E] leading-relaxed">
              <p>{caseStudy.constraints}</p>
            </div>
          </motion.section>

          {/* 03: Architecture */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: DURATION.entrance, ease: EASING }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 border-t border-[#D7D3C8] pt-8"
          >
            <div className="md:col-span-4 font-mono text-xs text-[#C74E36] uppercase tracking-wider">
              03 — System Architecture
            </div>
            <div className="md:col-span-8 text-base sm:text-lg text-[#20221E] leading-relaxed">
              <p>{caseStudy.architecture}</p>
            </div>
          </motion.section>

          {/* 04: Implementation */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: DURATION.entrance, ease: EASING }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 border-t border-[#D7D3C8] pt-8"
          >
            <div className="md:col-span-4 font-mono text-xs text-[#C74E36] uppercase tracking-wider">
              04 — Implementation Details
            </div>
            <div className="md:col-span-8 text-base sm:text-lg text-[#20221E] leading-relaxed">
              <p>{caseStudy.implementation}</p>
            </div>
          </motion.section>

          {/* 05: Engineering Decisions */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: DURATION.entrance, ease: EASING }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 border-t border-[#D7D3C8] pt-8"
          >
            <div className="md:col-span-4 font-mono text-xs text-[#C74E36] uppercase tracking-wider">
              05 — Decisions & Trade-offs
            </div>
            <div className="md:col-span-8 text-base sm:text-lg text-[#20221E] leading-relaxed">
              <p>{caseStudy.decisions}</p>
            </div>
          </motion.section>

          {/* 06: Outcome */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: DURATION.entrance, ease: EASING }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 border-t border-[#D7D3C8] pt-8"
          >
            <div className="md:col-span-4 font-mono text-xs text-[#C74E36] uppercase tracking-wider">
              06 — Outcome & Lessons
            </div>
            <div className="md:col-span-8 text-base sm:text-lg text-[#20221E] leading-relaxed">
              <p>{caseStudy.outcome}</p>
            </div>
          </motion.section>
        </div>

        {/* Project Pagination with Micro-Interactions */}
        <div className="mt-20 pt-8 border-t-2 border-[#20221E] flex items-center justify-between font-mono text-xs">
          <motion.button
            type="button"
            onClick={() => navigate(`/work/${prevProject.id}`)}
            whileHover="hover"
            className="flex items-center gap-2 text-[#777970] hover:text-[#C74E36] transition-colors cursor-pointer group"
          >
            <motion.span
              variants={{ hover: { x: -3 } }}
              transition={{ duration: DURATION.quick, ease: EASING }}
              className="inline-block"
            >
              ←
            </motion.span>
            <span>Previous: {prevProject.title.replace(".", "")}</span>
          </motion.button>

          <Link
            to="/#work"
            className="hidden sm:inline-block text-[#20221E] hover:text-[#C74E36] uppercase"
          >
            Index Archive
          </Link>

          <motion.button
            type="button"
            onClick={() => navigate(`/work/${nextProject.id}`)}
            whileHover="hover"
            className="flex items-center gap-2 text-[#777970] hover:text-[#C74E36] transition-colors cursor-pointer group"
          >
            <span>Next: {nextProject.title.replace(".", "")}</span>
            <motion.span
              variants={{ hover: { x: 3 } }}
              transition={{ duration: DURATION.quick, ease: EASING }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </main>

      {/* Case Study Footer */}
      <footer className="w-full bg-[#F2F0E8] border-t border-[#D7D3C8] py-12 px-6 sm:px-8 text-center font-mono text-xs text-[#777970]">
        <span>Chandan Meher · Software Engineering · Case Study Archive 2026</span>
      </footer>
    </div>
  );
};

export default ProjectCaseStudy;
