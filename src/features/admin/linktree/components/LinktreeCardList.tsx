import { LinktreeDefaultOutput } from "~/server/api/linktree/linktree.schema"
import { HandleChecked, LinktreeCard, PatchIsActive } from "./LinktreeCard"

interface LinktreeCardListProps {
  linkData?: LinktreeDefaultOutput
  handleChecked: HandleChecked
  patchIsActive: PatchIsActive
}

export const LinktreeCardList = ({
  linkData,
  handleChecked,
  patchIsActive,
}: LinktreeCardListProps) => {
  return (
    <div className="mt-4 flex flex-col gap-y-2">
      {linkData?.map((data) => (
        <LinktreeCard
          key={data.id}
          handleChecked={handleChecked}
          patchIsActive={patchIsActive}
          {...data}
        />
      ))}
    </div>
  )
}
