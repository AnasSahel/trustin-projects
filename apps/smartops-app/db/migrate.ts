import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const asyncMigrate = async () => {
  const sql = postgres(process.env.POSTGRES_URL!, {
    max: 1,
    onnotice: (_) => {},
  });
  const db = drizzle(sql);

  try {
    await migrate(db, { migrationsFolder: 'drizzle' });
    console.log('Migration successful');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  await sql.end();
};

asyncMigrate();
