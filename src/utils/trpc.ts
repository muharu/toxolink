import { httpBatchLink, httpLink, splitLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
import { TRPCError } from "@trpc/server"
import superjson from "superjson"
import { AppRouter } from "~/server/api/root"
import { getBaseUrl } from "./getBaseUrl"

export const trpc = createTRPCNext<AppRouter>({
  config(_opts) {
    return {
      transformer: superjson,
      queryClientConfig: {
        defaultOptions: {
          queries: {
            retry(_failureCount, error) {
              if (error instanceof TRPCError && error.code === "NOT_FOUND") {
                return true
              }
              return false
            },
          },
        },
      },
      links: [
        splitLink({
          condition(op) {
            // check for context property `skipBatch`
            return op.context.skipBatch === true
          },
          // when condition is true, use normal request
          true: httpLink({
            url: `${getBaseUrl()}/api/trpc`,
          }),
          // when condition is false, use batching
          false: httpBatchLink({
            url: `${getBaseUrl()}/api/trpc`,
          }),
        }),
      ],
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
})
