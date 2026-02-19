import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center p-1", className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* Neon Glow Filter */}
        <defs>
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Neon Circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="46" 
          stroke="#B026FF" 
          strokeWidth="2.5" 
          filter="url(#neon-glow)"
        />

        {/* Treble Clef - Digitally Recreated from Image */}
        <path 
          d="M52 75C52 78.3 49.3 81 46 81C42.7 81 40 78.3 40 75C40 71.7 42.7 69 46 69C47.5 69 49 69.5 50 70.5V15C50 9 64 9 64 21C64 33 50 35 50 47C50 59 66 65 66 75C66 85 58 91 50 91C42 91 34 85 34 75C34 67 40 59 48 55C56 51 64 45 50 27" 
          stroke="#B026FF" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#neon-glow)"
        />

        {/* Arc Waves (Inner and Outer on both sides) */}
        {/* Left Arcs */}
        <path d="M34 38C30 46 30 54 34 62" stroke="#B026FF" strokeWidth="2" strokeLinecap="round" filter="url(#neon-glow)"/>
        <path d="M28 32C22 44 22 56 28 68" stroke="#B026FF" strokeWidth="2" strokeLinecap="round" filter="url(#neon-glow)"/>

        {/* Right Arcs */}
        <path d="M66 38C70 46 70 54 66 62" stroke="#B026FF" strokeWidth="2" strokeLinecap="round" filter="url(#neon-glow)"/>
        <path d="M72 32C78 44 78 56 72 68" stroke="#B026FF" strokeWidth="2" strokeLinecap="round" filter="url(#neon-glow)"/>

        {/* TCAM Branding with Horizontal Lines */}
        <line x1="36" y1="74" x2="64" y2="74" stroke="#B026FF" strokeWidth="2" filter="url(#neon-glow)"/>
        <text 
          x="50" 
          y="83" 
          textAnchor="middle" 
          fill="#B026FF" 
          className="font-headline font-bold" 
          style={{ fontSize: '11px', letterSpacing: '0.05em' }}
          filter="url(#neon-glow)"
        >
          TCAM
        </text>
        <line x1="36" y1="87" x2="64" y2="87" stroke="#B026FF" strokeWidth="2" filter="url(#neon-glow)"/>
      </svg>
    </div>
  );
}
