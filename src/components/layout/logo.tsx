import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-10 w-10", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" className="text-primary" />
      
      {/* Treble Clef Path (Approximated for emblem style) */}
      <path
        d="M52 75C52 78 50 80 47 80C44 80 42 78 42 75C42 72 44 70 47 70C48.5 70 50 71 51 72V30C51 25 55 20 60 20C63 20 65 22 65 25C65 28 63 30 60 30C58 30 56 29 55 28L51 32V60C51 65 45 68 40 65C35 62 35 55 40 52C42 51 45 51 47 52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />

      {/* Sound Waves - Left */}
      <path d="M35 35C30 40 30 55 35 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary" opacity="0.8" />
      <path d="M28 30C20 38 20 57 28 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary" opacity="0.6" />

      {/* Sound Waves - Right */}
      <path d="M65 35C70 40 70 55 65 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary" opacity="0.8" />
      <path d="M72 30C80 38 80 57 72 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary" opacity="0.6" />

      {/* TCAM Text Section */}
      <g transform="translate(30, 72)">
        {/* Upper Line */}
        <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
        {/* TCAM Text */}
        <text
          x="20"
          y="10"
          textAnchor="middle"
          fill="currentColor"
          className="text-primary font-bold"
          style={{ fontSize: '10px', fontFamily: 'sans-serif', letterSpacing: '1px' }}
        >
          TCAM
        </text>
        {/* Lower Line */}
        <line x1="0" y1="13" x2="40" y2="13" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
      </g>
    </svg>
  );
}
