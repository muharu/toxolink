import { trpc } from "~/utils/trpc"

export const useGetAllLink = () => {
  return trpc.links.get.all.useQuery(undefined, {
    refetchOnWindowFocus: false,
  })
}
