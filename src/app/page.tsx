import HeroSection from '@/components/sections/hero-section';
import ValuesSection from '@/components/sections/values-section';
import CoursesSection from '@/components/sections/courses-section';
import FoundersSection from '@/components/sections/founders-section';
import TestimonialsSection from '@/components/sections/testimonials-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <CoursesSection />
      <FoundersSection />
      <TestimonialsSection />
    </>
  );
}
