import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { AiTwotoneBell } from "react-icons/ai"
import { CgMenuLeftAlt } from "react-icons/cg"
import DefaultAvatar from "~/assets/default-avatar.jpg"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { BRAND } from "~/data/constants"
import { useDrawerStore } from "~/data/state/drawer-state"
import { MENUS } from "./menu-constant"
import { NavLink } from "./navigation-link"

export const Navbar = () => {
  return (
    <header className="h-16 border-b-2 bg-background">
      <div className="mx-4 flex h-full items-center justify-between lg:mr-10">
        <div className="flex items-center gap-x-1">
          <HamburgerButtonTriggerDrawer />
          <Link
            href="/admin/dashboard"
            className="flex text-lg font-bold lg:hidden"
          >
            {BRAND.NAME}
          </Link>
          <Breadcrumb />
        </div>
        <div className="flex items-center gap-x-1.5">
          <NotificationButton />
          <Avatar />
        </div>
      </div>
    </header>
  )
}

const HamburgerButtonTriggerDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerStore()

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="mr-1.5 flex lg:hidden"
          aria-label="hamburger-icon"
        >
          <CgMenuLeftAlt className="h-7 w-7" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-2xl">
            <Link href="/admin/dashboard">{BRAND.NAME}</Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-4">
          <ul className="flex flex-col gap-y-2">
            <DrawerMenu />
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

const DrawerMenu = () => {
  const { closeDrawer } = useDrawerStore()
  const { pathname, push, prefetch, events } = useRouter()

  const handleMouseEnter = (link: string) => () => prefetch(link)
  const isActive = (link: string) => pathname === link
  const handleNavigation = (link: string) => () => {
    push(link)
    events.on("routeChangeComplete", closeDrawer)
  }

  return MENUS.map((menu) => {
    return (
      <NavLink
        key={menu.link}
        isActive={isActive(menu.link)}
        onMouseEnter={handleMouseEnter(menu.link)}
        onClick={handleNavigation(menu.link)}
        size="lg"
        {...menu}
      />
    )
  })
}

const Breadcrumb = () => {
  const { pathname } = useRouter()
  const breadcrumbs = pathname.split("/").filter(Boolean)

  if (breadcrumbs.length <= 1) return null

  const formattedBreadcrumbs = breadcrumbs
    .slice(-2)
    .map(
      (breadcrumb) => breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1),
    )
    .join(" > ")

  return (
    <h5 className="hidden text-sm font-medium lg:flex">
      {formattedBreadcrumbs}
    </h5>
  )
}

const NotificationButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      aria-label="notification-icon"
    >
      <AiTwotoneBell className="h-6 w-6" />
    </Button>
  )
}

const Avatar = () => {
  return (
    <Image
      src={DefaultAvatar}
      className="rounded-full border"
      alt="avatar"
      width={40}
      height={40}
      priority
    />
  )
}
