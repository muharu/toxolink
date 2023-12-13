import { TRPCError } from "@trpc/server"
import { findAllLink, setIsActiveLinkById } from "./link.repository"
import { LinkPatchIsActiveInput } from "./link.schema"

export const getAllLink = async () => {
  const linkData = await findAllLink()

  if (linkData.length === 0) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "No links have been added yet",
    })
  }

  return linkData
}

export const patchIsActiveLink = async ({
  id,
  isActive,
}: LinkPatchIsActiveInput) => {
  return await setIsActiveLinkById({ id, isActive })
}
