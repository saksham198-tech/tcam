import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('fill-none', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
      {/* Inner Circle Border */}
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      
      {/* Stylized Musical Symbol / Clef */}
      <path
        d="M50 25 C55 25, 65 30, 65 45 C65 65, 50 70, 50 70 C50 70, 35 65, 35 45 C35 30, 45 25, 50 25 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M50 35 V60 M45 40 H55 M45 50 H55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* TCAM text inside circle */}
      <text
        x="50"
        y="85"
        textAnchor="middle"
        fontSize="12"
        fontWeight="800"
        fill="currentColor"
        fontFamily="Inter, sans-serif"
        letterSpacing="1"
      >
        TCAM
      </text>
    </svg>
  );
}
