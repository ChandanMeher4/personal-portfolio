import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="w-full bg-[#F2F0E8] text-[#20221E] py-16 px-6 sm:px-8 lg:px-12 border-t border-[#D7D3C8]"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#D7D3C8]">
          {/* Left: Identity */}
          <div>
            <h3 className="font-mono text-base font-bold tracking-tight text-[#20221E]">
              CHANDAN MEHER.
            </h3>
            <p className="font-mono text-xs text-[#777970] mt-1">
              Software Engineering · Bengaluru, India
            </p>
          </div>

          {/* Center/Right: Navigation Anchors */}
          <nav className="flex flex-wrap items-center gap-6 font-mono text-xs text-[#777970]">
            <a href="#hero" className="hover:text-[#20221E] transition-colors">
              Index
            </a>
            <a href="#work" className="hover:text-[#20221E] transition-colors">
              Work
            </a>
            <a href="#capabilities" className="hover:text-[#20221E] transition-colors">
              Capabilities
            </a>
            <a href="#about" className="hover:text-[#20221E] transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-[#20221E] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#20221E] transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#777970]">
          <div>
            <span>&copy; {currentYear} CHANDAN MEHER. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ChandanMeher4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#20221E] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chandan-meher-74ab1a2bb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#20221E] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mchandan1204@gmail.com"
              className="hover:text-[#20221E] transition-colors"
            >
              Email
            </a>
            <span className="text-[#D7D3C8]">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#20221E] hover:text-[#C74E36] transition-colors font-medium flex items-center gap-1 cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
