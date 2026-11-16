import React, { useEffect, useState } from "react";
import MobileNavigation from "./MobileNavigation.jsx";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("work");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["work", "capabilities", "about", "experience", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full h-[76px] bg-[#F2F0E8] border-b border-[#D7D3C8] transition-colors duration-200"
        role="banner"
      >
        <div className="max-w-[1360px] h-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Typographic Monogram */}
          <a
            href="#"
            className="group flex items-baseline gap-2 font-mono text-base font-semibold text-[#20221E] hover:text-[#C74E36] transition-colors"
            aria-label="Chandan Meher — Home"
          >
            <span>CM.</span>
            <span className="hidden sm:inline-block text-xs font-normal text-[#777970] group-hover:text-[#20221E] transition-colors">
              / Chandan Meher
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative py-2 text-[13px] font-medium tracking-tight text-[#20221E] hover:text-[#C74E36] transition-colors"
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C74E36]"
                      layoutId="activeNavLine"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-6">
            <a
              href="/resume-full-stack(2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-[#20221E] hover:text-[#C74E36] flex items-center gap-1 transition-colors group"
            >
              <span>Resume</span>
              <span className="font-mono text-xs text-[#777970] group-hover:text-[#C74E36] transition-colors">
                ↗
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-sm font-mono text-[#20221E] hover:text-[#C74E36] border border-[#D7D3C8] rounded-none focus-visible:outline-[#C74E36]"
              aria-expanded={mobileOpen}
              aria-label="Open navigation menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Sheet */}
      <MobileNavigation
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
