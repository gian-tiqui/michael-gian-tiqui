import { StackGrid, SectionLabel } from '../ui'
import { StackItem } from '../ui/StackCard/StackCard'

const frameworks: StackItem[] = [
  { name: 'React', type: 'Framework' },
  { name: 'Next.js', type: 'Framework' },
  { name: 'React Native', type: 'Framework' },
  { name: 'Spring Boot', type: 'Framework' },
  { name: 'NestJS', type: 'Framework' },
  { name: 'ExpressJS', type: 'Framework' },
  { name: 'Laravel', type: 'Framework' },
  { name: 'Tailwind CSS', type: 'Styles' },
  { name: 'Bootstrap', type: 'Styles' },
  { name: 'Framer Motion', type: 'Animation' },
  { name: 'Material UI', type: 'UI lib' },
  { name: 'JQuery', type: 'Library' },
  { name: 'NodeJS', type: 'Runtime' },
]

const languages: StackItem[] = [
  { name: 'TypeScript', type: 'Language' },
  { name: 'JavaScript', type: 'Language' },
  { name: 'Java', type: 'Language' },
  { name: 'PHP', type: 'Language' },
  { name: 'Python', type: 'Language' },
  { name: 'C#', type: 'Language' },
  { name: 'C++', type: 'Language' },
  { name: 'SQL', type: 'Language' },
]

const databases: StackItem[] = [
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'MongoDB', type: 'Database' },
  { name: 'MySQL', type: 'Database' },
  { name: 'SQLite', type: 'Database' },
  { name: 'Firebase', type: 'Database' },
]

const tools: StackItem[] = [
  { name: 'GitHub', type: 'Version control' },
  { name: 'Figma', type: 'Design' },
  { name: 'Android Studio', type: 'IDE' },
  { name: 'Postman', type: 'API testing' },
  { name: 'Vercel', type: 'Deploy' },
  { name: 'Google Cloud', type: 'Infra' },
  { name: 'XAMPP', type: 'Dev server' },
  { name: 'Canva', type: 'Design' },
]

interface StackGroupProps {
  label: string
  items: StackItem[]
}

function StackGroup({ label, items }: StackGroupProps) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="mb-2.5 text-[11px] tracking-[0.06em] text-[#4A4A46] uppercase">
        {label}
      </p>
      <StackGrid items={items} />
    </div>
  )
}

export function Stack() {
  return (
    <section id="stack" className="mb-14">
      <SectionLabel>Tools &amp; stack</SectionLabel>
      <StackGroup label="Frameworks &amp; Libraries" items={frameworks} />
      <StackGroup label="Languages" items={languages} />
      <StackGroup label="Databases" items={databases} />
      <StackGroup label="Dev tools &amp; design" items={tools} />
    </section>
  )
}
