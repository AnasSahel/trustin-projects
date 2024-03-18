export default function Page() {
  return (
    <>
      <header className="mb-4 flex p-4">
        <h1 className="w-64">Smart Ops</h1>
        <search>Search bar</search>
        <div className="ml-auto">User</div>
      </header>
      <div className="flex p-4">
        <aside className="w-64">Sidebar</aside>
        <main className="bg-surface-container flex-1 rounded-xl p-2">
          Content
        </main>
      </div>
    </>
  );
}
