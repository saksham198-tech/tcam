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
    icon: 'https://res.cloudinary.com/dlndf5tb6/image/upload/q_auto/f_auto/v1775761414/Gemini_Generated_Image_wj3hnuwj3hnuwj3h-removebg-preview_kt3fme.png',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
