
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
        {/* Subtle background highlight - trimmed to match text width (~50 units centered at 40) */}
        <rect x="15" y="2" width="50" height="36" rx="4" className="fill-primary/5" />
        
        {/* Top Bold Line - trimmed to match text width */}
        <path
          d="M15 2H65"
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
        
        {/* Bottom Bold Line - trimmed to match text width */}
        <path
          d="M15 38H65"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* Small accents - positioned near the text boundaries */}
        <circle cx="12" cy="20" r="1.5" className="fill-accent" />
        <circle cx="68" cy="20" r="1.5" className="fill-accent" />
      </svg>
    </div>
  );
}
