import { adminProcedure, createTRPCRouter } from "../trpc"
import {
  LinkDefaultOutputSchema,
  LinkPatchIsActiveInputSchema,
} from "./link.schema"
import { getAllLink, patchIsActiveLink } from "./link.service"

export const linkRoute = createTRPCRouter({
  get: createTRPCRouter({
    all: adminProcedure
      .output(LinkDefaultOutputSchema)
      .query(() => getAllLink()),
  }),
  patch: createTRPCRouter({
    isActive: adminProcedure
      .input(LinkPatchIsActiveInputSchema)
      .output(LinkDefaultOutputSchema)
      .mutation(({ input }) =>
        patchIsActiveLink({ id: input.id, isActive: input.isActive }),
      ),
  }),
})
