import { RiLinksFill } from "react-icons/ri"

export const EmptyLink = () => {
  return (
    <div className="mt-[18dvh] flex flex-col items-center justify-center gap-y-2 text-muted-foreground">
      <RiLinksFill className="h-24 w-24" />
      <span className="text-center text-sm">
        You dont have any links yet
        <br /> Add a link to get started
      </span>
    </div>
  )
}
