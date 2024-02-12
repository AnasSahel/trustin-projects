import { LayoutProps } from '@/lib/types';
import AuthImg from './components/auth-img';

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="grid h-full grid-cols-2 gap-4 p-4">
      <AuthImg />
      {children}
    </main>
  );
}
