import { cn } from "@/lib/utils"

type LogoTextProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function LogoText() {
  return (
    <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">Gymvana</h2>
  )
} 