import type { Metadata } from 'next';
import { Roboto as FontSans } from 'next/font/google';
import './globals.css';
import { LayoutProps } from '@/lib/types';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Trustin mail',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  );
}
