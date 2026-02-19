import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-10 w-10 overflow-hidden rounded-full", className)}>
      <Image
        src="https://res.cloudinary.com/dlndf5tb6/image/upload/v1771493917/ChatGPT_Image_Feb_19_2026_03_07_03_PM_crddkg.png"
        alt="TCAM Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
