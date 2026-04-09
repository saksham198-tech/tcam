import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingInstruments from '@/components/layout/floating-instruments';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'TCAM - The Chromatica Academy of Music',
  description: 'The Chromatica Academy of Music - Nurturing musical talent from beginner to advanced levels.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><rect x="0" y="2" width="80" height="36" rx="4" fill="%23483D8B" fill-opacity="0.1"/><path d="M0 2H80" stroke="%23483D8B" stroke-width="6" stroke-linecap="round"/><text x="40" y="24" text-anchor="middle" dominant-baseline="middle" fill="%23483D8B" font-family="sans-serif" font-weight="bold" font-size="24">TCAM</text><path d="M0 38H80" stroke="%23483D8B" stroke-width="6" stroke-linecap="round"/></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <FirebaseClientProvider>
          <FloatingInstruments />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
