import { Poppins } from "next/font/google"
import { cn } from "~/utils/className"
import { BaseHead } from "./base-head"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"

const poppins = Poppins({
  weight: "400",
  subsets: ["latin-ext"],
})

interface AdminLayoutProps {
  children?: React.ReactNode
  title?: string
  description?: string
}

export const AdminLayout = ({
  children,
  title,
  description,
}: AdminLayoutProps) => {
  return (
    <div className={cn("flex min-h-[100dvh]", poppins.className)}>
      <BaseHead title={title} description={description} />
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="mx-4 mt-4">{children}</main>
      </div>
    </div>
  )
}
