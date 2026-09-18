import React from 'react';

interface IsometricCubesSvgProps {
  className?: string;
}

export const IsometricCubesSvg: React.FC<IsometricCubesSvgProps> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Gradients for faceted isometric cubes matching NotebookLM professional style */}
        <linearGradient id="goldTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="goldLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="goldRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        <linearGradient id="navyTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="navyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="navyRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        <linearGradient id="charcoalTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="charcoalLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="charcoalRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Cube 1 (Large Main Center-Right, Gold Accent) */}
      <g transform="translate(195, 75)">
        {/* Top Face */}
        <polygon points="0,-32 28,-16 0,0 -28,-16" fill="url(#goldTop)" />
        {/* Left Face */}
        <polygon points="-28,-16 0,0 0,34 -28,18" fill="url(#navyLeft)" />
        {/* Right Face */}
        <polygon points="0,0 28,-16 28,18 0,34" fill="url(#goldRight)" />
      </g>

      {/* Cube 2 (Upper Left, Navy/Charcoal) */}
      <g transform="translate(140, 42)">
        <polygon points="0,-24 22,-12 0,0 -22,-12" fill="url(#navyTop)" />
        <polygon points="-22,-12 0,0 0,26 -22,14" fill="url(#charcoalLeft)" />
        <polygon points="0,0 22,-12 22,14 0,26" fill="url(#navyRight)" />
      </g>

      {/* Cube 3 (Mid Left, Gold & Slate) */}
      <g transform="translate(95, 82)">
        <polygon points="0,-20 18,-10 0,0 -18,-10" fill="url(#goldTop)" />
        <polygon points="-18,-10 0,0 0,22 -18,12" fill="url(#navyLeft)" />
        <polygon points="0,0 18,-10 18,12 0,22" fill="url(#goldRight)" />
      </g>

      {/* Cube 4 (Far Top-Right, Gold) */}
      <g transform="translate(255, 30)">
        <polygon points="0,-18 16,-9 0,0 -16,-9" fill="url(#goldTop)" />
        <polygon points="-16,-9 0,0 0,20 -16,11" fill="url(#goldLeft)" />
        <polygon points="0,0 16,-9 16,11 0,20" fill="url(#goldRight)" />
      </g>

      {/* Cube 5 (Lower Center, Charcoal/Navy) */}
      <g transform="translate(160, 130)">
        <polygon points="0,-26 24,-13 0,0 -24,-13" fill="url(#charcoalTop)" />
        <polygon points="-24,-13 0,0 0,28 -24,15" fill="url(#charcoalLeft)" />
        <polygon points="0,0 24,-13 24,15 0,28" fill="url(#navyRight)" />
      </g>

      {/* Cube 6 (Lower Right, Gold Face) */}
      <g transform="translate(230, 145)">
        <polygon points="0,-22 20,-11 0,0 -20,-11" fill="url(#goldTop)" />
        <polygon points="-20,-11 0,0 0,24 -20,13" fill="url(#navyLeft)" />
        <polygon points="0,0 20,-11 20,13 0,24" fill="url(#goldRight)" />
      </g>

      {/* Cube 7 (Far Right Accent) */}
      <g transform="translate(290, 110)">
        <polygon points="0,-26 24,-13 0,0 -24,-13" fill="url(#goldTop)" />
        <polygon points="-24,-13 0,0 0,30 -24,17" fill="url(#navyLeft)" />
        <polygon points="0,0 24,-13 24,17 0,30" fill="url(#goldRight)" />
      </g>

      {/* Small Floating Satellite Fragments */}
      <polygon points="65,40 73,35 65,30 57,35" fill="#475569" />
      <polygon points="57,35 65,30 65,38 57,43" fill="#1E293B" />
      <polygon points="65,30 73,35 73,43 65,38" fill="#D97706" />

      <polygon points="215,10 221,6 215,2 209,6" fill="#F59E0B" />
      <polygon points="209,6 215,2 215,9 209,13" fill="#B45309" />
      <polygon points="215,2 221,6 221,13 215,9" fill="#78350F" />

      <polygon points="120,175 128,170 120,165 112,170" fill="#64748B" />
      <polygon points="112,170 120,165 120,174 112,179" fill="#0F172A" />
      <polygon points="120,165 128,170 128,179 120,174" fill="#334155" />

      <polygon points="275,190 282,185 275,180 268,185" fill="#FCD34D" />
      <polygon points="268,185 275,180 275,188 268,193" fill="#D97706" />
      <polygon points="275,180 282,185 282,193 275,188" fill="#B45309" />
    </svg>
  );
};
