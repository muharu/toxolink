import { db } from "~/server/db"
import { LinktreePatchIsActiveInput } from "./linktree.schema"

export const findAllLink = async () => {
  return await db
    .selectFrom("linktree")
    .select(["id", "order", "name", "url", "isActive"])
    .orderBy("order", "asc")
    .execute()
}

export const setIsActiveLinkById = async ({
  id,
  isActive,
}: LinktreePatchIsActiveInput) => {
  return await db
    .updateTable("linktree")
    .where("id", "=", id)
    .set({
      id,
      isActive,
    })
    .returning(["id", "order", "name", "url", "isActive"])
    .execute()
}
