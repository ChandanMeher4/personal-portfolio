import React from "react";
import profilePic from "../assets/profile-pic.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-b border-[#D7D3C8] bg-[#F2F0E8] text-[#20221E]"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (58% -> 7 Cols): Narrative Editorial Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-xs text-[#C74E36] uppercase tracking-wider block mb-3">
              04 / Background & Perspective
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#20221E] leading-[1.1] mb-8">
              Curious about how things work. Interested in building how they should work.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#777970] leading-relaxed">
              <p>
                I'm a Computer Science student who enjoys taking an idea from a rough concept to a
                working, dependable application.
              </p>
              <p>
                My interests lie in the intersection of interface development and backend engineering.
                I enjoy figuring out how different pieces of an application connect, how data flows
                between layers, and how the final experience feels to the person using it.
              </p>
              <p>
                Most of what I know comes from building, experimenting, and improving things through
                actual implementation—learning from edge cases, profiling bottlenecks, and refining
                interfaces until they are responsive and clear.
              </p>
            </div>

            {/* Direct Work Inquiry Callout */}
            <div className="mt-10 pt-6 border-t border-[#D7D3C8] flex flex-wrap items-center gap-6 font-mono text-xs text-[#777970]">
              <span className="text-[#20221E] font-medium">Seeking 2026 Engineering Internships</span>
              <span className="text-[#D7D3C8]">·</span>
              <a
                href="#contact"
                className="text-[#C74E36] hover:underline flex items-center gap-1"
              >
                <span>Initiate conversation</span>
                <span>↘</span>
              </a>
            </div>
          </div>

          {/* Right Column (42% -> 5 Cols): Personal Record Sheet */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-[#E9E6DC] border border-[#D7D3C8] p-6 sm:p-8">
              {/* Record Header */}
              <div className="flex items-center justify-between border-b border-[#D7D3C8] pb-4 mb-6 font-mono text-xs">
                <span className="text-[#20221E] font-semibold uppercase tracking-wider">
                  Personal Record
                </span>
                <span className="text-[#777970]">CM / ARCHIVE-2026</span>
              </div>

              {/* Compact Portrait Preview */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#D7D3C8]">
                <div className="w-16 h-20 bg-[#D7D3C8] border border-[#D7D3C8] overflow-hidden shrink-0">
                  <img
                    src={profilePic}
                    alt="Chandan Meher"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#20221E]">Chandan Meher</h3>
                  <p className="font-mono text-xs text-[#777970] mt-0.5">Software Engineering Student</p>
                  <span className="inline-block mt-2 text-[10px] font-mono text-[#C74E36] uppercase px-1.5 py-0.5 bg-[#C74E36]/10 border border-[#C74E36]/30">
                    Candidate Record
                  </span>
                </div>
              </div>

              {/* Facts Grid */}
              <dl className="space-y-3.5 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[#D7D3C8]/70">
                  <dt className="text-[#777970] uppercase">Degree Program</dt>
                  <dd className="text-[#20221E] font-medium text-left sm:text-right">
                    B.E. Computer Science & Engineering
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[#D7D3C8]/70">
                  <dt className="text-[#777970] uppercase">Academic Performance</dt>
                  <dd className="text-[#C74E36] font-bold text-left sm:text-right">
                    CGPA: 9.2 / 10
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[#D7D3C8]/70">
                  <dt className="text-[#777970] uppercase">Institution</dt>
                  <dd className="text-[#20221E] font-medium text-left sm:text-right">
                    Dayananda Sagar College of Engineering
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[#D7D3C8]/70">
                  <dt className="text-[#777970] uppercase">Graduation Target</dt>
                  <dd className="text-[#20221E] font-medium text-left sm:text-right">Expected May 2028</dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[#D7D3C8]/70">
                  <dt className="text-[#777970] uppercase">Global Benchmark</dt>
                  <dd className="text-[#20221E] font-medium text-left sm:text-right">
                    GSSoC 2026: Top 1.1% (Ranked Top 500 / 43k+)
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[#D7D3C8]/70">
                  <dt className="text-[#777970] uppercase">Professional Credential</dt>
                  <dd className="text-[#20221E] font-medium text-left sm:text-right">
                    Meta Front-End Developer Certified
                  </dd>
                </div>

                <div className="pt-2">
                  <dt className="text-[#777970] uppercase mb-1.5">Core Engineering Arsenal</dt>
                  <dd className="text-[#20221E] font-medium bg-[#F2F0E8] p-3 border border-[#D7D3C8] text-[11px] leading-relaxed">
                    React.js, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Socket.io, RAG pipelines, Qdrant, Model Context Protocol (MCP), Docker.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
