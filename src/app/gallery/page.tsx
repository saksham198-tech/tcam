'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Play, ZoomIn, Music, Video, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const galleryMedia = PlaceHolderImages.filter((item) =>
    item.id.startsWith('gallery-')
  );

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero Header - Full width background, contained content */}
      <div className="relative overflow-hidden bg-primary/5 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),theme(colors.background))]" />
        <div className="container text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/20 bg-primary/10 backdrop-blur-sm uppercase tracking-[0.2em] text-[10px] font-bold">
            <Sparkles className="h-3 w-3 mr-2" />
            Visual Archive
          </Badge>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl font-headline mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Witness the passion, precision, and performance at The Chromatica Academy of Music. 
            A curated collection of our finest moments.
          </p>
        </div>
      </div>

      <div className="container -mt-12">
        {galleryMedia.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[300px]">
            {galleryMedia.map((item, idx) => {
              // Bento grid logic: ensure last items are standard size for perfect alignment
              const isLarge = idx % 7 === 0 && idx < galleryMedia.length - 2;
              
              return (
                <Dialog key={`${item.id}-${idx}`}>
                  <DialogTrigger asChild>
                    <div className={cn(
                      "group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 bg-muted",
                      isLarge ? 'sm:col-span-2 sm:row-span-2' : ''
                    )}>
                      {item.mediaType === 'video' ? (
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 transition-colors group-hover:bg-black/20">
                            <div className="bg-white/20 backdrop-blur-md p-6 rounded-full shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                              <Play className="h-10 w-10 fill-current ml-1" />
                            </div>
                          </div>
                          <video 
                            src={item.imageUrl} 
                            className="h-full w-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                            muted
                            playsInline
                          />
                          <div className="absolute top-4 left-4 z-20">
                             <Badge className="bg-primary/90 backdrop-blur-md border-none text-[10px] uppercase font-bold px-3 py-1 flex items-center gap-1.5">
                               <Video className="h-3 w-3" /> Video
                             </Badge>
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
                            className="object-cover transition-all duration-700 scale-105 group-hover:scale-100 group-hover:brightness-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                             <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20">
                                <ZoomIn className="text-white h-8 w-8 stroke-[1.5px]" />
                             </div>
                          </div>
                          <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                             <Badge className="bg-accent/90 backdrop-blur-md border-none text-[10px] uppercase font-bold px-3 py-1 flex items-center gap-1.5">
                               <Music className="h-3 w-3" /> Academy
                             </Badge>
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 z-20">
                          <div className="space-y-1">
                            <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">{item.mediaType}</p>
                            <p className="text-white text-lg font-bold font-headline truncate drop-shadow-lg">{item.description}</p>
                          </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] sm:max-w-5xl p-0 bg-black/95 border-none overflow-hidden rounded-[2.5rem] shadow-[0_0_100px_rgba(var(--primary),0.2)]">
                    <DialogTitle className="sr-only">
                      {item.description}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      {`Viewing ${item.description}`}
                    </DialogDescription>
                    <div className="relative w-full flex items-center justify-center bg-black min-h-[60vh] max-h-[90vh]">
                      {item.mediaType === 'video' ? (
                        <video 
                          src={item.imageUrl} 
                          controls 
                          autoPlay
                          className="max-h-[85vh] w-full object-contain"
                        />
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-8">
                          <img
                            src={item.imageUrl}
                            alt={item.description}
                            className="max-h-[80vh] max-w-full object-contain shadow-2xl rounded-xl"
                          />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white backdrop-blur-[2px]">
                      <div className="flex flex-col gap-1">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">Chromatica Academy</p>
                        <h3 className="text-2xl font-bold font-headline leading-tight">{item.description}</h3>
                        <p className="text-sm opacity-60">Nurturing Excellence Since 2018</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
