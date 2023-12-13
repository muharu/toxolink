import { LinktreePlaceholder } from "./LinktreePlaceholder"

export const LinktreeCardListPlaceholder = ({ amount }: { amount: number }) => {
  return (
    <div className="mt-4 flex flex-col gap-y-2">
      {Array.from({ length: amount }, (_, index) => (
        <LinktreePlaceholder key={index} />
      ))}
    </div>
  )
}
