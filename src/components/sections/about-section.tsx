export default function AboutSection() {
    return (
      <section id="about" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              About The Chromatica Academy of Music
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fostering a lifelong love for music through exceptional education and a supportive community.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary font-headline">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading institution for music education, renowned for our innovative teaching methods, world-class faculty, and for inspiring a new generation of musicians who are not only skilled performers but also creative and compassionate individuals.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary font-headline">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive and personalized music education for students of all ages and abilities. We are committed to creating a nurturing environment that encourages artistic exploration, technical mastery, and a deep appreciation for all forms of music.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  