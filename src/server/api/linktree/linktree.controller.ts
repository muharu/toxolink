import { adminProcedure, createTRPCRouter } from "../trpc"
import {
  LinktreeDefaultOutputSchema,
  LinktreePatchIsActiveInputSchema,
} from "./linktree.schema"
import { getAllLink, patchIsActiveLink } from "./linktree.service"

export const linktreeRoute = createTRPCRouter({
  get: createTRPCRouter({
    all: adminProcedure
      .output(LinktreeDefaultOutputSchema)
      .query(() => getAllLink()),
  }),
  patch: createTRPCRouter({
    isActive: adminProcedure
      .input(LinktreePatchIsActiveInputSchema)
      .output(LinktreeDefaultOutputSchema)
      .mutation(({ input }) =>
        patchIsActiveLink({ id: input.id, isActive: input.isActive }),
      ),
  }),
})
