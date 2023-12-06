import { create } from "zustand"

interface DrawerState {
  isDrawerOpen: boolean
  setIsDrawerOpen: (isOpen: boolean) => void
  closeDrawer: () => void
}

const useDrawerStore = create<DrawerState>((set) => ({
  isDrawerOpen: false,
  setIsDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
  closeDrawer: () => set({ isDrawerOpen: false }),
}))

export { useDrawerStore }
