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
import { Play, ZoomIn } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function GalleryPage() {
  const galleryMedia = PlaceHolderImages.filter((item) =>
    item.id.startsWith('gallery-')
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-xs">
            Visual Journey
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Our Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the musical heart of TCAM. From intensive practice sessions to grand stage performances.
          </p>
        </div>

        {galleryMedia.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryMedia.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl hover:shadow-primary/20 bg-muted">
                    {item.mediaType === 'video' ? (
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 transition-colors group-hover:bg-black/20">
                          <div className="bg-primary p-5 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/90">
                            <Play className="h-8 w-8 text-white fill-white ml-1" />
                          </div>
                        </div>
                        <video 
                          src={item.imageUrl} 
                          className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                          muted
                          playsInline
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                           <Badge className="bg-black/60 backdrop-blur-md border-none text-[10px] uppercase font-bold px-2">Video</Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-full w-full">
                        <Image
                          src={item.imageUrl}
                          alt={item.description}
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover transition-all duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                           <ZoomIn className="text-white h-10 w-10 stroke-[1.5px]" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                        <p className="text-white text-xs font-bold uppercase tracking-widest opacity-70 mb-1">{item.mediaType}</p>
                        <p className="text-white text-sm font-semibold truncate">{item.description}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 bg-black/95 border-none overflow-hidden rounded-3xl">
                  <DialogTitle className="sr-only">
                    {item.description}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    {`Viewing ${item.description}`}
                  </DialogDescription>
                  <div className="relative w-full flex items-center justify-center bg-black min-h-[50vh] max-h-[90vh]">
                    {item.mediaType === 'video' ? (
                      <video 
                        src={item.imageUrl} 
                        controls 
                        autoPlay
                        className="max-h-[85vh] w-full"
                      />
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center p-4">
                        <img
                          src={item.imageUrl}
                          alt={item.description}
                          className="max-h-[85vh] max-w-full object-contain shadow-2xl"
                        />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="text-lg font-bold font-headline">{item.description}</p>
                    <p className="text-sm opacity-70">The Chromatica Academy of Music</p>
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
