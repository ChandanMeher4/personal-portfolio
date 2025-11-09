import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheck } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

function Contact() {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        setFormState("sent");
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setFormState("idle"), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setFormState("idle");
        alert(
          "Failed to send the message, please try again. Error: " + error.text
        );
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center relative text-white overflow-hidden bg-black py-24"
    >
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
      <div className="px-4 w-full max-w-2xl mx-auto">
        <h2 className="text-4xl text-center mb-12 sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
          {" "}
          
          Get In Touch
        </h2>

        <motion.form
          className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="
                peer w-full p-3.5 pt-6 rounded-lg bg-white/5 border border-white/10 
                text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-transparent
                transition-all duration-300
              "
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className="
                absolute left-3.5 top-4 text-gray-400
                transition-all duration-300 ease-in-out
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-focus:-top-0 peer-focus:text-xs peer-focus:text-[#00C6FF]
                peer-[&:not(:placeholder-shown)]:-top-0
                peer-[&:not(:placeholder-shown)]:text-xs
              "
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="
                peer w-full p-3.5 pt-6 rounded-lg bg-white/5 border border-white/10 
                text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-transparent
                transition-all duration-300
              "
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className="
                absolute left-3.5 top-4 text-gray-400
                transition-all duration-300 ease-in-out
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-focus:-top-0 peer-focus:text-xs peer-focus:text-[#00C6FF]
                peer-[&:not(:placeholder-shown)]:-top-0
                peer-[&:not(:not(:placeholder-shown))]:text-xs
              "
            >
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              rows={5}
              className="
                peer w-full p-3.5 pt-6 rounded-lg bg-white/5 border border-white/10 
                text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-transparent
                transition-all duration-300
              "
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="message"
              className="
                absolute left-3.5 top-4 text-gray-400
                transition-all duration-300 ease-in-out
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-focus:-top-0 peer-focus:text-xs peer-focus:text-[#00C6FF]
                peer-[&:not(:placeholder-shown)]:-top-0
                peer-[&:not(:placeholder-shown)]:text-xs
              "
            >
              Your Message...
            </label>
          </div>

          <motion.button
            type="submit"
            disabled={formState === "sending"}
            className={`
              w-full inline-flex items-center justify-center 
              px-7 py-4 rounded-full font-semibold 
              bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white
              shadow-lg transition-all duration-300
              ${
                formState === "sending"
                  ? "cursor-wait opacity-80"
                  : "hover:scale-105 hover:shadow-xl"
              }
            `}
            whileHover={formState !== "sending" ? { scale: 1.05, y: -3 } : {}}
            whileTap={formState !== "sending" ? { scale: 0.95 } : {}}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={formState}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                {formState === "sending" && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
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
      </div>
    </section>
  );
}

export default Contact;
