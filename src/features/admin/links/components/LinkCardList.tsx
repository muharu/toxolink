import { LinkDefaultOutput } from "~/server/api/links/link.schema"
import { HandleChecked, LinkCard, PatchIsActive } from "./LinkCard"

interface LinkCardListProps {
  linkData?: LinkDefaultOutput
  handleChecked: HandleChecked
  patchIsActive: PatchIsActive
}

export const LinkCardList = ({
  linkData,
  handleChecked,
  patchIsActive,
}: LinkCardListProps) => {
  return (
    <div className="mt-4 flex flex-col gap-y-2">
      {linkData?.map((data) => (
        <LinkCard
          key={data.id}
          handleChecked={handleChecked}
          patchIsActive={patchIsActive}
          isActive={data.is_active}
          {...data}
        />
      ))}
    </div>
  )
}
