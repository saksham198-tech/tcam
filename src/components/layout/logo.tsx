import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* Main Outer Circle */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
        
        {/* Treble Clef (G-Clef) - Centered and Refined */}
        <path 
          d="M52 75C52 78.3137 49.3137 81 46 81C42.6863 81 40 78.3137 40 75C40 71.6863 42.6863 69 46 69C47.5 69 49 69.5 50 70.5V15C50 9 64 9 64 21C64 33 50 35 50 47C50 59 66 65 66 75C66 85 58 91 50 91C42 91 34 85 34 75C34 67 40 59 48 55C56 51 64 45 50 27" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Sound Waves - Arcs on the sides */}
        {/* Left Waves */}
        <path d="M30 35C24 45 24 55 30 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 30C14 43 14 57 22 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        
        {/* Right Waves */}
        <path d="M70 35C76 45 76 55 70 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M78 30C86 43 86 57 78 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        
        {/* TCAM Branding Section with Lines */}
        <line x1="38" y1="72" x2="62" y2="72" stroke="currentColor" strokeWidth="1.5" />
        <text 
          x="50" 
          y="82" 
          textAnchor="middle" 
          fill="currentColor" 
          className="font-headline font-bold" 
          style={{ fontSize: '10px', letterSpacing: '0.05em' }}
        >
          TCAM
        </text>
        <line x1="38" y1="86" x2="62" y2="86" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
