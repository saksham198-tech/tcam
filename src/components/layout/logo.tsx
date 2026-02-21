import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center h-10 w-10", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full transition-transform duration-300 hover:scale-110"
      >
        {/* Subtle background circle */}
        <circle cx="20" cy="20" r="18" className="fill-primary/5 stroke-primary/10" strokeWidth="0.5" />
        
        {/* The 'C' for Chromatica */}
        <path
          d="M28 12C26 9.5 23.5 8.5 20 8.5C13.5 8.5 8.5 13.5 8.5 20C8.5 26.5 13.5 31.5 20 31.5C23.5 31.5 26 30.5 28 28"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="text-primary"
        />
        
        {/* The Musical Note (Note Head) */}
        <circle
          cx="22"
          cy="21"
          r="4.5"
          fill="currentColor"
          className="text-accent"
        />
        
        {/* The Musical Note (Stem & Flag) */}
        <path
          d="M26.5 21V7C26.5 5.5 30 5.5 32 7.5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-accent"
        />
        
        {/* Dynamic soundwave accent */}
        <path
          d="M15 20H17M19 17V23M21 20H23"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-primary/30"
        />
      </svg>
    </div>
  );
}
