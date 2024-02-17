import { LayoutProps } from '@/lib/types';
import { HiOutlineMail } from 'react-icons/hi';

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="grid h-full grid-cols-2 gap-4">
      <section className="flex flex-col items-center justify-between px-8 py-16">
        {/* Header */}
        <div className="flex flex-row items-center justify-center space-x-2">
          <HiOutlineMail size={24} className="text-purple-500" />
          <h1 className="text-center text-xl font-bold text-gray-900">
            Trustin Mail
          </h1>
        </div>
        {children}
      </section>
      <section
        className="rounded-l-3xl bg-cover bg-center"
        style={{ backgroundImage: `url("/static/bg-001.jpg")` }}>
        <div className="h-full w-full rounded-l-3xl"></div>
      </section>
    </main>
  );
}
