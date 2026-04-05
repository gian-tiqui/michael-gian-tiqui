import { cn } from '@/app/lib/utils'
import { SectionLabel } from '../ui'

interface ExperienceItem {
  date: string
  title: string
  company: string
  companyHref?: string
  bullets: string[]
  current?: boolean
}

const experience: ExperienceItem[] = [
  {
    date: '2025 — present',
    title: 'Front-end Developer',
    company: 'Eplayment',
    companyHref: 'https://www.eplayment.co/',
    current: true,
    bullets: [],
  },
  {
    date: '2024 — 2025',
    title: 'IT Programmer',
    company: 'Westlake Medical Center',
    companyHref: 'https://westlakemed.com.ph/',
    current: false,
    bullets: [
      'Designed the WMC Intranet UI',
      'Developed the intranet using Next.js, NestJS, and PostgreSQL',
    ],
  },
  {
    date: 'Feb 2024 — Apr 2024',
    title: 'Web Developer Intern',
    company: 'Avietho Digital',
    companyHref: 'https://aviethodigital.com/',
    bullets: [
      'Designed and developed the City Government of Tanauan website in Figma then Next.js',
      'Integrated WordPress REST endpoints into the web application',
      'Designed the layout of Batangas.net',
      'Developed Batangas.net CMS and public website in Next.js',
      'Used GitHub for version control, Vercel and Hostinger for deployment',
    ],
  },
  {
    date: 'Apr 2023 — May 2024',
    title: 'Freelance Developer',
    company: 'Self-employed',
    bullets: [
      'Built a barber appointment web application',
      'Designed and developed an employee management website and desktop app',
      'Developed an ordering mobile application (Urban Bistro)',
      'Designed and built GeoFacia — biometric events attendance tracker',
      'Built GeoFacia Dashboard to monitor tracker activity',
      'Contributed features to a salon web app and an e-Lawyer management system',
      'Built a contact list app, a toys info management app, and a Dunkin ordering suite',
      'Contributed to an LMS mobile and web application',
    ],
  },
]

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex gap-5 border-b border-[#2E2E2B] py-4 last:border-b-0">
      <span className="min-w-28 shrink-0 pt-0.5 text-[12px] leading-relaxed text-[#8A8A82]">
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
              <span className="mt-1.5 shrink-0 text-[#2E2E2B]">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="mb-14">
      <SectionLabel>Experience</SectionLabel>
      <div>
        {experience.map((item) => (
          <ExperienceRow key={item.company} item={item} />
        ))}
      </div>
    </section>
  )
}
