import { BsGear } from "react-icons/bs"
import { LuLayoutList } from "react-icons/lu"
import { MdOutlineCategory } from "react-icons/md"
import { TbBoxSeam, TbFileInvoice } from "react-icons/tb"
import { VscDashboard } from "react-icons/vsc"

export const MENUS = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: <VscDashboard className="h-6 w-6" />,
  },
  {
    title: "Linktree",
    link: "/admin/linktree",
    icon: <LuLayoutList className="h-6 w-6" />,
  },
  {
    title: "Products",
    link: "/admin/products",
    icon: <TbBoxSeam className="h-6 w-6" />,
  },
  {
    title: "Categories",
    link: "/admin/categories",
    icon: <MdOutlineCategory className="h-6 w-6" />,
  },
  {
    title: "Orders",
    link: "/admin/orders",
    icon: <TbFileInvoice className="h-6 w-6" />,
  },
  {
    title: "Settings",
    link: "/admin/settings",
    icon: <BsGear className="h-6 w-6" />,
  },
]
