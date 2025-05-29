import Link from "next/link"
import { cn } from "@/lib/utils"

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export default function NavLink({ href, children, className, isActive }: NavLinkProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "text-gymvana-secondary hover:text-gymvana-accent transition-colors duration-200",
        "font-medium text-sm md:text-base",
        "relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0",
        "after:bg-gymvana-accent after:transition-all after:duration-300",
        "hover:after:w-full",
        isActive && "text-gymvana-accent after:w-full",
        className
      )}
    >
      {children}
    </Link>
  )
} 