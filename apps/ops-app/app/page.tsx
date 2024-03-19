import { db } from '@/db';

export default async function Home() {
  const items = await db.query.testing.findMany();
  return (
    <main>
      {items.map((item) => {
        return (
          <p key={item.id}>
            Item: {item.name} / {item.birth}
          </p>
        );
      })}
    </main>
  );
}
