import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaPaperPlane, FaCheck, FaGithub, FaLinkedin } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState("idle");

  const SERVICE_ID = "service_j9199we";
  const TEMPLATE_ID = "template_sjyqa69";
  const PUBLIC_KEY = "cXlB2XBsPsH5BBn0c";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setFormState("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setFormState("idle");
        alert("Failed to send the message, please try again.");
      });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const contactLinks = [
    {
      icon: HiOutlineMail,
      label: "Email",
      value: "chandanmeher112@gmail.com",
      href: "mailto:mchandan1204@gmail.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "ChandanMeher4",
      href: "https://github.com/ChandanMeher4",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Chandan Meher",
      href: "https://www.linkedin.com/in/chandan-meher-74ab1a2bb",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center relative text-white overflow-hidden bg-black py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/8 to-blue-600/5 blur-[150px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/5 to-cyan-500/8 blur-[150px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <motion.div
        className="px-4 sm:px-6 w-full max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em] mb-4 block">
            Let's connect
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
          <motion.div
            className="mt-4 h-[2px] w-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Let's work<br />
                <span className="text-gradient">together.</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
              </p>
            </motion.div>

            {/* Contact links */}
            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/[0.06] transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                    <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <motion.form
              className="glass-strong rounded-2xl p-6 sm:p-8 space-y-5"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Name field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="peer w-full p-4 pt-7 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-transparent focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                  placeholder="Name"
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-[10px] font-mono text-gray-500 uppercase tracking-wider transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-sans peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-cyan-400 peer-focus:font-mono"
                >
                  Your Name
                </label>
              </div>

              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="peer w-full p-4 pt-7 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-transparent focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-[10px] font-mono text-gray-500 uppercase tracking-wider transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-sans peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-cyan-400 peer-focus:font-mono"
                >
                  Your Email
                </label>
              </div>

              {/* Message field */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  rows={5}
                  maxLength={500}
                  className="peer w-full p-4 pt-7 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-transparent focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none text-sm"
                  placeholder="Message"
                  onChange={handleChange}
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-[10px] font-mono text-gray-500 uppercase tracking-wider transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-sans peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-cyan-400 peer-focus:font-mono"
                >
                  Your Message
                </label>
                {/* Character counter */}
                <div className="absolute bottom-3 right-4 text-[10px] font-mono text-gray-600">
                  {formData.message.length}/500
                </div>
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={formState === "sending"}
                className={`
                  w-full inline-flex items-center justify-center 
                  px-7 py-4 rounded-xl font-semibold text-sm
                  transition-all duration-300
                  ${formState === "sent"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white shadow-lg shadow-cyan-500/20"
                  }
                  ${formState === "sending" ? "cursor-wait opacity-80" : ""}
                `}
                whileHover={formState === "idle" ? { scale: 1.02, y: -2, boxShadow: "0 20px 40px rgba(0, 198, 255, 0.25)" } : {}}
                whileTap={formState === "idle" ? { scale: 0.98 } : {}}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={formState}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    {formState === "sending" && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <CgSpinner />
                      </motion.div>
                    )}
                    {formState === "sent" && <FaCheck />}
                    {formState === "idle" && <FaPaperPlane />}

                    {formState === "idle"
                      ? "Send Message"
                      : formState === "sending"
                      ? "Sending..."
                      : "Message Sent!"}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
