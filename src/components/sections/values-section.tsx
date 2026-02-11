import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, Star, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Passion',
    description: 'We believe in the power of music to inspire and connect. Our goal is to ignite a lifelong passion for music in every student.',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Excellence',
    description: 'We are committed to the highest standards of teaching and performance, helping students achieve their personal best.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Creativity',
    description: 'We encourage artistic exploration and self-expression, providing a safe space for students to find their unique voice.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Community',
    description: 'We foster a supportive and inclusive community where students, teachers, and families collaborate and grow together.',
  },
];

export default function ValuesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The principles that guide everything we do at TCAM.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="text-center bg-background shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">{value.icon}</div>
                <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                <CardDescription className="pt-2">{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
