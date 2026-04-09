import { cn } from '@/app/lib/utils'
import { ExperienceItem } from '@/app/types'

interface ExperienceRowProps {
  item: ExperienceItem
}

const ExperienceRow = ({ item }: ExperienceRowProps) => {
  return (
    <div className="flex gap-5 border-b border-[#2E2E2B] py-4 last:border-b-0">
      <span className="w-35 shrink-0 pt-0.5 text-[12px] leading-relaxed text-[#8A8A82]">
        {item.date}
      </span>
      <div className="min-w-0 flex-1">
        <p className="mb-0.5 text-[14px] font-medium text-[#F2F2EE]">
          {item.title}
        </p>
        {item.companyHref ? (
          <a
            href={item.companyHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'mb-3 inline-block text-[13px] transition-colors duration-150',
              item.current
                ? 'text-[#4A9EFF] hover:text-[#7BBEFF]'
                : 'text-[#4A9EFF]/70 hover:text-[#4A9EFF]',
            )}
          >
            {item.company}
          </a>
        ) : (
          <p className="mb-3 text-[13px] text-[#4A4A46]">{item.company}</p>
        )}
        <ul className="space-y-1.5">
          {item.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-2 text-[13px] leading-relaxed text-[#8A8A82]"
            >
              <span className="shrink-0 text-[#2E2E2B]">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceRow
