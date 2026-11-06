import React, { useState } from "react";
import portfolioData from "../data/portfolioData.json";

export const ContactSection: React.FC = () => {
  const { contact, social } = portfolioData;

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const directEmail = contact.email;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(directEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubject("");
      setMessage("");
      setSubmitted(false);
    }, 3500);
  };

  return (
    <section id="contact" className="mt-16 sm:mt-20">
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-0">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-xs text-zinc-500 dark:text-zinc-400 font-geist-sans uppercase tracking-[0.14em]">
            Contact
          </h2>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            {contact.status || "Open for Roles"}
          </span>
        </div>

        {/* Cohesive Bento Card with Pixel-Perfect Symmetrical Alignment */}
        <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80 p-6 sm:p-7 font-geist-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {/* Left Column: Direct Channels & Status */}
            <div className="md:pr-8 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {contact.heading || "Get in Touch"}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-6 leading-relaxed">
                  {contact.description || "Open to full-time engineering roles, founding teams, and select projects."}
                </p>

                {/* Minimalist Contact Channels */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Email with 1-click copy */}
                  <div className="flex items-center justify-between py-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
                    <a
                      href={`mailto:${directEmail}`}
                      className="text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors truncate"
                    >
                      {directEmail}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="text-[10.5px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      {emailCopied ? "Copied! ✓" : "Copy"}
                    </button>
                  </div>

                  {/* Strategy Call via Cal.com */}
                  {contact.calUrl && (
                    <div className="flex items-center justify-between py-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
                      <span className="text-zinc-500 dark:text-zinc-400">Strategy Call</span>
                      <a
                        href={contact.calUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <span>Cal.com</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                  )}

                  {/* Social Links */}
                  <div className="flex items-center justify-between py-2">
                    <span className="text-zinc-500 dark:text-zinc-400">Social</span>
                    <div className="flex items-center gap-3">
                      <a
                        href={social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-0.5"
                      >
                        <span>X</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                      <span className="text-zinc-300 dark:text-zinc-700">·</span>
                      <a
                        href={social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-0.5"
                      >
                        <span>GitHub</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                      <span className="text-zinc-300 dark:text-zinc-700">·</span>
                      <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-0.5"
                      >
                        <span>LinkedIn</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Signal */}
              <div className="pt-4 mt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for immediate start</span>
                </div>
                <span className="text-zinc-400 dark:text-zinc-500 hidden sm:inline">&lt; 24h reply</span>
              </div>
            </div>

            {/* Right Column: Symmetrical Form with Subject */}
            <div className="md:pl-8 md:border-l md:border-zinc-200/70 md:dark:border-zinc-800/70 flex flex-col justify-between pt-6 md:pt-0 border-t md:border-t-0 border-zinc-200/60 dark:border-zinc-800/60">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-6 leading-relaxed">
                  Drop a direct note with your project or role details.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors shadow-2xs"
                  />

                  <input
                    type="text"
                    placeholder="Subject (e.g. Full-Time Role, Project Inquiry)"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors shadow-2xs"
                  />

                  <textarea
                    rows={3}
                    placeholder="Your message..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors shadow-2xs resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-black dark:hover:bg-white transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5 group"
                  >
                    <span>{submitted ? "Message Dispatched! ✓" : "Send Message"}</span>
                    <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
