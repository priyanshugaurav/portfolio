import React from 'react';
import {
  Code2,
  Lightbulb, // Keeping all your original imports just in case
  MapPin,
  Phone,
  Mail,
  Brain,
  Globe,
} from 'lucide-react';

const Bio = () => {
  return (
    <div>
      {/* Main bio content */}
      <div
        style={{ borderColor: "var(--border-color)" }}
        className="border-b-2 min-h-[25vh] sm:min-h-[30vh] min-w-screen"
      >
        <div
          style={{ borderColor: "var(--border-color)" }}
          className="
            flex flex-col space-y-2 justify-center
            border-l border-r
            ml-[5%] sm:ml-[10%] md:ml-[15%] lg:ml-[19.4%]
            max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60.8%]
            pl-3 sm:pl-4
            py-4 sm:py-6
          "
        >
          {[
            { icon: <Code2 size={14} />, text: 'Full-Stack Software Engineer & Freelance Consultant' },
            { icon: <Brain size={14} />, text: 'Systems Engineering, C++ Runtimes & Modern Web' },
            { icon: <MapPin size={14} />, text: 'Patna, Bihar, India' },
            { icon: <Mail size={14} />, text: 'priyanshugaurav01@gmail.com', link: 'mailto:priyanshugaurav01@gmail.com' },
            { icon: <Globe size={14} />, text: 'priyanshugaurav.space', link: 'https://priyanshugaurav.space' },

          ].map(({ icon, text, link }, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 font-light text-sm sm:text-base"
            >
              <div
                style={{
                  backgroundColor: "var(--icon-bg)",
                  color: "var(--icon-color)",
                  borderRadius: "9999px",
                  transition:
                    "background-color 0.4s ease, color 0.4s ease, box-shadow 0.3s ease",
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center"
              >
                {icon}
              </div>
              <div
                style={{ color: "var(--text-color)" }}
                className="font-thin leading-6"
              >
                {link ? (
                  <a 
                    href={link} 
                    target={link.startsWith('http') ? "_blank" : "_self"} 
                    rel="noopener noreferrer"
                    className="hover:underline transition-all"
                  >
                    {text}
                  </a>
                ) : (
                  text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pattern bar */}
      <div
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--cover-bg)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
          transition: "background-color 0.4s ease, background-image 0.4s ease",
        }}
        className="min-w-screen min-h-10 border-b-2"
      ></div>
    </div>
  );
};

export default Bio;