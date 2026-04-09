import { StackGrid, StackItem } from '../../ui'

interface StackGroupProps {
  label: string
  items: StackItem[]
}

const StackGroup = ({ label, items }: StackGroupProps) => {
  return (
    <div className="mb-5 last:mb-0">
      <p className="mb-2.5 text-[11px] tracking-[0.06em] text-[#4A4A46] uppercase">
        {label}
      </p>
      <StackGrid items={items} />
    </div>
  )
}

export default StackGroup
