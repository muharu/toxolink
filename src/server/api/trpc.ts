import { initTRPC, TRPCError } from "@trpc/server"
import superjson from "superjson"
import { ZodError } from "zod"
import { TRPCContext } from "./context"

const t = initTRPC.context<TRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        error: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createTRPCRouter = t.router
export const createTRPCMiddleware = t.middleware
export const mergeTRPCRouters = t.mergeRouters

const isAdmin = createTRPCMiddleware(({ next, ctx }) => {
  if (!ctx.isAdmin) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to perform this action",
    })
  }

  return next({
    ctx: {
      isAdmin: ctx.isAdmin,
    },
  })
})

export const publicProcedure = t.procedure

export const adminProcedure = t.procedure.use(isAdmin)
