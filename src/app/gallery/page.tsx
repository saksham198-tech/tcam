'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter((image) =>
    image.id.startsWith('gallery-')
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Our Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the musical journey at TCAM. From practice sessions to grand performances, experience our community through the lens.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl hover:shadow-primary/10">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-4">
                    <p className="text-white text-sm font-medium text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      View Full Size
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-1 bg-black/90 border-none overflow-hidden">
                <DialogTitle className="sr-only">
                  {image.description}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {`Full screen view of ${image.description}`}
                </DialogDescription>
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={image.imageUrl.replace('1080', '1920')} // Request higher res if available
                    alt={image.description}
                    fill
                    className="object-contain"
                    data-ai-hint={image.imageHint}
                  />
                </div>
                <div className="p-4 bg-background/10 backdrop-blur-md text-white">
                  <p className="text-center text-sm font-medium">{image.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}