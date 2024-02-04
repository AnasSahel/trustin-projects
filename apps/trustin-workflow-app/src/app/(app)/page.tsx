import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex h-full w-full flex-row">
        <div className="w-[240px] border-r">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href={'/'}>
              Trustin Workflow
            </Link>
          </div>
          <div></div>
        </div>
        <div className="w-[calc(100%-240px)]">
          <header className="h-[60px] border-b"></header>
        </div>
      </div>
    </main>
  );
}
