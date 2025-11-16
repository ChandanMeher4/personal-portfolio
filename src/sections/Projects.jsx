import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import todoDesktop from "../assets/todo-desktop.png";
import todoMobile from "../assets/todo-mobile.png";
import carbonDesktop from "../assets/carbon-tracker-desktop.png";
import carbonMobile from "../assets/carbon-tracker-mobile.png";
import echoeDesktop from "../assets/echoe-desktop.png"
import echoeMobile from "../assets/echoe-mobile.png"

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

const Projects = () => {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Carbon Tracker",
        link: "https://carbon-tracker-app.netlify.app/",
        bgColor: "#14392B",
        image: isMobile ? carbonMobile : carbonDesktop,
        description:
          "A web app to track and visualize daily carbon emissions, helping users build greener habits.",
        tech: ["React", "Vite", "Chart.js", "Tailwind CSS", "Firebase"],
      },
      {
        title: "Todo-List",
        link: "https://todos-list-6969.netlify.app/",
        bgColor: "#353E4A",
        image: isMobile ? todoMobile : todoDesktop,
        description:
          "A sleek, responsive todo application with local storage persistence and filterable categories.",
        tech: ["React", "Tailwind CSS", "Local Storage"],
      },
      {
        title: "Echoe-Chat-App",
        link: "https://echoe-chat-app.netlify.app/",
        bgColor: "#313131",
        image: isMobile ? echoeMobile : echoeDesktop,
        description:
          "A concept UI for a modern music streaming service, built with a focus on clean design and animations.",
        tech: ["HTML", "CSS", "JavaScript"],
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
        transition: "background-color 0.4s ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4">
        <h2
          className={`text-3xl sm:text-4xl font-extrabold z-10 text-center bg-clip-text text-transparent bg-linear-to-r from-[#00C6FF] to-[#0072FF] ${
            isMobile ? "mt-0" : "mt-2"
          }`}
        >
          My Work
        </h2>
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
                maxWidth: "1200px",
              }}
            >
              <AnimatePresence mode="wait">
                {activeIndex == index && (
                  <motion.h3
                    key={`${project.title}-title`}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`text-[clamp(2rem,6vw,5rem)] text-white/90 italic font-semibold block text-center sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0 ${
                      isMobile ? "-mt-24" : ""
                    }`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div
                className={`relative w-full overflow-hidden bg-black/20 
                  md:shadow-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                    isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
                  }
                  h-[55vh] sm:h-[60vh]`}
                style={{ zIndex: 10, transition: "box-shadow 250ms ease" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top drop-shadow-xl md:drop-shadow-2xl"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    filter: "drop-shadow(0, 16px 40px rgba(0,0,0,0.65))",
                    transition: "filter 200ms ease",
                  }}
                  loading="lazy"
                />
              </div>

              <AnimatePresence mode="wait">
                {activeIndex == index && (
                  <motion.div
                    key={`${project.title}-desc`}
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`w-full max-w-lg ${
                      isMobile ? "mx-auto text-center" : "text-left"
                    }`}
                  >
                    <p className="text-base text-gray-300">
                      {project.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        isMobile ? "justify-center" : "justify-start"
                      }`}
                    >
                      {project.tech.map((techName) => (
                        <span
                          key={techName}
                          className="text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full px-3 py-1"
                        >
                          {techName}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className={`absolute ${isMobile ? "bottom-15" : "bottom-10"}`}>
          <a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-7 py-3 font-semibold rounded-full
              bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm
              shadow-lg transition-all duration-300
              transform hover:scale-105 hover:bg-white/20 hover:text-white hover:shadow-xl
            
             "
            aria-label={`view ${activeProject.title}`}
          >
            Visit Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
