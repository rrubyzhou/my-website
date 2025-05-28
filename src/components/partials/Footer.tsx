import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => (
  <footer className="w-full border-t border-gray-200 py-8 text-center text-white dark:border-gray-600 bg-gradient-to-r from-pink-400 to-purple-400 rounded-t-3xl shadow-lg">
    <div className="flex flex-col items-center gap-4 z-10 relative">
      <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-white">
        <a href="mailto:r227zhou@uwaterloo.ca" className="flex items-center gap-2 hover:text-pink-200 transition-colors">
          <FiMail size={24} /> r227zhou@uwaterloo.ca
        </a>
        <a href="https://www.linkedin.com/in/rrubyzhou/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-200 transition-colors">
          <FiLinkedin size={24} /> LinkedIn
        </a>
        <a href="https://github.com/rrubyzhou" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-200 transition-colors">
          <FiGithub size={24} /> GitHub
        </a>
      </div>
      <div className="mt-2 text-white">© {new Date().getFullYear()} Ruby Zhou</div>
    </div>
  </footer>
);

export default Footer;
