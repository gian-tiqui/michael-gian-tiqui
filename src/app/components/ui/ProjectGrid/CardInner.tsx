import { Badge } from '..'
import { ArrowUpRightIcon } from '../../icons'
import { Project } from './ProjectGrid'

const CardInner = ({ project }: { project: Project }) => {
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

export default CardInner
