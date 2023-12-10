import { linktreeRoute } from "./routers/linktree"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  linktree: linktreeRoute,
})

export type AppRouter = typeof appRouter
