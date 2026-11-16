import React, { useEffect, useRef } from "react";

const MobileNavigation = ({ isOpen, onClose, activeSection, navItems }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#F2F0E8] flex flex-col justify-between p-6 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      ref={containerRef}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#D7D3C8] pb-6">
        <span className="font-mono text-base font-semibold text-[#20221E]">
          CM. / INDEX
        </span>
        <button
          type="button"
          onClick={onClose}
          className="font-mono text-xs uppercase tracking-wider text-[#20221E] hover:text-[#C74E36] py-1 px-3 border border-[#D7D3C8] transition-colors"
          aria-label="Close menu"
        >
          Close [Esc]
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="my-auto py-10" aria-label="Mobile links">
        <ul className="space-y-6">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#20221E] hover:text-[#C74E36] transition-colors"
                >
                  <span className="font-mono text-xs font-normal text-[#777970] group-hover:text-[#C74E36] transition-colors">
                    0{idx + 1}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-[#C74E36] font-mono text-lg" aria-hidden="true">
                      ●
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Colophon */}
      <div className="border-t border-[#D7D3C8] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#777970]">
        <div>
          <span>Chandan Meher · Software Engineering</span>
          <br />
          <span>Bengaluru, India</span>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#20221E] hover:text-[#C74E36] underline"
        >
          Download Résumé ↗
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;
