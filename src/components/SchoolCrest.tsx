import React from 'react';

interface SchoolCrestProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export default function SchoolCrest({ className = '', size = 120, light = false }: SchoolCrestProps) {
  // Deep dark navy from the original logo
  const navy = '#172B4D';
  // Red from the original logo
  const accentRed = '#BA2525';
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      className={`${className} select-none`}
      xmlns="http://www.w3.org/2000/svg"
      id="school-crest-svg"
    >
      <defs>
        {/* Path for curved text on top (The School of Pansy Flowers) */}
        <path
          id="textPathTop"
          d="M 45 150 A 105 105 0 0 1 255 150"
          fill="none"
        />
        {/* Path for curved text on bottom (Since - 2011) */}
        <path
          id="textPathBottom"
          d="M 240 150 A 90 90 0 1 1 60 150"
          fill="none"
        />
        {/* Shadow for modern elite feel */}
        <filter id="crestShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Outer Glow Circle */}
      <circle cx="150" cy="150" r="142" fill="none" stroke={light ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.05)"} strokeWidth="1" />

      {/* Main deep blue outer ring */}
      <circle cx="150" cy="150" r="128" fill={navy} filter="url(#crestShadow)" />
      
      {/* Dynamic Gold/Silver Inner Ring Accent */}
      <circle cx="150" cy="150" r="124" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3 shrink" />
      <circle cx="150" cy="150" r="118" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />

      {/* Inner white circle block */}
      <circle cx="150" cy="150" r="94" fill="#FFFFFF" />
      <circle cx="150" cy="150" r="91" fill="none" stroke={navy} strokeWidth="2" />

      {/* Circular text along path - Top */}
      <text fill="#FFFFFF" fontSize="14" fontWeight="800" fontFamily="Georgia, serif" letterSpacing="2">
        <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
          THE SCHOOL OF PANSY FLOWERS
        </textPath>
      </text>

      {/* Wheat / Laurel leaves framing the central shield (Stunning high-end school look) */}
      <g stroke={navy} strokeWidth="1.5" fill="none" strokeLinecap="round">
        {/* Left Laurel */}
        <path d="M 98 165 C 92 145 92 115 106 100" />
        {/* Left Laurel Leaves */}
        <path d="M 98 160 C 90 155 93 148 94 150" fill={navy} />
        <path d="M 96 145 C 88 140 91 133 93 135" fill={navy} />
        <path d="M 95 130 C 87 125 90 118 92 120" fill={navy} />
        <path d="M 98 115 C 91 110 94 103 96 105" fill={navy} />
        <path d="M 102 105 C 96 100 100 93 102 95" fill={navy} />

        {/* Right Laurel */}
        <path d="M 202 165 C 208 145 208 115 194 100" />
        {/* Right Laurel Leaves */}
        <path d="M 202 160 C 210 155 207 148 206 150" fill={navy} />
        <path d="M 204 145 C 212 140 209 133 208 135" fill={navy} />
        <path d="M 205 130 C 213 125 210 118 208 120" fill={navy} />
        <path d="M 202 115 C 209 110 206 103 204 105" fill={navy} />
        <path d="M 198 105 C 204 100 200 93 198 95" fill={navy} />
      </g>

      {/* Central Shield */}
      <g id="shield">
        {/* Shield boundary */}
        {/* Top curved line, corners at (110, 102) and (190, 102), dip at (150, 108). Vertical curves tapering to a beautiful bottom cusp at (150, 192). */}
        <path
          d="M 112 104 Q 150 112 188 104 C 188 140 182 178 150 192 C 118 178 112 140 112 104 Z"
          fill="#FFFFFF"
          stroke={navy}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        
        {/* Sanskrit Language Slogan at top of Shield: "ज्ञानं परमं ध्येयम्" with beautiful styling */}
        <text
          x="150"
          y="120"
          fill={accentRed}
          fontSize="9.5"
          fontWeight="bold"
          fontFamily="'Noto Sans', sans-serif"
          textAnchor="middle"
          letterSpacing="0.2"
        >
          ज्ञानं परमं ध्येयम्
        </text>

        {/* Slogan support curves */}
        <path d="M 124 125 Q 150 128 176 125" fill="none" stroke={navy} strokeWidth="1" opacity="0.4" />

        {/* Central Symbol: Deep Navy Hands/Petals holding up a red circle (Student/Pansy blossoming representation) */}
        {/* The two curved supporting arms/leaves */}
        <path
          d="M 125 174 C 122 150 138 138 143 148 C 145 152 143 162 135 168 Z"
          fill={navy}
        />
        <path
          d="M 175 174 C 178 150 162 138 157 148 C 155 152 157 162 165 168 Z"
          fill={navy}
        />
        {/* The central mini-petals / human body */}
        <path
          d="M 150 174 C 144 162 147 154 150 154 C 153 154 156 162 150 174 Z"
          fill={navy}
        />
        {/* The red circle / sun (The Head of the student or pansy flower blossom center) */}
        <circle cx="150" cy="144" r="10" fill={accentRed} />
      </g>

      {/* Since - 2011 Accent at bottom in red */}
      <text
        x="150"
        y="210"
        fill={accentRed}
        fontSize="11"
        fontWeight="800"
        fontFamily="Georgia, serif"
        textAnchor="middle"
        letterSpacing="1"
      >
        SINCE-2011
      </text>

      {/* Elegant Ribbon at the bottom for "CHANGOTOLA" (Deep Navy with gold/white accents) */}
      <g id="ribbon" filter="url(#crestShadow)">
        {/* Left Ribbon tail */}
        <path d="M 50 215 L 75 202 L 75 228 Z" fill="#0E1B30" />
        {/* Right Ribbon tail */}
        <path d="M 250 215 L 225 202 L 225 228 Z" fill="#0E1B30" />
        
        {/* Main Ribbon Body */}
        <path
          d="M 65 205 L 235 205 C 245 205 245 230 235 230 L 65 230 C 55 230 55 205 65 205 Z"
          fill={navy}
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        {/* Ribbon golden border stripes */}
        <path d="M 70 209 L 230 209" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <path d="M 70 226 L 230 226" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

        {/* Ribbon Text "CHANGOTOLA" */}
        <text
          x="150"
          y="222"
          fill="#FFFFFF"
          fontSize="13"
          fontWeight="900"
          fontFamily="'Times New Roman', Georgia, serif"
          letterSpacing="2.5"
          textAnchor="middle"
        >
          CHANGOTOLA
        </text>
      </g>

      {/* Small ribbon wing tips */}
      <path d="M 58 230 L 50 237 L 50 223 Z" fill={navy} />
      <path d="M 242 230 L 250 237 L 250 223 Z" fill={navy} />
    </svg>
  );
}
