import Link from 'next/link';
import { LuHome, LuSettings, LuWorkflow } from 'react-icons/lu';

export function SideNav() {
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <Link
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        href="/">
        <LuHome className="h-4 w-4" />
        Home
      </Link>
      <Link
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        href="/workflows">
        <LuWorkflow className="h-4 w-4" />
        Workflows
      </Link>
      <Link
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        href="/settings">
        <LuSettings className="h-4 w-4" />
        Settings
      </Link>
    </nav>
  );
}
