import React from 'react';

const SiteBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0">
    {/* Example animated shapes, you can add more or adjust colors as needed */}
    <svg className="absolute top-10 left-10 animate-spin-slow" width="40" height="40">
      <circle cx="20" cy="20" r="18" fill="#f9a8d4" opacity="0.3" />
    </svg>
    <svg className="absolute top-1/2 left-1/4 animate-bounce" width="30" height="30">
      <rect width="30" height="30" rx="8" fill="#a5b4fc" opacity="0.2" />
    </svg>
    <svg className="absolute bottom-20 right-20 animate-pulse" width="50" height="50">
      <polygon points="25,0 50,50 0,50" fill="#fcd34d" opacity="0.2" />
    </svg>
    <svg className="absolute bottom-10 left-1/2 animate-bounce" width="24" height="24">
      <circle cx="12" cy="12" r="12" fill="#6ee7b7" opacity="0.2" />
    </svg>
    <svg className="absolute top-1/3 right-1/4 animate-spin" width="32" height="32">
      <rect width="32" height="32" rx="10" fill="#f472b6" opacity="0.15" />
    </svg>
    {/* Cutesy hearts */}
    <svg className="absolute top-24 right-32 animate-bounce" width="32" height="32">
      <path d="M16 29s-13-8.35-13-15.5S8.5 2 16 8.5 29 13.5 29 13.5 16 29 16 29z" fill="#fda4af" opacity="0.25" />
    </svg>
    {/* Cutesy star */}
    <svg className="absolute top-8 right-10 animate-spin-slow" width="28" height="28">
      <polygon points="14,2 18,11 28,11 20,17 23,27 14,21 5,27 8,17 0,11 10,11" fill="#fde68a" opacity="0.3" />
    </svg>
    {/* Cutesy diamond */}
    <svg className="absolute bottom-16 left-16 animate-pulse" width="36" height="36">
      <rect width="36" height="36" rx="12" fill="#a7f3d0" opacity="0.18" />
    </svg>
    {/* Cutesy small heart */}
    <svg className="absolute bottom-8 right-1/3 animate-bounce" width="18" height="18">
      <path d="M9 16s-7-4.5-7-8.5S5.5 2 9 5.5 16 7.5 16 7.5 9 16 9 16z" fill="#f9a8d4" opacity="0.18" />
    </svg>
  </div>
);

export default SiteBackground; 