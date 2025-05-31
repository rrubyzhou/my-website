import React from 'react';

const SiteBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0">
    {/* Animated pastel shapes for background */}
    <svg className="absolute top-10 left-10 animate-spin-slow" width="40" height="40">
      <circle cx="20" cy="20" r="18" fill="#e9d5ff" opacity="0.25" />
    </svg>
    <svg className="absolute top-1/2 left-1/4 animate-bounce" width="30" height="30">
      <rect width="30" height="30" rx="8" fill="#a5b4fc" opacity="0.18" />
    </svg>
    <svg className="absolute bottom-20 right-20 animate-pulse" width="50" height="50">
      <polygon points="25,0 50,50 0,50" fill="#fcd34d" opacity="0.18" />
    </svg>
    <svg className="absolute bottom-10 left-1/2 animate-bounce" width="24" height="24">
      <circle cx="12" cy="12" r="12" fill="#6ee7b7" opacity="0.18" />
    </svg>
    <svg className="absolute top-1/3 right-1/4 animate-spin" width="32" height="32">
      <rect width="32" height="32" rx="10" fill="#f472b6" opacity="0.13" />
    </svg>
    <svg className="absolute top-24 right-32 animate-bounce" width="32" height="32">
      <ellipse cx="16" cy="16" rx="14" ry="8" fill="#fca5a5" opacity="0.13" />
    </svg>
    <svg className="absolute top-8 right-10 animate-spin-slow" width="28" height="28">
      <polygon points="14,2 18,11 28,11 20,17 23,27 14,21 5,27 8,17 0,11 10,11" fill="#fde68a" opacity="0.18" />
    </svg>
    <svg className="absolute bottom-16 left-16 animate-pulse" width="36" height="36">
      <rect width="36" height="36" rx="12" fill="#a7f3d0" opacity="0.13" />
    </svg>
    <svg className="absolute bottom-8 right-1/3 animate-bounce" width="18" height="18">
      <circle cx="9" cy="9" r="9" fill="#f9a8d4" opacity="0.13" />
    </svg>
    {/* New squiggle shape */}
    <svg className="absolute top-1/4 left-1/2 animate-spin-slow" width="40" height="20">
      <path d="M0,10 Q10,0 20,10 T40,10" stroke="#f472b6" strokeWidth="2" fill="none" opacity="0.13" />
    </svg>
    {/* New pastel circle */}
    <svg className="absolute bottom-1/3 right-1/4 animate-pulse" width="28" height="28">
      <circle cx="14" cy="14" r="14" fill="#fbcfe8" opacity="0.13" />
    </svg>
  </div>
);

export default SiteBackground; 