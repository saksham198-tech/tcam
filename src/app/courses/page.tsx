import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/content';
import { ArrowRight, Clock, DollarSign, BarChart } from 'lucide-react';

export const metadata = {
  title: 'Instruments & Courses',
  description: 'Explore the wide range of instruments and courses available at TCAM, from beginner to advanced levels.',
};

export default function CoursesPage() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Instruments & Courses
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find the perfect musical journey for you. We offer a diverse range of courses for all ages and skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{course.title}</CardTitle>
                <CardDescription>{course.instrument}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-muted-foreground">{course.description}</p>
                <div className="space-y-2 text-sm text-foreground">
                  <div className="flex items-center">
                    <BarChart className="mr-2 h-4 w-4 text-primary" />
                    <span>Level: {course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-primary" />
                    <span>Fee: ${course.fee}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/enroll">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
