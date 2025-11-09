import React, { useMemo, useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground.jsx";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import avatar from "../assets/avatar.png";

const Home = () => {
  const socials = [
    { icon: FaGithub, link: "https://github.com/ChandanMeher4" },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/chandan-meher-74ab1a2bb",
    },
    { icon: FaInstagram, link: "https://www.instagram.com/j_e.e_t_" },
  ];

  const roles = useMemo(
    () => ["React Developer", "Frontend Developer", "Web Developer"],
    []
  );
  
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = deleting ? 40 : 100;
    const pauseTime = 1200;
    let timeoutId;
    if (!deleting && subIndex < currentRole.length) {
      timeoutId = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!deleting && subIndex === currentRole.length) {
      timeoutId = setTimeout(() => {
        setDeleting(true);
      }, pauseTime);
    } else if (deleting && subIndex > 0) {
      timeoutId = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, typingSpeed);
    } else if (deleting && subIndex === 0) {
      timeoutId = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }, pauseTime / 2);
    }
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 400);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(blinkTimeout);
    };
  }, [subIndex, deleting, index, roles]);
  

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      <div className="absolute inset-0">
        <div
          className="
          absolute -top-32 -left-32 
          w-[70vw] sm:w-[500px] md:w-[40vw] 
          h-[70vw] sm:h-[500px] md:h-[40vw] 
          max-w-[500px] max-h-[500px] 
          rounded-full 
          bg-linear-to-r from-[#1D2B53] via-[#4B3D8A] to-[#935D8C] 
          opacity-30 sm:opacity-20 md:opacity-10 
          blur-[100px] sm:blur-[130px] md:blur-[150px] 
          animate-pulse
        "
        ></div>
        <div
          className="
          absolute bottom-0 right-0 
          w-[70vw] sm:w-[500px] md:w-[40vw] 
          h-[70vw] sm:h-[500px] md:h-[40vw] 
          max-w-[500px] max-h-[500px] 
          rounded-full 
          bg-linear-to-r from-[#1D2B53] via-[#4B3D8A] to-[#935D8C] 
          opacity-30 sm:opacity-20 md:opacity-10 
          blur-[100px] sm:blur-[130px] md:blur-[150px] 
          animate-pulse delay-500
        "
        ></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">
            
            <motion.div
              className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-wide min-h-[1.5em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{`${roles[index].substring(0, subIndex)}${
                blink ? "|" : " "
              }`}</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00C6FF] to-[#0072FF] leading-tight drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hello I'm
              <br />
              <span className="text-white font-bold lg:whitespace-nowrap">
                Chandan Meher
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I craft sleek, functional, and meaningful web experiences.{" "}
              Blending design, code, and creativity to build applications that
              stand out.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.a
                href="#projects"
                className="inline-block bg-linear-to-r from-[#00C6FF] to-[#0072FF] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-100"
                whileHover={{ scale: 1.05, y: -2, opacity: 0.9 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>

              <motion.a
                href="/resume_chandan.pdf"
                download
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-100"
                whileHover={{ scale: 1.05, y: -2, opacity: 0.9 }}
                whileTap={{ scale: 0.95 }}
              >
                My Resume
              </motion.a>
            </motion.div>

            <div className="mt-12 flex gap-6 text-xl md:text-2xl justify-center lg:justify-start">
              {socials.map(({ icon: Icon, link }) => ( 
                <motion.a
                  key={link}
                  href={link}
                  className="text-gray-300 hover:text-[#00C6FF] transition-all duration-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }} 
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:flex flex-col justify-center items-center">
          <motion.img
            src={avatar}
            alt="Chandan Meher Avatar"
            className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover shadow-2xl shadow-[#0072FF]/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, shadow: "0 0 50px rgba(0, 114, 255, 0.8)" }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Home;