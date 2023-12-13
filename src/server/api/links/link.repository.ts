import { db } from "~/server/db"
import { LinkPatchIsActiveInput } from "./link.schema"

export const findAllLink = async () => {
  return await db
    .selectFrom("link")
    .select(["id", "order", "name", "url", "is_active"])
    .orderBy("order", "asc")
    .execute()
}

export const setIsActiveLinkById = async ({
  id,
  isActive,
}: LinkPatchIsActiveInput) => {
  return await db
    .updateTable("link")
    .where("id", "=", id)
    .set({
      id,
      is_active: isActive,
    })
    .returning(["id", "order", "name", "url", "is_active"])
    .execute()
}
