import type {Metadata} from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { SupabaseProvider } from "@/lib/provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'Vantia Links',
  description: "All of Vantia's links in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          instrumentSerif.variable
        )}
      >
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
        <Toaster />
      </body>
    </html>
  );
}
