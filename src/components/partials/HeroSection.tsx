import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaSpotify, FaGoodreadsG } from 'react-icons/fa';
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero relative flex flex-col items-center justify-center pt-10 pb-20 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
      <div className="absolute inset-0 z-0">
        {/* Add your animated background graphics here if you want */}
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        {/* Left side - Profile */}
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden rounded-full border-4 border-pink-200 p-1 shadow-lg transition-transform hover:scale-105 dark:border-pink-300 bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100">
            <Image src="/images/ruby-icon.png" width={220} height={220} alt="ruby icon avatar" className="rounded-full animate-bounce-slow" />
            {/* Floating hearts and sparkles */}
            <span className="absolute -top-4 -left-4 animate-float-heart text-pink-300 text-3xl">💖</span>
            <span className="absolute -bottom-4 -right-4 animate-float-heart2 text-pink-200 text-2xl">💗</span>
            <span className="absolute top-2 right-8 animate-float-sparkle text-yellow-300 text-xl">✨</span>
            <span className="absolute bottom-6 left-10 animate-float-sparkle2 text-purple-300 text-lg">✨</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold text-pink-600 dark:text-pink-400">Ruby Zhou</h1>
          <div className="mt-3 flex items-center gap-2 text-lg text-purple-600 dark:text-purple-400">
            <span>I'm a</span>
            <Typed
              strings={['ML Enthusiast', 'Software Developer', 'Student', 'Book Nerd']}
              typeSpeed={60}
              backSpeed={30}
              loop
              className="text-pink-500 dark:text-pink-300"
            />
          </div>
          <div className="mt-6 flex gap-6">
            <Link href="https://www.linkedin.com/in/rrubyzhou/">
              <a className="text-blue-400 transition-all duration-300 hover:scale-110 hover:text-blue-600 dark:text-blue-300" target="_blank" rel="noopener noreferrer">
                <FiLinkedin size={28} />
              </a>
            </Link>
            <Link href="https://www.goodreads.com/user/show/140153661-rubes">
              <a className="text-yellow-700 transition-all duration-300 hover:scale-110 hover:text-yellow-800 dark:text-yellow-500" target="_blank" rel="noopener noreferrer">
                <FaGoodreadsG size={28} />
              </a>
            </Link>
            <Link href="https://open.spotify.com/user/j7g16hx29u4j8fd39lxiksx73">
              <a className="text-green-500 transition-all duration-300 hover:scale-110 hover:text-green-600 dark:text-green-400" target="_blank" rel="noopener noreferrer">
                <FaSpotify size={28} />
              </a>
            </Link>
            <Link href="https://github.com/rrubyzhou">
              <a className="text-indigo-400 transition-all duration-300 hover:scale-110 hover:text-indigo-500 dark:text-indigo-300" target="_blank" rel="noopener noreferrer">
                <FiGithub size={28} />
              </a>
            </Link>
          </div>
          <button className="mt-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-8 py-3 text-white shadow-lg transition-all hover:scale-105 hover:from-pink-500 hover:to-purple-500 focus:ring-2 focus:ring-pink-200 dark:from-pink-500 dark:to-purple-500 dark:hover:from-pink-600 dark:hover:to-purple-600">
            Download CV
          </button>
        </div>
        {/* Right side - About */}
        <div className="max-w-xl flex items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400">About Me</h2>
            <p className="mt-4 text-lg text-purple-600 dark:text-purple-400">
              Hi, I'm Ruby! I'm a Computer Science student at the University of Waterloo. Currently, I'm super interested in machine learning and experimenting with different projects! I also love reading, listening to music, and lately I've been getting into cooking (still learning but it's fun :)
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex flex-col items-center w-full">
        <p className="mb-3 text-sm text-pink-500 dark:text-pink-400">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-pink-300 dark:border-pink-400">
          <div className="animate-scroll absolute h-1 w-1 bg-pink-400 dark:bg-pink-300" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
