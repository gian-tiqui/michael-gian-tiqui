import { EducationItem } from '@/app/types'
import { SectionLabel } from '../../ui'
import { education } from '@/app/lib/constants'
import EducationRow from './education-row'

const Education = () => {
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

export default Education
