import React, { useState } from "react";

const Footer = () => {
  // State to track form submission: "idle", "submitting", "success", "error"
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset(); // Clear form fields
        // Reset button back to normal after 3.5 seconds
        setTimeout(() => setStatus("idle"), 3500);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3500);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <footer
      className="w-full flex flex-col items-center transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* MAIN COLUMN WRAPPER */}
      <div
        className="w-full max-w-[70%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[61.5%] border-x-2 flex flex-col items-center"
        style={{ borderColor: "var(--border-color)" }}
      >
        
        {/* --- CONTACT FORM SECTION --- */}
        <div 
          className="w-full flex flex-col items-center px-6 sm:px-10 py-5 sm:py-24 border-t-2 border-b-2 transition-colors duration-400"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Header & Text (Perfectly Centered) */}
          <div className="flex flex-col items-center text-center max-w-lg gap-4 overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight overflow-hidden">
              Get in touch.
            </h2>
            <p className="opacity-70 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              Looking for a full-stack engineer or want to discuss a project? Drop a message below and I'll get back to you.
            </p>
          </div>

          {/* Form (Intercepted by React handleSubmit) */}
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col gap-4 mt-10"
          >
            {/* WEB3FORMS ACCESS KEY */}
            <input type="hidden" name="access_key" value="4cfd9da7-29b7-4549-93b9-1b051d4f475a" />

            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Name"
              className="w-full bg-transparent border-2 border-[var(--border-color)] focus:border-[var(--text-color)] p-3 text-[15px] font-medium outline-none transition-colors duration-300 placeholder:opacity-50 text-center"
              style={{ color: "var(--text-color)" }} 
            />
            
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Email"
              className="w-full bg-transparent border-2 border-[var(--border-color)] focus:border-[var(--text-color)] p-3 text-[15px] font-medium outline-none transition-colors duration-300 placeholder:opacity-50 text-center"
              style={{ color: "var(--text-color)" }} 
            />

            <textarea 
              name="message" 
              required 
              placeholder="Your message..." 
              rows="3"
              className="w-full bg-transparent border-2 border-[var(--border-color)] focus:border-[var(--text-color)] p-3 text-[15px] font-medium outline-none transition-colors duration-300 resize-none placeholder:opacity-50 text-center"
              style={{ color: "var(--text-color)" }} 
            ></textarea>

            {/* Dynamic Status Button */}
            <button 
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className={`w-full py-4 mt-4 border-2 font-bold cursor-pointer text-sm tracking-widest uppercase transition-all duration-300 active:scale-95 ${
                status === "idle" ? "hover:bg-[var(--text-color)] hover:text-[var(--bg-color)]" : ""
              }`}
              style={{ 
                borderColor: status === "success" ? "var(--streak-medium)" : status === "error" ? "#ef4444" : "var(--text-color)",
                backgroundColor: status === "success" ? "var(--streak-medium)" : status === "error" ? "#ef4444" : "transparent",
                color: (status === "success" || status === "error") ? "var(--bg-color)" : "var(--text-color)",
              }}
            >
              {status === "idle" && "Send Message"}
              {status === "submitting" && "Sending..."}
              {status === "success" && "Message Sent ✔"}
              {status === "error" && "Error - Try Again"}
            </button>
          </form>
        </div>

        {/* --- COPYRIGHT STRIP (1 Row, 3 Columns) --- */}
        <div 
          className="w-full px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-medium opacity-60 items-center"
        >
          {/* Left aligned on desktop, center on mobile */}
          <p className="text-center md:text-left">
            Developed by <strong className="text-[var(--text-color)]">Priyanshu Gaurav</strong>
          </p>
          
          {/* Always centered */}
          <p className="text-center">
            Inspired by <a href="https://chanhdai.com" target="_blank" rel="noreferrer" className="underline hover:opacity-100 transition-opacity">chanhdai.com</a>
          </p>
          
          {/* Right aligned on desktop, center on mobile */}
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;