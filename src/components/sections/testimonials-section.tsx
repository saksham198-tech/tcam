import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/content';
import { Star } from 'lucide-react';

function renderStars(rating: number) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from the heart of our community.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={`https://picsum.photos/seed/${testimonial.id + 20}/100/100`} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="mb-4 text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                      <div className="mb-2">{renderStars(testimonial.rating)}</div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
