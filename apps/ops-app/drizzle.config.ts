import type { Config } from 'drizzle-kit';
export default {
  driver: 'pg',
  schema: './db/schema/*',
  out: './drizzle',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
