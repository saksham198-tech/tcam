import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* Main Outer Circle */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Treble Clef (G-Clef) Improved Path */}
        <path 
          d="M52 78C52 81.3137 49.3137 84 46 84C42.6863 84 40 81.3137 40 78C40 74.6863 42.6863 72 46 72C47.5 72 49 72.5 50 73.5V12C50 6 62 6 62 16C62 26 50 28 50 38C50 48 64 54 64 62C64 70 58 76 50 76C42 76 36 70 36 62C36 56 40 50 46 46C52 42 58 38 50 24" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Sound Waves / Parentheses Left */}
        <path d="M30 35C24 45 24 55 30 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 30C14 43 14 57 22 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Sound Waves / Parentheses Right */}
        <path d="M70 35C76 45 76 55 70 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M78 30C86 43 86 57 78 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        
        {/* TCAM Branding Section */}
        <line x1="32" y1="88" x2="68" y2="88" stroke="currentColor" strokeWidth="1"/>
        <text 
          x="50" 
          y="95" 
          textAnchor="middle" 
          fill="currentColor" 
          className="font-headline font-bold" 
          style={{ fontSize: '8px', letterSpacing: '0.1em' }}
        >
          TCAM
        </text>
        
        {/* Decorative Screw/Bolt Heads */}
        <circle cx="50" cy="6" r="1.2" fill="currentColor"/>
        <circle cx="50" cy="94" r="1.2" fill="currentColor" opacity="0.3"/> {/* Lowered opacity to clear text area */}
        <circle cx="6" cy="50" r="1.2" fill="currentColor"/>
        <circle cx="94" cy="50" r="1.2" fill="currentColor"/>
      </svg>
    </div>
  );
}
