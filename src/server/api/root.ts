import { linkRoute } from "./links/link.controller"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  links: linkRoute,
})

export type AppRouter = typeof appRouter
