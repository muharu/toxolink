import { MdOutlineAdd } from "react-icons/md"
import { Drawer } from "vaul"
import { Button } from "~/components/ui/button"

export const AddLinkButton = () => {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button
          size="lg"
          className="flex w-full gap-x-2 rounded-full font-bold"
        >
          <span>
            <MdOutlineAdd className="h-5 w-5" />
          </span>
          <span>Add Link</span>
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-10 mt-24 flex h-[50%] flex-col rounded-t-[10px] bg-zinc-100">
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
