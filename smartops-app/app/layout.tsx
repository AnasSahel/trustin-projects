import { LayoutProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Open_Sans as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Smart Ops',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-surface text-on-surface font-sans antialiased',
          fontSans.variable
        )}>
        {children}
      </body>
    </html>
  );
}
