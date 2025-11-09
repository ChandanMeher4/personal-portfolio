import React from "react";
import { motion, spring } from "framer-motion";
import profilePic from "../assets/profile-pic.jpg";
import ParticlesBackground from "../components/particlesBackground";

const About = () => {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  ];

  const stats = [
    { label: "Experience", value: "B.Tech (CSE) student" },
    { label: "Speciality", value: "Frontend Development" },
    { label: "Focus", value: "Performance, design & usability" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative text-white overflow-hidden bg-black py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((glow, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-linear-to-r from-[#1D2B53] via-[#4B3D8A] to-[#935D8C] animate-pulse ${glow} `}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-y-16">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative w-40 h-40 md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#4B3D8A]/20 to-[#1D2B53]/20 border border-[#4B3D8A]/25 shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <img
              src={profilePic}
              alt="Profile Picture"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Chandan Meher
            </h2>

            <p className="mt-2 text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#00C6FF] to-[#0072FF]">
              Frontend Developer
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build modern, responsive applications with a strong focus on
              clean design, delightful UX, and performance. My toolkit spans
              React, Vite, JavaScript, and Tailwind CSS, bringing ideas to life
              from concept to production with smooth, engaging user interfaces.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center sm:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-base font-semibold">{stat.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#00C6FF] to-[#0072FF] text-white font-semibold px-6 py-3"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#00C6FF] text-[#00C6FF] font-semibold px-6 py-3"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  backgroundColor: "#00C6FF",
                  color: "#000000",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I'm a Frontend developer with a strong focus on creating
            efficient, user-centered web applications. I enjoy solving
            real-world problems through clean design and thoughtful development.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            {" "}
            Driven by curiosity and attention to detail, I aim to build
            reliable, high-performing solutions that deliver both functionality
            and great user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
