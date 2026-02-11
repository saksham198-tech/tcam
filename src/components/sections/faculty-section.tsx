import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { faculty } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function FacultySection() {
  const facultyImages = PlaceHolderImages.filter(img => img.id.startsWith('faculty-'));
  
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Meet Our Faculty
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn from passionate and experienced professionals dedicated to your growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member, index) => {
            const image = facultyImages[index % facultyImages.length];
            return (
              <Card key={member.id} className="text-center border-0 shadow-none bg-transparent">
                <CardHeader className="p-0">
                  <div className="relative h-56 w-56 mx-auto">
                    <Image
                      src={image.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      width={224}
                      height={224}
                      className="rounded-full object-cover aspect-square border-4 border-background shadow-lg"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.expertise}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
