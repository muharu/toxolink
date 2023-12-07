import { Kysely, PostgresDialect } from "kysely"
import { Pool } from "pg"
import { DB } from "./types"

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL as string,
  }),
})

export const db = new Kysely<DB>({
  dialect,
})
