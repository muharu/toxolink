import { Button, ButtonProps } from "~/components/ui/button"
import { cn } from "~/utils/className"

interface NavLinkProps extends ButtonProps {
  title: string
  icon: React.ReactNode
  isActive: boolean
  className?: string
}

export const NavLink = ({
  title,
  icon,
  isActive,
  className,
  ...props
}: NavLinkProps) => {
  return (
    <li>
      <Button
        variant={isActive ? "default" : "outline"}
        className={cn(
          "flex w-full items-center justify-start gap-x-2.5 hover:font-bold",
          isActive && "font-bold",
          className,
        )}
        {...props}
      >
        <span>{icon}</span>
        <span>{title}</span>
      </Button>
    </li>
  )
}
