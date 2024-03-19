import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { IoGitBranchOutline, IoHomeOutline } from 'react-icons/io5';

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex p-4">
        <Sidebar />
        <main className="bg-surface-container flex-1 rounded-xl p-2">
          Content
        </main>
      </div>
    </>
  );
}

const Header = () => {
  return (
    <header className="mb-4 flex items-center space-x-4 p-4">
      <h1 className="text-primary w-64 text-xl font-bold">Smart Ops</h1>
      <search className="flex-1">
        <Input
          type="search"
          placeholder="Search..."
          className="placeholder:italic"
        />
      </search>
      <div className="ml-auto">User</div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64">
      <nav className="flex flex-col space-y-4">
        <Link href={'/'} className="flex items-center">
          <IoHomeOutline className="mr-2" />
          Home
        </Link>
        <Link href={'/integration'} className="flex items-center">
          <IoGitBranchOutline className="mr-2" /> Integration
        </Link>
      </nav>
    </aside>
  );
};
