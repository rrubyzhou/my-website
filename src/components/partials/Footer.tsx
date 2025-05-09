import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => (
  <footer className="w-full border-t border-gray-200 py-8 text-center text-gray-500 dark:border-gray-600 bg-black dark:bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-gray-300">
        <a href="mailto:r227zhou@uwaterloo.ca" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
          <FiMail size={24} /> r227zhou@uwaterloo.ca
        </a>
        <a href="https://www.linkedin.com/in/rrubyzhou/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
          <FiLinkedin size={24} /> LinkedIn
        </a>
        <a href="https://github.com/rrubyzhou" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
          <FiGithub size={24} /> GitHub
        </a>
      </div>
      <div className="mt-2 text-gray-400">© {new Date().getFullYear()} Ruby Zhou</div>
    </div>
  </footer>
);

export default Footer;
