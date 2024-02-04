import { LayoutProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Trsutin Workflow',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  );
}
