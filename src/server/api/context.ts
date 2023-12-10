import { CreateNextContextOptions } from "@trpc/server/adapters/next"
import { db } from "../db"

export async function createTRPCContext(_opts: CreateNextContextOptions) {
  return {
    db,
    isAdmin: true, // hard-coded for now
  }
}
export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>
