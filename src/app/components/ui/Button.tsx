import { cn } from '@/app/lib/utils'
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  forwardRef,
} from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variants: Record<ButtonVariant, string> = {
  primary: [
    'bg-[#2563EB] text-white border-transparent',
    'hover:bg-[#1D4ED8]',
    'active:scale-[0.98]',
  ].join(' '),
  secondary: [
    'bg-transparent text-[#EEEEE9] border-[#2E2E2B]',
    'hover:bg-[#252522] hover:border-[#4A4A46]',
    'active:scale-[0.98]',
  ].join(' '),
  ghost: [
    'bg-transparent text-[#8A8A82] border-transparent',
    'hover:text-[#EEEEE9] hover:bg-[#252522]',
    'active:scale-[0.98]',
  ].join(' '),
}

const sizes: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-[6px]',
  md: 'text-[13px] px-4 py-[9px] gap-2 rounded-[8px]',
  lg: 'text-sm px-5 py-3 gap-2 rounded-[8px]',
}

const base =
  'inline-flex items-center justify-center font-medium border transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A18] disabled:opacity-40 disabled:pointer-events-none'

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = 'secondary',
      size = 'md',
      iconLeft,
      iconRight,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(base, variants[variant], sizes[size], className)

    if ((props as ButtonAsAnchor).as === 'a') {
      const { as: _as, ...anchorProps } = props as ButtonAsAnchor
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorProps}
        >
          {iconLeft && <span className="shrink-0">{iconLeft}</span>}
          {children}
          {iconRight && <span className="shrink-0">{iconRight}</span>}
        </a>
      )
    }

    const { as: _as, ...buttonProps } = props as ButtonAsButton & {
      as?: 'button'
    }
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonProps}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    )
  },
)

Button.displayName = 'Button'
