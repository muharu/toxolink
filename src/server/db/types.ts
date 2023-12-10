import type { ColumnType } from "kysely"
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export type Linktree = {
  id: Generated<number>
  name: string
  url: string
  order: Generated<number>
  isActive: Generated<boolean>
  created_at: Generated<Timestamp>
  updated_at: Timestamp
}
export type DB = {
  linktree: Linktree
}
