import { Card, CardContent } from "~/components/ui/card"

export const LinktreePlaceholder = () => (
  <Card className="animate-pulse shadow-lg">
    <CardContent className="p-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="mb-2 h-6 w-40 rounded-lg bg-gray-300 font-bold"></span>
          <small className="h-4 w-24 rounded-lg bg-gray-200"></small>
        </div>
        <div className="h-6 w-12 rounded-lg bg-gray-200"></div>
      </div>
    </CardContent>
  </Card>
)
