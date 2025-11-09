import React, { useEffect, useRef } from "react";
import { useState } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import logo from "../assets/c-logo.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollVisible, setScrollVisible] = useState(true);

  const lastScrollY = useRef(0);
  const timerRef = useRef(null);

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
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      if (scrollVisible) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
        timerRef.current = setTimeout(()=>{
          setVisible(false)
        }, 2000)
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if(timerRef.current){
        clearTimeout(timerRef.current)
      }
    };
  }, [scrollVisible]);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div>
      <nav
        className={`fixed top-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Chandan
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                text-lg font-medium text-gray-300
                transition-all duration-300
                hover:text-transparent hover:bg-clip-text
                hover:bg-linear-to-r from-[#00C6FF] to-[#0072FF]
              "
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="
              hidden lg:block
              px-6 py-3 text-lg font-semibold text-white 
              bg-linear-to-r from-[#00C6FF] to-[#0072FF] 
              rounded-full shadow-lg 
              hover:opacity-90 
              transition-all duration-300 ease-in-out
              transform hover:scale-105
            "
          >
            Reach Out
          </a>

          <div className="block lg:hidden">
            <button
              onClick={() => setHamOpen(true)}
              className="text-white text-3xl focus:outline-none"
            >
              <IoMenu className="cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={hamOpen} onClose={() => setHamOpen(false)} />
    </div>
  );
};

export default Navbar;
