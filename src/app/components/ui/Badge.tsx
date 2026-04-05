import { cn } from '@/app/lib/utils'
import { type HTMLAttributes } from 'react'

type BadgeVariant =
  | 'blue'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'danger'
  | 'outline'
type BadgeSize = 'sm' | 'md'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  pulse?: boolean
}

const variants: Record<BadgeVariant, string> = {
  blue: 'bg-[#1E2A3A] text-[#4A9EFF] border-[#2A4060]',
  neutral: 'bg-[#252522] text-[#8A8A82] border-[#2E2E2B]',
  success: 'bg-[#022C16] text-[#86EFAC] border-[#065F46]',
  warning: 'bg-[#2C2200] text-[#FDE68A] border-[#78510A]',
  danger: 'bg-[#2C0F1A] text-[#FECDD3] border-[#9F1239]',
  outline: 'bg-transparent text-[#8A8A82] border-[#2E2E2B]',
}

const sizes: Record<BadgeSize, string> = {
  sm: 'text-[11px] px-2 py-0.5 gap-1.5',
  md: 'text-xs px-3 py-1 gap-2',
}

const dotColors: Record<BadgeVariant, string> = {
  blue: 'bg-[#4A9EFF]',
  neutral: 'bg-[#8A8A82]',
  success: 'bg-[#86EFAC]',
  warning: 'bg-[#FDE68A]',
  danger: 'bg-[#FECDD3]',
  outline: 'bg-[#8A8A82]',
}

export function Badge({
  variant = 'neutral',
  size = 'sm',
  dot = false,
  pulse = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          {pulse && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                dotColors[variant],
              )}
            />
          )}
          <span
            className={cn(
              'relative inline-flex h-1.5 w-1.5 rounded-full',
              dotColors[variant],
            )}
          />
        </span>
      )}
      {children}
    </span>
  )
}
