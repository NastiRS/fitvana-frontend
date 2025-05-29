import { cn } from "@/lib/utils"

type LogoTextProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function LogoText({ className, size = 'md' }: LogoTextProps) {
  const sizeClasses = {
    sm: 'text-lg font-bold',
    md: 'text-xl font-bold',
    lg: 'text-2xl font-bold',
    xl: 'text-3xl font-bold'
  }

  return (
    <h1 
      className={cn(
        "font-extrabold tracking-tight text-gymvana-secondary transition-colors",
        "hover:text-gymvana-accent cursor-pointer",
        "font-[family-name:var(--font-poppins)]",
        sizeClasses[size],
        className
      )}
    >
      Gymvana
    </h1>
  )
} 