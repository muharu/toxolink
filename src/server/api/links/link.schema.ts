import { z } from "zod"

export const LinkDefaultOutputSchema = z.array(
  z.object({
    id: z.number(),
    order: z.number(),
    name: z.string(),
    url: z.string(),
    is_active: z.boolean(),
  }),
)
export type LinkDefaultOutput = z.infer<typeof LinkDefaultOutputSchema>

export const LinkPatchIsActiveInputSchema = z.object({
  id: z.number(),
  isActive: z.boolean(),
})
export type LinkPatchIsActiveInput = z.infer<
  typeof LinkPatchIsActiveInputSchema
>
