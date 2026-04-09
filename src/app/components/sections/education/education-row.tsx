import { EducationItem } from '@/app/types'

interface EducationRowProps {
  item: EducationItem
}

const EducationRow = ({ item }: EducationRowProps) => {
  return (
    <div className="flex items-baseline gap-5 border-b border-[#2E2E2B] py-3.5 last:border-b-0">
      <span className="min-w-28 shrink-0 text-[12px] text-[#8A8A82]">
        {item.year}
      </span>
      <div className="flex min-w-0 flex-1 items-baseline justify-between gap-4">
        <div>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-[#F2F2EE] transition-colors duration-150 hover:text-[#4A9EFF]"
            >
              {item.name}
            </a>
          ) : (
            <p className="text-[14px] font-medium text-[#F2F2EE]">
              {item.name}
            </p>
          )}
        </div>
        <span className="shrink-0 text-[12px] text-[#4A4A46]">
          {item.level}
        </span>
      </div>
    </div>
  )
}

export default EducationRow
