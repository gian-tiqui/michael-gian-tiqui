import { cn } from '@/app/lib/utils'
import { SectionLabel } from '../../ui'
import { experience } from '@/app/lib/constants'
import ExperienceRow from './experience-row'

const Experience = () => {
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

export default Experience
