import { z } from "zod"

export const LinktreeDefaultOutputSchema = z.array(
  z.object({
    id: z.number(),
    order: z.number(),
    name: z.string(),
    url: z.string(),
    isActive: z.boolean(),
  }),
)
export type LinktreeDefaultOutput = z.infer<typeof LinktreeDefaultOutputSchema>

export const LinktreePatchIsActiveInputSchema = z.object({
  id: z.number(),
  isActive: z.boolean(),
})
export type LinktreePatchIsActiveInput = z.infer<
  typeof LinktreePatchIsActiveInputSchema
>
