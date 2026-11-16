import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const SERVICE_ID = "service_j9199we";
  const TEMPLATE_ID = "template_sjyqa69";
  const PUBLIC_KEY = "cXlB2XBsPsH5BBn0c";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage("Message delivery failed. Please email directly at mchandan1204@gmail.com.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#272B25] text-[#F2F0E8] border-b border-[#3F453D]"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Invitation & Direct Routes */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#C74E36] uppercase tracking-wider block mb-3">
                06 / Initiate Contact
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F2F0E8] leading-[1.1] mb-6">
                Have something interesting to build?
              </h2>

              <p className="text-base text-[#9BA097] leading-relaxed mb-10 max-w-md">
                Open to software engineering internship opportunities, collaborations, and
                conversations about building useful digital products.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="border-t border-[#3F453D] pt-8 space-y-4 font-mono text-xs">
              <div>
                <span className="text-[#9BA097] block uppercase text-[10px] tracking-wider mb-1">
                  Electronic Mail
                </span>
                <a
                  href="mailto:mchandan1204@gmail.com"
                  className="text-[#F2F0E8] hover:text-[#C74E36] underline text-sm transition-colors"
                >
                  mchandan1204@gmail.com ↗
                </a>
              </div>

              <div>
                <span className="text-[#9BA097] block uppercase text-[10px] tracking-wider mb-1">
                  Direct Line / WhatsApp
                </span>
                <a
                  href="tel:+919572826321"
                  className="text-[#F2F0E8] hover:text-[#C74E36] underline text-sm transition-colors"
                >
                  +91 9572826321 ↗
                </a>
              </div>

              <div>
                <span className="text-[#9BA097] block uppercase text-[10px] tracking-wider mb-1">
                  GitHub Profile
                </span>
                <a
                  href="https://github.com/ChandanMeher4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2F0E8] hover:text-[#C74E36] underline text-sm transition-colors"
                >
                  github.com/ChandanMeher4 ↗
                </a>
              </div>

              <div>
                <span className="text-[#9BA097] block uppercase text-[10px] tracking-wider mb-1">
                  LinkedIn Professional
                </span>
                <a
                  href="https://www.linkedin.com/in/chandan-meher-74ab1a2bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2F0E8] hover:text-[#C74E36] underline text-sm transition-colors"
                >
                  linkedin.com/in/chandan-meher ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Minimal Editorial Form */}
          <div className="lg:col-span-7 bg-[#1F221D] border border-[#3F453D] p-6 sm:p-10">
            <div className="border-b border-[#3F453D] pb-4 mb-8 flex items-center justify-between font-mono text-xs">
              <span className="text-[#F2F0E8] font-semibold uppercase tracking-wider">
                Direct Dispatch Form
              </span>
              <span className="text-[#9BA097]">DIRECT EMAILJS GATEWAY</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field with Visible Top Label */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#9BA097] mb-2"
                >
                  Your Name <span className="text-[#C74E36]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-[#272B25] border border-[#3F453D] px-4 py-3 text-sm text-[#F2F0E8] placeholder-[#9BA097]/40 focus:border-[#C74E36] focus:outline-none rounded-none transition-colors"
                />
              </div>

              {/* Email Field with Visible Top Label */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#9BA097] mb-2"
                >
                  Email Address <span className="text-[#C74E36]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@company.com"
                  className="w-full bg-[#272B25] border border-[#3F453D] px-4 py-3 text-sm text-[#F2F0E8] placeholder-[#9BA097]/40 focus:border-[#C74E36] focus:outline-none rounded-none transition-colors"
                />
              </div>

              {/* Message Field with Visible Top Label */}
              <div>
                <div className="flex items-center justify-between mb-2 font-mono text-[11px]">
                  <label
                    htmlFor="contact-message"
                    className="block uppercase tracking-wider text-[#9BA097]"
                  >
                    Message / Inquiry <span className="text-[#C74E36]">*</span>
                  </label>
                  <span className="text-[#9BA097]/60">{formData.message.length}/500</span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="w-full bg-[#272B25] border border-[#3F453D] px-4 py-3 text-sm text-[#F2F0E8] placeholder-[#9BA097]/40 focus:border-[#C74E36] focus:outline-none rounded-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Status Announcement */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`px-8 py-3.5 font-medium text-sm rounded-none transition-colors flex items-center justify-center gap-2 ${
                    status === "success"
                      ? "bg-[#323730] text-[#F2F0E8] border border-[#C74E36]"
                      : "bg-[#C74E36] text-[#F2F0E8] hover:bg-[#B3412B]"
                  } disabled:opacity-60 disabled:cursor-wait`}
                >
                  {status === "idle" && <span>Send message ↗</span>}
                  {status === "sending" && <span>Sending...</span>}
                  {status === "success" && <span>Message sent ✓</span>}
                  {status === "error" && <span>Retry send ↗</span>}
                </button>

                {/* Accessible Status Announcement Region */}
                <div aria-live="polite" className="font-mono text-xs">
                  {status === "success" && (
                    <span className="text-[#F2F0E8]">
                      Thank you. Your message has been dispatched.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-[#C74E36]">{errorMessage}</span>
                  )}
                  {status === "idle" && (
                    <span className="text-[#9BA097]">I usually respond within 24 hours.</span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
