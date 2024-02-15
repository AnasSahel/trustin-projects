import { LayoutProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Roboto as FontSans } from 'next/font/google';
import './globals.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Trustin Mail',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background h-screen font-sans antialiased',
          fontSans.variable
        )}>
        {children}
      </body>
    </html>
  );
}
