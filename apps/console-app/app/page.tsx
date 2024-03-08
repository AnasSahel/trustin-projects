export default function Home() {
  return (
    <div className="bg-surface flex h-full flex-row">
      <nav className="w-2/12">Navigation</nav>

      <div className="bg-surface-container w-10/12 rounded-l-3xl p-4">
        <header>Header</header>
        <main>Content</main>
        <footer>Footer</footer>
      </div>
    </div>
  );
}
