import { Input } from '@/components/ui';
import { LuSearch } from 'react-icons/lu';

export function Navbar() {
  return (
    <header className="flex h-[60px] items-center gap-4 border-b px-6">
      <LuSearch className="h-4 w-4 translate-x-10" />
      <Input placeholder="Search..." type="search" className="pl-8" />
    </header>
  );
}
