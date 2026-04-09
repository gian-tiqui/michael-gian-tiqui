import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import CardInner from './card-inner'
import { Project } from '@/app/types'

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

const ProjectCard = ({ project, className }: ProjectCardProps) => {
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

export default ProjectCard
