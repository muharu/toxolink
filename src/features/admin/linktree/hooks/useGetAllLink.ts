import { trpc } from "~/utils/trpc"

export const useGetAllLink = () => {
  return trpc.linktree.get.all.useQuery(undefined, {
    refetchOnWindowFocus: false,
  })
}
