import { cn } from '@/lib/utils';
import { Music } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Music className="h-full w-full" />
    </div>
  );
}
