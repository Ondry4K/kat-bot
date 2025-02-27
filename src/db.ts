import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";

const client = new Client({
  connectionString: Bun.env.CONN_STRING,
});

await client.connect();
export const db = drizzle(client, { schema });
