'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Award, Users, BookOpen, Star, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary/5">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/20 bg-primary/10 uppercase tracking-[0.2em] text-[10px] font-bold">
              <Sparkles className="h-3 w-3 mr-2" />
              Our Legacy
            </Badge>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl font-headline mb-6">
              Nurturing Musical <br />
              <span className="text-primary">Soul Since 2018</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Chromatica Academy of Music (TCAM) is a sanctuary where technical mastery meets creative freedom. We believe music is the shortest path between two hearts.
            </p>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-0" />
      </section>

      {/* Story & Philosophy */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-headline">The TCAM Philosophy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At TCAM, we don't just teach notes; we teach students how to find their own unique voice. Our curriculum is designed to balance rigorous technical training with the joy of artistic exploration.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Passion First</h4>
                    <p className="text-sm text-muted-foreground">Igniting a lifelong love for sound.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Excellence</h4>
                    <p className="text-sm text-muted-foreground">Highest standards of performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt="Academy atmosphere"
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl font-extrabold text-primary font-headline">15+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Expert Years</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-extrabold text-primary font-headline">500+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Students</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-extrabold text-primary font-headline">6+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Instruments</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-extrabold text-primary font-headline">100%</p>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-primary/10 shadow-xl overflow-hidden group">
              <CardContent className="p-10 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                  <Star className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold font-headline">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a leading global institution that inspires musicians who are not only skilled performers but also creative, compassionate, and visionary individuals who shape the future of music.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/10 shadow-xl overflow-hidden group">
              <CardContent className="p-10 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent transition-transform group-hover:scale-110">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold font-headline">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide personalized, high-quality music education for all ages and skill levels, fostering technical excellence while celebrating the profound joy of artistic expression.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-24 bg-primary text-primary-foreground text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <blockquote className="text-3xl md:text-5xl font-headline font-medium italic max-w-4xl mx-auto leading-tight">
            "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary-foreground/30" />
            <span className="text-xs font-bold uppercase tracking-[0.4em]">The Chromatica Spirit</span>
            <div className="h-px w-12 bg-primary-foreground/30" />
          </div>
        </div>
      </section>
    </div>
  );
}
