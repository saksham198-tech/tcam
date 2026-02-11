'use client';

import { Guitar, Piano, Mic, Drum, Music } from 'lucide-react';
import { useState, useEffect } from 'react';

const instrumentIcons = [Guitar, Piano, Mic, Drum, Music];

type Instrument = {
  id: number;
  Icon: React.ElementType;
  style: React.CSSProperties;
};

const FloatingInstruments = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);

  useEffect(() => {
    const generatedInstruments = Array.from({ length: 15 }).map((_, i) => {
      const Icon = instrumentIcons[i % instrumentIcons.length];
      const size = Math.random() * 4 + 2; // 2rem to 6rem
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 20 + 15; // 15s to 35s
      const animationDelay = Math.random() * 15; // 0s to 15s

      return {
        id: i,
        Icon,
        style: {
          width: `${size}rem`,
          height: `${size}rem`,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `-${animationDelay}s`,
        },
      };
    });
    setInstruments(generatedInstruments);
  }, []);

  if (instruments.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="relative h-full w-full">
        {instruments.map(({ id, Icon, style }) => (
          <div
            key={id}
            className="instrument-bubble absolute text-primary/5"
            style={style}
          >
            <Icon className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingInstruments;
