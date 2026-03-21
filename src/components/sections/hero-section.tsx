import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 flex h-full items-end justify-center text-center text-white">
        <div className="container pb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            <span className="block">Unleash Your</span>
            <span className="block text-white/90">Musical Potential</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/90 md:max-w-3xl">
            At The Chromatica Academy of Music, we nurture your passion for music with expert guidance and a vibrant community.
          </p>
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild>
              <Link href="/enroll">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm">
              <Link href="/book-demo">
                <PlayCircle className="mr-2 h-5 w-5" />
                Book a Free Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
