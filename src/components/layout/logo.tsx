
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center h-10 w-28", className)}>
      <svg
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full transition-transform duration-300 hover:scale-105"
      >
        {/* Subtle background highlight - full width */}
        <rect x="0" y="2" width="80" height="36" rx="4" className="fill-primary/5" />
        
        {/* Top Bold Line - full width */}
        <path
          d="M0 2H80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* TCAM Text - perfectly centered between lines */}
        <text
          x="40"
          y="22"
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
        
        {/* Bottom Bold Line - full width */}
        <path
          d="M0 38H80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* Small accents */}
        <circle cx="12" cy="20" r="1.5" className="fill-accent" />
        <circle cx="68" cy="20" r="1.5" className="fill-accent" />
      </svg>
    </div>
  );
}
