import { Navbar, SideNav } from '@/components/molecules';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

export const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Trustin Workflow',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <div className="h-full w-full flex flex-row">
          <div className="w-[240px] border-r">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <h1>Trustin Workflows</h1>
              </Link>
            </div>

            <div className="flex-1 overflow-auto py-2">
              <SideNav />
            </div>
          </div>
          <div className="flex flex-col w-[calc(100%-240px)]">
            <Navbar />
            <main className="m-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
