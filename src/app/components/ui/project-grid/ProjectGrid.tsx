import { cn } from '@/app/lib/utils'
import { ProjectCard } from '..'
import { Project } from '@/app/types'

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
