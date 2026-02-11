import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/content';
import { ArrowRight, Music } from 'lucide-react';

export default function CoursesSection() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <section id="courses" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Featured Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start your journey with our most popular courses, designed for all skill levels.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <Music className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle className="font-headline text-2xl">{course.title}</CardTitle>
                        <CardDescription>{course.instrument}</CardDescription>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary" className="w-full">
                  <Link href={`/courses`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/courses">
                    View All Courses
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
