import { Project } from '@/app/types'
import { SectionLabel, ProjectGrid } from '../ui'
import { projects } from '@/app/lib/constants'

const Work = () => {
  return (
    <section id="work" className="mb-14">
      <SectionLabel>Projects</SectionLabel>
      <p className="-mt-2 mb-5 text-[13px] leading-relaxed text-[#8A8A82]">
        Most repos and live deployments are private — shown here for reference.
      </p>
      <ProjectGrid projects={projects} />
    </section>
  )
}

export default Work
