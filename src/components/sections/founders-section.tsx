'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { founders } from '@/lib/content';

export default function FoundersSection() {
  return (
    <section className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            Meet Our Founders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The visionary leaders behind The Chromatica Academy of Music.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {founders.map((founder) => (
            <Card key={founder.id} className="group overflow-hidden border-none shadow-xl bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative w-full md:w-2/5 aspect-[4/5] overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="font-headline text-3xl mb-1">{founder.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold text-lg">{founder.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed text-base italic">
                      "{founder.description}"
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
