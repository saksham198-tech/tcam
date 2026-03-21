
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
import { Play } from 'lucide-react';

export default function GalleryPage() {
  const galleryMedia = PlaceHolderImages.filter((item) =>
    item.id.startsWith('gallery-')
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Our Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the musical journey at TCAM. From practice sessions to grand performances, experience our community through photos and videos.
          </p>
        </div>

        {galleryMedia.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed rounded-xl">
            <p className="text-muted-foreground">Gallery is empty. Please add photos (photo1.jpg, etc.) and videos (video1.mp4, etc.) to your public/assets folder.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryMedia.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl hover:shadow-primary/10 bg-muted">
                    {item.mediaType === 'video' ? (
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10 transition-colors group-hover:bg-black/10">
                          <div className="bg-primary/90 p-4 rounded-full shadow-lg transform transition-transform group-hover:scale-110">
                            <Play className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                        <video 
                          src={item.imageUrl} 
                          className="h-full w-full object-cover"
                          muted
                          playsInline
                        />
                      </div>
                    ) : (
                      <Image
                        src={item.imageUrl}
                        alt={item.description}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={item.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-4 z-20">
                      <p className="text-white text-sm font-medium text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                        {item.mediaType === 'video' ? 'Play Video' : 'View Full Size'}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-1 bg-black/95 border-none overflow-hidden rounded-xl">
                  <DialogTitle className="sr-only">
                    {item.description}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    {`Viewing ${item.description}`}
                  </DialogDescription>
                  <div className="relative aspect-video w-full flex items-center justify-center bg-black">
                    {item.mediaType === 'video' ? (
                      <video 
                        src={item.imageUrl} 
                        controls 
                        autoPlay
                        className="max-h-[85vh] w-full"
                      />
                    ) : (
                      <div className="relative h-full w-full">
                        <Image
                          src={item.imageUrl}
                          alt={item.description}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-background/20 backdrop-blur-md text-white border-t border-white/10">
                    <p className="text-center text-sm font-semibold tracking-wide uppercase">{item.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
