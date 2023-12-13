import { TRPCError } from "@trpc/server"
import { findAllLink, setIsActiveLinkById } from "./linktree.repository"
import { LinktreePatchIsActiveInput } from "./linktree.schema"

export const getAllLink = async () => {
  const linktreeData = await findAllLink()

  if (linktreeData.length === 0) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Belum ada link yang ditambahkan",
    })
  }

  return linktreeData
}

export const patchIsActiveLink = async ({
  id,
  isActive,
}: LinktreePatchIsActiveInput) => {
  return await setIsActiveLinkById({ id, isActive })
}
