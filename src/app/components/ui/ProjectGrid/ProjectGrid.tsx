import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { ArrowUpRightIcon } from '../../icons'
import Badge from '../Badge'
import { ProjectCard } from '..'

export interface Project {
  name: string
  description: string
  tags: string[]
  year: string
  href?: string
}

interface ProjectGridProps {
  projects: Project[]
  className?: string
}

const ProjectGrid = ({ projects, className }: ProjectGridProps) => {
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

export default ProjectGrid
