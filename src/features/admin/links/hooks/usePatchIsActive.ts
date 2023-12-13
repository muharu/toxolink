import { useEffect, useState } from "react"
import { trpc } from "~/utils/trpc"

export const usePatchIsActive = () => {
  const utils = trpc.useUtils()

  const [switchStates, setSwitchStates] = useState<{ [id: number]: boolean }>(
    {},
  )

  const handleChecked = (checked: boolean, id: number) => {
    return switchStates[id] ?? checked
  }

  const mutation = trpc.links.patch.isActive.useMutation({
    onMutate: async ({ id, isActive }) => {
      setSwitchStates((prev) => ({ ...prev, [id]: isActive }))
      return { id, isActive }
    },
    onSettled: async () => {
      await utils.links.get.all.invalidate()
    },
    trpc: {
      context: {
        skipBatch: true,
      },
    },
  })

  const { variables: optimisticDataVariables } = mutation

  useEffect(() => {
    if (optimisticDataVariables) {
      setSwitchStates((prev) => ({
        ...prev,
        [optimisticDataVariables.id]: optimisticDataVariables.isActive,
      }))
    }
  }, [optimisticDataVariables])

  return { ...mutation, handleChecked }
}
