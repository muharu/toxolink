import { RiDraggable } from "react-icons/ri"
import { Card, CardContent } from "~/components/ui/card"
import { Switch } from "~/components/ui/switch"

export type HandleChecked = (isActive: boolean, id: number) => boolean
export type PatchIsActive = (params: { id: number; isActive: boolean }) => void

interface LinktreeCardProps {
  name: string
  url: string
  isActive: boolean
  id: number
  handleChecked: HandleChecked
  patchIsActive: PatchIsActive
}

export const LinktreeCard = ({
  name,
  url,
  isActive,
  id,
  handleChecked,
  patchIsActive,
}: LinktreeCardProps) => {
  return (
    <Card className="shadow-lg">
      <CardContent className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <RiDraggable className="h-5 w-5" />
          <div className="ml-2.5 flex flex-col">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{url}</p>
          </div>
        </div>
        <div className="flex">
          <Switch
            name={name}
            checked={handleChecked(isActive, id)}
            onCheckedChange={(checked) =>
              patchIsActive({ id, isActive: checked })
            }
          />
        </div>
      </CardContent>
    </Card>
  )
}
