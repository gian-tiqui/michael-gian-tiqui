import { cn } from '@/app/lib/utils'
import { type HTMLAttributes } from 'react'

interface SectionLabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

const SectionLabel = ({ children, className, ...props }: SectionLabelProps) => {
  return (
    <p
      className={cn(
        'mb-5 text-[11px] font-medium tracking-[0.08em] text-[#8A8A82] uppercase',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export default SectionLabel
