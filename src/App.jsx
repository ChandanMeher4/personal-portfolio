import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Capabilities from "./sections/Capabilities.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import ProjectCaseStudy from "./pages/ProjectCaseStudy.jsx";
import NotFound from "./pages/NotFound.jsx";
import EditorialIntro from "./components/EditorialIntro.jsx";

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    // Allow manual replay with ?intro=true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("intro") === "true") return true;

    // First visit only check
    try {
      return !localStorage.getItem("cm_editorial_intro_seen");
    } catch {
      return false;
    }
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    try {
      localStorage.setItem("cm_editorial_intro_seen", "true");
    } catch {
      // Ignore storage errors if private browsing restricts it
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F0E8] text-[#20221E] flex flex-col selection:bg-[#20221E] selection:text-[#F2F0E8] relative">
      {/* Editorial Opening Cover (850ms, First-visit only) */}
      {showIntro && <EditorialIntro onComplete={handleIntroComplete} />}

      {/* Persistent Editorial Header */}
      <Header />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-1">
        {/* 01 — Introduction */}
        <Hero />

        {/* 02 — Selected Work (Signature 4-Chapter Sticky Stage) */}
        <Projects />

        {/* 03 — Technical Capabilities & Evidence */}
        <Capabilities />

        {/* 04 — About & Background */}
        <About />

        {/* 05 — Professional Experience & Contributions */}
        <Experience />

        {/* 06 — Contact Finale */}
        <Contact />
      </main>

      {/* 07 — Publication Colophon / Footer */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/:id" element={<ProjectCaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
