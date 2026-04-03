import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import OverlayMenu from "./OverlayMenu.jsx";
import logo from "../assets/c-logo.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollVisible, setScrollVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const lastScrollY = useRef(0);
  const timerRef = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active section
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollVisible(true);
          setVisible(true);
        } else {
          setScrollVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);

      if (scrollVisible) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
        timerRef.current = setTimeout(() => setVisible(false), 2500);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scrollVisible]);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/[0.06]" />

        <div className="relative flex items-center justify-between px-6 lg:px-10 py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img src={logo} alt="logo" className="w-12 h-12 relative z-10" />
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block tracking-tight">
              Chandan
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {item}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/[0.08] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-white/[0.04] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:block px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              Reach Out
            </a>

            <button
              onClick={() => setHamOpen(true)}
              className="block lg:hidden text-white text-2xl p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              aria-label="Open menu"
            >
              <IoMenu className="cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] origin-left"
          style={{
            scaleX,
            background: "linear-gradient(90deg, #00C6FF, #0072FF, #7B2FFF)",
          }}
        />
      </motion.nav>

      <OverlayMenu isOpen={hamOpen} onClose={() => setHamOpen(false)} />
    </div>
  );
};

export default Navbar;
