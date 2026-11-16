import React from "react";
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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0E8] text-[#20221E] flex flex-col selection:bg-[#20221E] selection:text-[#F2F0E8]">
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
