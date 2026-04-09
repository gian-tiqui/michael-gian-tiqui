import { cn } from '@/app/lib/utils'
import { StackCard } from '..'
import { StackItem } from './stack-card'

interface StackGridProps {
  items: StackItem[]
  className?: string
}

const StackGrid = ({ items, className }: StackGridProps) => {
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

export default StackGrid
