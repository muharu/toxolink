import { createNextApiHandler } from "@trpc/server/adapters/next"
import { createTRPCContext } from "~/server/api/context"
import { appRouter } from "~/server/api/root"

// export API handler
// @see https://trpc.io/docs/server/adapters
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          )
        }
      : undefined,
})
