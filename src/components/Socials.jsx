import React from 'react';
import { ExternalLink } from 'lucide-react';

const socials = [
  {
    name: 'LinkedIn',
    username: 'priyanshugaurav',
    url: 'https://www.linkedin.com/in/priyanshugaurav',
    icon: 'https://assets.chanhdai.com/images/link-icons/linkedin.webp',
  },
  {
    name: 'GitHub',
    username: 'priyanshugaurav',
    url: 'https://github.com/priyanshugaurav',
    icon: 'https://assets.chanhdai.com/images/link-icons/github.webp',
  },
  {
    name: 'X',
    username: '@priyanshugrv',
    url: 'https://x.com/Priyanshugrv',
    icon: 'https://assets.chanhdai.com/images/link-icons/x.webp',
  },
  // {
  //   name: 'daily.dev',
  //   username: '@ncdai',
  //   url: 'https://app.daily.dev/ncdai',
  //   icon: 'https://assets.chanhdai.com/images/link-icons/dailydev.webp',
  // },
];

const Socials = () => {
  return (
    <div
      className="min-w-screen border-b-2"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 gap-4 
          max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60.8%]
          ml-[5%] sm:ml-[10%] md:ml-[15%] lg:ml-[19.4%]
          border-l border-r
          py-4 sm:py-6
        "
        style={{ borderColor: 'var(--border-color)' }}
      >
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border pb-3 transition-all group p-4"
            style={{
              borderColor: 'var(--border-color)',
              backgroundColor: 'var(--bg-color)',
            }}
          >
            <div className="flex items-center space-x-4">
              <img
                src={social.icon}
                alt={social.name}
                className="w-10 h-10 rounded-2xl"
                style={{
                  backgroundColor: 'var(--icon-bg)',
                }}
              />
              <div>
                <div
                  className="font-semibold text-sm"
                  style={{ color: 'var(--text-color)' }}
                >
                  {social.name}
                </div>
                <div
                  className="text-sm"
                  style={{ color: 'var(--text-color)', opacity: 0.6 }}
                >
                  {social.username}
                </div>
              </div>
            </div>
            <ExternalLink
              className="w-4 h-4"
              style={{
                color: 'var(--icon-color)',
                opacity: 0.7,
              }}
            />
          </a>
        ))}
      </div>

      {/* Pattern Bar */}
      <div
        className="min-w-screen min-h-10 border-b-2 border-t-2"
        style={{
          borderColor: 'var(--border-color)',
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      ></div>
    </div>
  );
};

export default Socials;
