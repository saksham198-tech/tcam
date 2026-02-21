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
        <rect x="5" y="8" width="110" height="24" rx="4" className="fill-primary/5" />
        
        {/* Top Bold Line */}
        <path
          d="M5 8H115"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* TCAM Text */}
        <text
          x="60"
          y="26"
          textAnchor="middle"
          className="fill-primary font-bold text-xl"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.1em'
          }}
        >
          TCAM
        </text>
        
        {/* Bottom Bold Line */}
        <path
          d="M5 32H115"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* Decorative Musical Accent */}
        <circle cx="110" cy="20" r="2" className="fill-accent" />
        <circle cx="10" cy="20" r="2" className="fill-accent" />
      </svg>
    </div>
  );
}
