import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* Main Outer Circle */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Treble Clef Stylized Path */}
        <path 
          d="M55 70C55 73.3137 52.3137 76 49 76C45.6863 76 43 73.3137 43 70C43 66.6863 45.6863 64 49 64C50.5 64 52 64.5 53 65.5V15C53 8 67 8 67 20C67 32 53 35 53 45V70" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Sound Waves / Parentheses Left */}
        <path d="M34 35C28 45 28 55 34 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 30C18 43 18 57 26 70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        
        {/* Sound Waves / Parentheses Right */}
        <path d="M66 35C72 45 72 55 66 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M74 30C82 43 82 57 74 70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        
        {/* TCAM Branding Section */}
        <line x1="32" y1="81" x2="68" y2="81" stroke="currentColor" strokeWidth="1.2"/>
        <text 
          x="50" 
          y="90" 
          textAnchor="middle" 
          fill="currentColor" 
          className="font-headline font-bold" 
          style={{ fontSize: '10px', letterSpacing: '0.05em' }}
        >
          TCAM
        </text>
        <line x1="32" y1="94" x2="68" y2="94" stroke="currentColor" strokeWidth="1.2"/>
        
        {/* Decorative Screw/Bolt Heads */}
        <circle cx="50" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="50" cy="92" r="1.5" fill="currentColor"/>
        <circle cx="8" cy="50" r="1.5" fill="currentColor"/>
        <circle cx="92" cy="50" r="1.5" fill="currentColor"/>
      </svg>
    </div>
  );
}
