import { SectionLabel } from '../ui'

interface EducationItem {
  year: string
  name: string
  href?: string
  level: string
}

const education: EducationItem[] = [
  {
    year: '2006 — 2007',
    name: 'Sampaguita Daycare',
    level: 'Kinder',
  },
  {
    year: '2007 — 2008',
    name: 'Mater Ecclesiae School',
    href: 'https://www.materecclesiaeschool.edu.ph/',
    level: 'Preparatory',
  },
  {
    year: '2008 — 2018',
    name: 'Mater Ecclesiae School',
    href: 'https://www.materecclesiaeschool.edu.ph/',
    level: 'Primary',
  },
  {
    year: '2018 — 2020',
    name: 'Far Eastern University Alabang',
    href: 'https://feualabang.edu.ph/',
    level: 'Senior High School',
  },
  {
    year: '2020 — 2024',
    name: 'Pamantasan ng Lungsod ng Muntinlupa',
    href: 'https://www.plmun.edu.ph/',
    level: 'Tertiary',
  },
]

function EducationRow({ item }: { item: EducationItem }) {
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

export function Education() {
  return (
    <section id="education" className="mb-14">
      <SectionLabel>Education</SectionLabel>
      <div>
        {education.map((item) => (
          <EducationRow key={`${item.name}-${item.year}`} item={item} />
        ))}
      </div>
    </section>
  )
}
