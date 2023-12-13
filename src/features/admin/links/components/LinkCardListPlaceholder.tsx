import { LinkPlaceholder } from "./LinkPlaceholder"

export const LinkCardListPlaceholder = ({ amount }: { amount: number }) => {
  return (
    <div className="mt-4 flex flex-col gap-y-2">
      {Array.from({ length: amount }, (_, index) => (
        <LinkPlaceholder key={index} />
      ))}
    </div>
  )
}
