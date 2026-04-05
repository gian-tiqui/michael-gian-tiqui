import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { ArrowUpRightIcon } from '../icons'
import { Badge } from './Badge'

export interface Project {
  name: string
  description: string
  tags: string[]
  year: string
  href?: string
}

interface ProjectCardProps {
  project: Project
  className?: string
}

const cardBaseClass = (hasLink: boolean, className?: string) =>
  cn(
    'group flex items-start justify-between gap-4',
    'bg-[#242422] px-5 py-5',
    'border-b border-[#2E2E2B] last:border-b-0',
    'transition-colors duration-150',
    hasLink ? 'cursor-pointer hover:bg-[#2A2A27]' : 'cursor-default',
    className,
  )

function CardInner({ project }: { project: Project }) {
  return (
    <>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-sm font-medium text-[#F2F2EE]">
          {project.name}
        </p>
        <p className="text-[13px] leading-relaxed text-[#8A8A82]">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="blue">
              {tag}
            </Badge>
          ))}
          <Badge variant="neutral">{project.year}</Badge>
        </div>
      </div>
      <span className="mt-0.5 shrink-0">
        {project.href ? (
          <span className="text-[#4A4A46] transition-colors duration-150 group-hover:text-[#8A8A82]">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        ) : (
          <span className="rounded-sm border border-[#2E2E2B] px-1.5 py-0.5 text-[11px] font-medium tracking-wide text-[#3A3A37]">
            private
          </span>
        )}
      </span>
    </>
  )
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  if (project.href) {
    return (
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardBaseClass(true, className)}
      >
        <CardInner project={project} />
      </Link>
    )
  }

  return (
    <div className={cardBaseClass(false, className)}>
      <CardInner project={project} />
    </div>
  )
}

interface ProjectGridProps {
  projects: Project[]
  className?: string
}

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg',
        'border border-[#2E2E2B]',
        className,
      )}
    >
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  )
}
