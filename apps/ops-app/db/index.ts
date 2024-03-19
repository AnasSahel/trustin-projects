import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/testing';

const connection = postgres(process.env.POSTGRES_URL!);
const db = drizzle(connection, { schema });

export { db, connection as dbConnection };
