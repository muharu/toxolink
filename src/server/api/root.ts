import { linktreeRoute } from "./linktree/linktree.controller"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  linktree: linktreeRoute,
})

export type AppRouter = typeof appRouter
