import React from 'react';
import { Download } from 'lucide-react';
import { withBaseUrl } from '../utils/withBaseUrl';

const FloatingResume = () => {
  return (
    <a
      href={withBaseUrl('/Priyanshu_Gaurav_Resume.pdf')}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-white text-black dark:bg-zinc-800 dark:text-white rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-transform duration-300 group"
      title="Download Resume"
    >
      <Download size={20} className="group-hover:animate-bounce" />
    </a>
  );
};

export default FloatingResume;
