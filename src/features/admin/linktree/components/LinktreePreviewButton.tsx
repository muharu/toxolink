import { FaEye } from "react-icons/fa"
import { Drawer } from "vaul"
import { Button } from "~/components/ui/button"

export const LinktreePreviewButton = () => {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button
          className="absolute bottom-5 left-0 right-0 z-[1] mx-auto flex w-fit gap-x-2 rounded-full bg-muted font-bold text-foreground lg:hidden"
          variant="outline"
          size="lg"
        >
          <span>
            <FaEye className="h-5 w-5" />
          </span>
          <span>Preview</span>
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-10 mt-24 flex h-[90%] flex-col rounded-t-[10px] bg-zinc-100">
          <DrawerBody />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

const DrawerBody = () => {
  return (
    <div className="flex-1 rounded-t-[10px] bg-white p-4">
      <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
      <div className="mx-auto max-w-md"></div>
    </div>
  )
}
