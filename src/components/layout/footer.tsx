import Link from 'next/link';
import { Github, Twitter, Instagram } from 'lucide-react';
import { Logo } from './logo';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-10 w-10 text-primary" />
              <span className="text-xl font-bold font-headline tracking-tighter">TCAM</span>
            </Link>
            <p className="text-muted-foreground">Nurturing the next generation of musical talent.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary">Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Admissions</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/enroll" className="text-muted-foreground hover:text-primary">Enroll Now</Link></li>
              <li><Link href="/book-demo" className="text-muted-foreground hover:text-primary">Book a Demo</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <address className="mt-4 space-y-2 not-italic text-muted-foreground">
              <p>562/114 ramgarh colony, kanpur road, lucknow 226012</p>
              <p>Email: <a href="mailto:thechromatica@gmail.com" className="hover:text-primary">thechromatica@gmail.com</a></p>
              <p>Phone: <a href="tel:+918960132690" className="hover:text-primary">+91 89601 32690</a></p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Chromatica Academy of Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
