import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center h-10 w-32", className)}>
      <svg
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full transition-transform duration-300 hover:scale-105"
      >
        {/* Subtle background highlight for the text area */}
        <rect x="28" y="8" width="64" height="24" rx="4" className="fill-primary/5" />
        
        {/* Top Bold Line - Trimmed to text width */}
        <path
          d="M32 8H88"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* TCAM Text */}
        <text
          x="60"
          y="25"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-primary font-bold text-xl"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.05em'
          }}
        >
          TCAM
        </text>
        
        {/* Bottom Bold Line - Trimmed to text width */}
        <path
          d="M32 32H88"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* Small accents closer to the trimmed logo */}
        <circle cx="28" cy="20" r="1.5" className="fill-accent" />
        <circle cx="92" cy="20" r="1.5" className="fill-accent" />
      </svg>
    </div>
  );
}
