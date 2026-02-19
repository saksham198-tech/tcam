import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-10 w-10 flex items-center justify-center", className)}>
      <Image
        src="https://res.cloudinary.com/dlndf5tb6/image/upload/v1771492469/WhatsApp_Image_2026-02-19_at_2.31.09_PM_uh2nqd.jpg"
        alt="TCAM Logo"
        width={40}
        height={40}
        className="object-contain mix-blend-screen"
        priority
      />
    </div>
  );
}
