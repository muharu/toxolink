import Link from "next/link"
import { useRouter } from "next/router"
import { BRAND } from "~/data/constants"
import { MENUS } from "./menu-constant"
import { NavLink } from "./navigation-link"

export const Sidebar = () => {
  return (
    <aside className="hidden w-64 flex-col border-r lg:flex">
      <Link
        href="/admin/dashboard"
        className="mx-auto my-5 text-2xl font-bold uppercase"
      >
        {BRAND.NAME}
      </Link>
      <nav>
        <ul className="mx-auto flex w-[90%] flex-col gap-y-2">
          <SidebarMenu />
        </ul>
      </nav>
    </aside>
  )
}

const SidebarMenu = () => {
  const { pathname, push, prefetch } = useRouter()

  const handleMenuClick = (link: string) => () => push(link)
  const handleMouseEnter = (link: string) => () => prefetch(link)
  const isActive = (link: string) => pathname === link

  return MENUS.map((menu) => {
    return (
      <NavLink
        key={menu.link}
        isActive={isActive(menu.link)}
        onMouseEnter={handleMouseEnter(menu.link)}
        onClick={handleMenuClick(menu.link)}
        {...menu}
      />
    )
  })
}
