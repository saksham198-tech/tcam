'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShieldCheck, Zap, Users, Sparkles, Star, Award } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { founders } from '@/lib/content';

export default function AboutPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-i')).slice(0, 4);
  const heroVideo = PlaceHolderImages.find(img => img.id === 'gallery-v1');

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
            src={heroVideo.imageUrl}
          />
        ) : (
          <div className="absolute inset-0 bg-primary/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        
        <div className="container relative z-10 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/20 bg-primary/10 backdrop-blur-sm uppercase tracking-[0.2em] text-[10px] font-bold">
            <Sparkles className="h-3 w-3 mr-2" />
            Our Legacy
          </Badge>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl font-headline mb-6">
            <span className="block">Nurturing the</span>
            <span className="text-primary">Soul of Music</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Since 2018, The Chromatica Academy of Music (TCAM) has been a sanctuary where technical mastery meets creative freedom.
          </p>
        </div>
      </section>

      {/* Philosophy & Story Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold font-headline leading-tight">The TCAM Philosophy: <br/><span className="text-primary">Beyond the Notes</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At TCAM, we don't just teach notes; we teach students how to find their own unique voice in a world of sound. Our curriculum is meticulously balanced between rigorous technical training and the boundless joy of artistic exploration. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2018 by industry veterans Rohan and Hitendra Rana, the academy was born out of a desire to provide a holistic musical education. With over 15 years of experience in radio and theatre, our founders brought a unique perspective to Lucknow's music scene—one that prioritizes stage presence and emotional connection as much as technical skill.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <h4 className="font-bold text-foreground">Passion First</h4>
                  <p className="text-sm text-muted-foreground">We ignite a lifelong love for music, ensuring students enjoy every step of their journey.</p>
                </div>
                <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10 flex flex-col gap-3">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  <h4 className="font-bold text-foreground">Technical Mastery</h4>
                  <p className="text-sm text-muted-foreground">Rigorous training standards to ensure our students perform with precision and power.</p>
                </div>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((img, i) => (
                <div key={img.id} className={i % 2 === 1 ? 'mt-8' : ''}>
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-none shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-primary/10">
                <Star className="h-24 w-24" />
              </div>
              <CardContent className="p-10 space-y-4">
                <h3 className="text-3xl font-bold font-headline">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a leading global institution that inspires musicians who are not only skilled performers but also creative, compassionate, and visionary individuals who shape the future of music worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-accent/10">
                <Award className="h-24 w-24" />
              </div>
              <CardContent className="p-10 space-y-4">
                <h3 className="text-3xl font-bold font-headline">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide personalized, high-quality music education for all ages and skill levels, fostering technical excellence while celebrating the profound joy of artistic expression through dedicated mentorship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Spotlight */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-none">The Leadership</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
              The Visionaries Behind TCAM
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder) => (
              <div key={founder.id} className="group flex flex-col items-center">
                <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl mb-8">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <h3 className="text-3xl font-bold font-headline mb-1">{founder.name}</h3>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm">{founder.role}</p>
                  </div>
                </div>
                <div className="max-w-xl text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    "{founder.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 p-8 bg-background rounded-3xl shadow-lg border border-primary/5">
              <Heart className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold font-headline">Passion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">We believe music is the heartbeat of life. We nurture it with love and dedication.</p>
            </div>
            <div className="space-y-4 p-8 bg-background rounded-3xl shadow-lg border border-primary/5">
              <Star className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold font-headline">Excellence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">We set high standards for our students, helping them achieve their full musical potential.</p>
            </div>
            <div className="space-y-4 p-8 bg-background rounded-3xl shadow-lg border border-primary/5">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold font-headline">Creativity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Every student is an artist. We provide the tools for unique creative expression.</p>
            </div>
            <div className="space-y-4 p-8 bg-background rounded-3xl shadow-lg border border-primary/5">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold font-headline">Community</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Join a vibrant family where collaboration and support are the rhythm of our academy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Quote */}
      <section className="py-24 bg-primary text-primary-foreground text-center overflow-hidden relative">
        <div className="container relative z-10">
          <blockquote className="text-3xl md:text-5xl font-headline font-medium italic max-w-4xl mx-auto leading-tight">
            "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary-foreground/30" />
            <span className="text-xs font-bold uppercase tracking-[0.4em]">Experience The Chromatica Magic</span>
            <div className="h-px w-12 bg-primary-foreground/30" />
          </div>
        </div>
      </section>
    </div>
  );
}
