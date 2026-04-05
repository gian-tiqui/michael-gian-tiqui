import { cn } from '@/app/lib/utils'

export interface StackItem {
  name: string
  type: string
  icon?: React.ReactNode
}

interface StackCardProps {
  item: StackItem
  className?: string
}

export function StackCard({ item, className }: StackCardProps) {
  return (
    <div
      className={cn(
        'rounded-md border border-[#2E2E2B] bg-[#242422]',
        'flex flex-col gap-1 px-3.5 py-3',
        'transition-colors duration-150',
        className,
      )}
    >
      {item.icon && <span className="mb-0.5 text-[16px]">{item.icon}</span>}
      <span className="text-[12px] font-medium text-[#EEEEE9]">
        {item.name}
      </span>
      <span className="text-[11px] text-[#8A8A82]">{item.type}</span>
    </div>
  )
}

interface StackGridProps {
  items: StackItem[]
  className?: string
}

export function StackGrid({ items, className }: StackGridProps) {
  return (
    <div
      className={cn(
        'grid gap-2',
        'grid-cols-[repeat(auto-fill,minmax(90px,1fr))]',
        className,
      )}
    >
      {items.map((item) => (
        <StackCard key={item.name} item={item} />
      ))}
    </div>
  )
}
