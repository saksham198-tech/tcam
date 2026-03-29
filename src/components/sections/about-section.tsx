import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Award, Users, BookOpen, Star, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Side */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] font-bold">
                <Sparkles className="h-3 w-3 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-headline leading-[1.1]">
                Nurturing the <span className="text-primary">Soul of Music</span> Since 2020
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Chromatica Academy of Music (TCAM) is more than just a school; it's a sanctuary where technical mastery meets creative freedom. We believe music is a universal language that transforms lives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl transition-transform hover:scale-[1.02]">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To be a leading global institution, inspiring musicians who are not only skilled performers but also creative and compassionate individuals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl transition-transform hover:scale-[1.02]">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">Our Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To provide personalized education for all skill levels, fostering technical mastery and a deep appreciation for the art of sound.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats/Visual Side */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-primary p-8 rounded-[2rem] text-primary-foreground space-y-2 shadow-2xl">
                  <h4 className="text-4xl font-bold font-headline">15+</h4>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Expert Years</p>
                </div>
                <div className="bg-muted p-8 rounded-[2rem] space-y-2 border border-primary/5">
                  <Users className="h-8 w-8 text-primary" />
                  <h4 className="text-2xl font-bold font-headline">500+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Students Trained</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-accent p-8 rounded-[2rem] text-accent-foreground space-y-2 shadow-2xl">
                  <BookOpen className="h-8 w-8" />
                  <h4 className="text-2xl font-bold font-headline">6+</h4>
                  <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Instruments</p>
                </div>
                <div className="bg-card p-8 rounded-[2rem] space-y-2 border border-primary/10 shadow-lg">
                  <Music className="h-8 w-8 text-accent" />
                  <h4 className="text-2xl font-bold font-headline">100%</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Passion Driven</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-24 p-8 md:p-12 rounded-[3rem] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/10 text-center">
          <p className="text-2xl md:text-3xl font-headline font-medium italic text-foreground max-w-4xl mx-auto leading-relaxed">
            "Music is the shortest path between two hearts. At TCAM, we don't just teach notes; we teach students how to find their own unique voice in the world."
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-primary/30" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">The TCAM Philosophy</span>
            <div className="h-px w-8 bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}