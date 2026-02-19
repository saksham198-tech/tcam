import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* Main Outer Circle */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Refined Treble Clef (G-Clef) */}
        <path 
          d="M52 82C52 85.3137 49.3137 88 46 88C42.6863 88 40 85.3137 40 82C40 78.6863 42.6863 76 46 76C47.5 76 49 76.5 50 77.5V10C50 4 64 4 64 16C64 28 50 30 50 42C50 54 66 60 66 70C66 80 58 86 50 86C42 86 34 80 34 70C34 62 40 54 48 50C56 46 64 40 50 22" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Sound Waves / Parentheses Left */}
        <path d="M28 35C22 45 22 55 28 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 30C12 43 12 57 20 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Sound Waves / Parentheses Right */}
        <path d="M72 35C78 45 78 55 72 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M80 30C88 43 88 57 80 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        
        {/* TCAM Branding Section */}
        <rect x="35" y="88" width="30" height="10" fill="var(--background)" />
        <text 
          x="50" 
          y="95" 
          textAnchor="middle" 
          fill="currentColor" 
          className="font-headline font-bold" 
          style={{ fontSize: '7px', letterSpacing: '0.1em' }}
        >
          TCAM
        </text>
        
        {/* Decorative Screw/Bolt Heads */}
        <circle cx="50" cy="4" r="1.2" fill="currentColor"/>
        <circle cx="6" cy="50" r="1.2" fill="currentColor"/>
        <circle cx="94" cy="50" r="1.2" fill="currentColor"/>
      </svg>
    </div>
  );
}
